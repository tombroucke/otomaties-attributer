import { TGad } from "../types/Gad";
import { TMedium, TMediumName } from "../types/Medium";
import { TUrchinTrackingModule } from "../types/UrchinTrackingModule";
import { Match, Tests } from "./Matcher";
import { RefererMedium, GadMedium, UtmMedium } from "./Medium";


class Mediumator {
	/**
	 * Returns a Medium object
	 * 
	 * @param {URL | String } request 	The requested url; e.g. https://mysite.com/nl/contact/
	 * @param {URL | string} referer	(optional) The source url from which the page has been requested
	 * 
	 * @returns {TMedium} An object with 4 properties type, medium, request and referer
	 */
	static test(request: URL | string, referer: URL | string | null = null): TMedium {
		//= check if URL has UTM
		const utm = this.getUrchinTrackingModule(request);

		if (utm.medium)
		{
			return this.parseUtm( utm );
		}

		const gad = this.getGad( request) ;

		if (gad.gad_source)
		{
			return new GadMedium( 'cpc', gad.url );
		}

        return this.parseReferer( request, referer );
	}

	/**
	 * Handle URL with UTM
	 */
	private static parseUtm( utm: TUrchinTrackingModule ): TMedium
	{
		let medium: TMediumName = "referral";

		switch ( utm.medium?.toLowerCase() )
		{
			case "cpc":
			case "display":
			case "email":
				medium = "cpc";
				break;
			
			case "pmax":
			case "leadgen":
			case "search":
				medium = "cpc";
				break;
			
			case "google":
			case "bing":
			case "yahoo":
			case "ecosia":
			case "duckduckgo":
			case "qwant":
				medium = "organic";
				break;
			
			case "twitter":
			case "x":
			case "facebook":
			case "fb":
			case "tiktok":
			case "instagram":
			case "ig":
			case "linkedin":
			case "pinterest":
			case "youtube":
				medium = "social";
				break;
			
			case "newsletter":
				medium = "email";
				break;
		}

		return new UtmMedium( medium, utm.url );
	}

	/**
	 * Handle URL without UTM
	 */
	private static parseReferer(request : URL | string, referer: URL | string | null = null): TMedium
	{
		//= cast anyway
		request = new URL(request);
		referer = referer ? new URL(referer) : null;

		//= parse referer exceptions
		if (referer?.pathname.match(/^(?:\/wp)?\/wp-(?:admin|login)/))
		{
			referer = null;
		}
		
		//= NO referer
		if (referer == null )
		{
			return new RefererMedium("direct", request);
		}

		//= YES referer
		if (Match.one(
			referer.toString(),
			Tests.google,
			Tests.bing,
			Tests.yahoo,
			Tests.ecosia,
			Tests.duckduckgo,
			Tests.qwant
		))
		{
			return new RefererMedium("organic", request, referer);
		}

		if (Match.one(
			referer.toString(),
			Tests.twitter,
			Tests.facebook,
			Tests.tiktok,
			Tests.instagram,
			Tests.linkedin,
			Tests.pinterest,
			Tests.youtube
		))
		{
			return new RefererMedium("social", request, referer);
		}

		return new RefererMedium("referral", request, referer);
	}

	private static getUrchinTrackingModule(url: URL | string): TUrchinTrackingModule {
		//= cast anyway
		url = new URL(url);

		//= bail early
		if (!(url instanceof URL))
		{
			throw new Error("Refer not an URL!");
		}
		
		//= return
		return {
			url: url,
			id: url.searchParams.get( "utm_id" ),
			source: url.searchParams.get("utm_source"),
			medium: url.searchParams.get("utm_medium"),
			name: url.searchParams.get("utm_campaign"),
			term: url.searchParams.get("utm_term"),
			content: url.searchParams.get("utm_content"),
		};
	}

	private static getGad(url: URL | string): TGad {
		//= cast anyway
		url = new URL(url);

		//= bail early
		if (!(url instanceof URL))
		{
			throw new Error("Refer not an URL!");
		}

		//= return
		return {
			url: url,
			gad_source: url.searchParams.get("gad_source"),
			gclid: url.searchParams.get("gclid"),
		}
	}
}

export { Mediumator };
