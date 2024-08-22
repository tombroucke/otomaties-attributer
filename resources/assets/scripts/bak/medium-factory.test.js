import MediumFactory from './medium-factory';

test('is organic', () => {
	expect(MediumFactory.createMedium('https://google.com/path', '?query=x').medium).toBe('organic');
	expect(MediumFactory.createMedium('https://google.be/path', 'query=x').medium).toBe('organic');
	expect(MediumFactory.createMedium('https://bing.com').medium).toBe('organic');
});

test('is social', () => {
	expect(MediumFactory.createMedium('https://facebook.com', '?query=x').medium).toBe('social');
});

test('gad_source', () => {
	expect(MediumFactory.createMedium('https://smappee.com/infinity', 'gad_source=test').medium).toBe('cpc');
});

test('landingPage is set', () => {
	expect(MediumFactory.createMedium('https://smappee.com/infinity', null, 'https://smappee.com/infinity').landingPage).toBe('https://smappee.com/infinity');
});
