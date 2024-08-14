import MediumFactory from './medium-factory';

const attribution = localStorage.getItem('otm_attribution');

if (!attribution) {
	const referer = document.referrer.split('?')[0];
	const queryString = window.location.href.split('?')[1];
	const landingPage = window.location.href;
	const medium = JSON.stringify(MediumFactory.createMedium(referer, queryString, landingPage));
	localStorage.setItem('otm_attribution', medium);
}
