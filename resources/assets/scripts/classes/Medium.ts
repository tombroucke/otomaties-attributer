import { TMedium, TMediumName, TMediumType } from "../types/Medium";

class Medium implements TMedium {
	type: TMediumType;
	medium: TMediumName;
	request: URL | null;
	referer: URL | null;

	constructor(
		type: TMediumType = "utm",
		medium: TMediumName,
		request: URL | null = null,
		referer: URL | null = null,
	)
	{
		this.type = type;
		this.medium = medium;
		this.request = request;
		this.referer = referer;
	}
}

class UtmMedium extends Medium {
	constructor(
		medium: TMediumName,
		request: URL | null = null,
		referer: URL | null = null
	)
	{
		super( "utm", medium, request, referer );
	}
}

class RefererMedium extends Medium {
	constructor(
		medium: TMediumName,
		request: URL | null = null,
		referer: URL | null = null
	)
	{
		super( "referer", medium, request, referer );
	}
}

export { UtmMedium, RefererMedium };