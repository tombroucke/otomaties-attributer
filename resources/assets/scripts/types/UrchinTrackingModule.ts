/**
 * @param {URL} url The full website URL
 * @param {string | null} id (optional) The ads campaign id.
 * @param {string | null} source The referrer (e.g. google, newsletter)
 * @param {string | null} medium Marketing medium (e.g. cpc, banner, email)
 * @param {string | null} name Product, promo code, or slogan (e.g. spring_sale) One of campaign name or campaign id are required.
 * @param {string | null} term (optional) Identify the paid keywords
 * @param {string | null} content Use to differentiate ads
 * 
 * @see https://ga-dev-tools.google/ga4/campaign-url-builder/
 */
type TUrchinTrackingModule = {
	url: URL;
	id: string | null;
	source: string | null;
	medium: string | null;
	name: string | null,
	term: string | null,
	content: string | null,
}

export type { TUrchinTrackingModule };