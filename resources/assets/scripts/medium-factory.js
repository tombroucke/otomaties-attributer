import { Cpc, Direct, Email, Organic, Referral, Social } from './medium.js';

export default class MediumFactory {
	static createMedium(referer, querystring = '', landingPage = '') {
		let medium = null;

		querystring = querystring ? querystring : '';
		landingPage = landingPage ? landingPage : '';

		if (
			querystring.includes('gad_source') ||
			querystring.includes('gclid')
		) {
			medium = new Cpc();
		} else if (
			referer.includes('google.') ||
			referer.includes('bing.') ||
			referer.includes('yahoo.') ||
			referer.includes('ecosia.') ||
			referer.includes('duckduckgo.') ||
			referer.includes('qwant.')
		) {
			medium = new Organic();
		} else if (
			referer.includes('facebook.') ||
			referer.includes('twitter.') ||
			referer.includes('x.') ||
			referer.includes('linkedin.') ||
			referer.includes('instagram.') ||
			referer.includes('pinterest.') ||
			referer.includes('youtube.') ||
			referer.includes('youtu.') ||
			referer.includes('tiktok.') ||
			referer.includes('snapchat.')
		) {
			medium = new Social();
		} else if (
			querystring.includes('utm_medium=email') ||
			referer.includes('mailchimp.')
		) {
			medium = new Email();
		} else if (referer === '') {
			medium = new Direct();
		} else {
			medium = new Referral();
		}

		medium.setReferer(referer);
		medium.setLandingPageUri(landingPage);
		return medium;
	}
}
