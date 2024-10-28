/**
 * @param {URL} url The full website URL
 * @param {string | null} gad_source The source
 * @param {string | null} gclid The Google Click Identifier
 */
type TGad = {
	url: URL;
	gad_source: string | null;
	gclid: string | null;
}

export type { TGad };
