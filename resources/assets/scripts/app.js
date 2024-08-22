// import MediumFactory from './bak/medium-factory';
import { Mediumator  } from "./classes/Mediumator";

console.log('app.js v3');


// let requestedUrl = new URL("https://smappee.test:3000/home/?utm_source=GOOGLE&utm_medium=cpc&utm_campaign=spring_sale&utm_id=someID&utm_term=paidKeywords&utm_content=diffAds");
// requestedUrl = "https://www.google.com";

const mTest = Mediumator.test(
	"https://www.smappee.com/nl/laadpaal/thuis/",
	"https://www.instagram.com"
);

console.log( mTest );

// const attribution = localStorage.getItem('otm_attribution');

// if (!attribution) {
// 	const referer = document.referrer.split('?')[0];
// 	const queryString = window.location.href.split('?')[1];
// 	const landingPage = window.location.href;
// 	const medium = JSON.stringify(MediumFactory.createMedium(referer, queryString, landingPage));
// 	localStorage.setItem('otm_attribution', medium);
// }
