/**
 * @param {string | null} type UTM or Referer
 * @param {string | null} medium One of the predefined values
 * @param {URL | null} referer The source url from which the page has been requested
 * @param {URL | null} page The requested page url we landed on
 */
type TMedium = {
    type: TMediumType;
	medium: TMediumName;
	request: URL | null;
	referer: URL | null;
}

type TMediumType = 'utm' | 'gad' | 'referer' | null;

type TMediumName = 'cpc' | 'organic' | 'social' | 'email' | 'referral' | 'direct' | null;

export type { TMedium, TMediumType, TMediumName }
