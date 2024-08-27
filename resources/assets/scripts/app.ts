import { Mediumator  } from "./classes/Mediumator";
import { TAttributorStore } from "./types/AttributorStore";
import { TMedium } from "./types/Medium";

// const mTest = 

class Attributor
{
	attrElems: NodeListOf<HTMLElement>;
	data: TMedium;

	constructor()
	{
		this.attrElems = document.querySelectorAll('[class*=oto-attr]');

		//= bail early
		if (this.attrElems.length <= 0)
		{
			console.warn('No Attributor fields found!');
			return;
		}

		//= fetch from storage
		if (!("localStorage" in window))
		{
			console.warn('Local storage not accessible!');
			return;
		}

		//= boot
		this.readFromStorage();
		this.populateAttrs();
	}

	readFromStorage()
	{
		console.log('readFromStorage');

		//= undefined > set store
		let json: string | null = localStorage.getItem('oto/attributor');
		if (json == null)
		{
			console.log('undefined, set store');

			json = this.#createAttributorStoreJSON();
			localStorage.setItem('oto/attributor', json);
		}

		//= invalid > set store
		const parsed: TAttributorStore = JSON.parse(json);
		if (false == this.#validateStorage( parsed ) )
		{
			console.log('expired, set store');

			json = this.#createAttributorStoreJSON();
			localStorage.setItem('oto/attributor', json);
		}

		//= next
		this.data = parsed.payload;
	}

	#validateStorage( data: TAttributorStore )
	{
		//= bail early
		if (!("expires" in data) || !("payload" in data))
		{
			return false;
		}

		//= validate timestamp
		const now = new Date();
		const expires = new Date(data.expires);

		if (now >= expires)
		{
			return false;
		}

		return true;
	}

	#createAttributorStoreJSON(): string
	{
		console.log('createAttributorStoreJSON');

		const response = Mediumator.test(
			window.location.href,
			document.referrer
		);

		const expires = new Date();
		expires.setTime(expires.getTime() + 4 * 60 * 60 * 1000 ); //= add 4 hours

		const data = JSON.stringify({
			payload: response,
			expires: expires,
		});

		return data;
	}

	populateAttrs()
	{
		console.log('populateAttrs');

		this.attrElems.forEach((gfieldEl: HTMLElement) => {
			const inputEl: HTMLInputElement|null = gfieldEl.querySelector('input');
			const matches: RegExpMatchArray|null = gfieldEl.classList.toString().match(/(?<className>oto-attr__(?<prop>[^\s]+))/);

			//= bail
			if (matches == null || inputEl == null)
			{
				return;
			}

			//const className = matches?.groups.className;
			const prop = matches?.groups.prop;

			//= dynamically set field oto-attr__{{propName}} e.g. medium is also data<TMedium>.medium
			if (prop in this.data)
			{
				inputEl.value = this.data[prop];
			}
		});
	}
}

new Attributor();