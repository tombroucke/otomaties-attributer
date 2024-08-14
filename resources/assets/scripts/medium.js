class Medium {
	setReferer(referer) {
		this.referer = referer;
	}

	setLandingPageUri(landingPage) {
		this.landingPage = landingPage;
	}
}

export class Direct extends Medium {
	constructor() {
		super();
		this.medium = 'direct';
	}
}

export class Cpc extends Medium {
	constructor() {
		super();
		this.medium = 'cpc';
	}
}

export class Organic extends Medium {
	constructor() {
		super();
		this.medium = 'organic';
	}
}

export class Social extends Medium {
	constructor() {
		super();
		this.medium = 'social';
	}
}

export class Email extends Medium {
	constructor() {
		super();
		this.medium = 'email';
	}
}

export class Referral extends Medium {
	constructor() {
		super();
		this.medium = 'referral';
	}
}
