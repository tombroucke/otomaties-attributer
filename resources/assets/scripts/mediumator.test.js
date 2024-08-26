import { Mediumator } from "./classes/Mediumator";

/**
 * UTM is set
 */
test('is utm/cpc', () => {
    expect(Mediumator.test(
        "https://smappee.test/nl/laadpaal/thuis/?utm_source=GOOGLE&utm_medium=cpc&utm_campaign=spring_sale&utm_id=someID&utm_term=paidKeywords&utm_content=diffAds",
    )).toMatchObject({
        medium: 'cpc'
    });

    expect(Mediumator.test(
        "https://smappee.test/nl/laadpaal/thuis/?utm_source=GOOGLE&utm_medium=display",
    )).toMatchObject({
        medium: 'cpc'
    });

    expect(Mediumator.test(
        "https://smappee.test/nl/laadpaal/thuis/?utm_medium=email&utm_campaign=spring_sale&utm_id=someID&utm_term=paidKeywords&utm_content=diffAds",
    )).toMatchObject({
        medium: 'cpc'
    });

    expect(Mediumator.test(
        "https://smappee.test/nl/laadpaal/thuis/?utm_medium=pmax&utm_campaign=spring_sale&utm_id=someID&utm_term=paidKeywords&utm_content=diffAds",
    )).toMatchObject({
        medium: 'cpc'
    });

    expect(Mediumator.test(
        "https://smappee.test/nl/laadpaal/thuis/?utm_medium=leadgen&utm_campaign=spring_sale&utm_id=someID&utm_term=paidKeywords&utm_content=diffAds",
    )).toMatchObject({
        medium: 'cpc'
    });

    expect(Mediumator.test(
        "https://smappee.test/nl/laadpaal/thuis/?utm_medium=search&utm_campaign=spring_sale&utm_id=someID&utm_term=paidKeywords&utm_content=diffAds",
    )).toMatchObject({
        medium: 'cpc'
    });

    expect(Mediumator.test(
        "https://smappee.test/nl/laadpaal/thuis/?utm_medium=display&utm_campaign=spring_sale&utm_id=someID&utm_term=paidKeywords&utm_content=diffAds",
    )).toMatchObject({
        medium: 'cpc'
    });
});

test('is utm/organic', () => {
    expect(Mediumator.test(
        "https://smappee.test/nl/laadpaal/thuis/?utm_medium=google",
    )).toMatchObject({
        medium: 'organic'
    });

    expect(Mediumator.test(
        "https://smappee.test/nl/laadpaal/thuis/?utm_medium=bing",
    )).toMatchObject({
        medium: 'organic'
    });

    expect(Mediumator.test(
        "https://smappee.test/nl/laadpaal/thuis/?utm_medium=ecosia",
    )).toMatchObject({
        medium: 'organic'
    });

    expect(Mediumator.test(
        "https://smappee.test/nl/laadpaal/thuis/?utm_medium=yahoo",
    )).toMatchObject({
        medium: 'organic'
    });

    expect(Mediumator.test(
        "https://smappee.test/nl/laadpaal/thuis/?utm_medium=qwant",
    )).toMatchObject({
        medium: 'organic'
    });
});

test('is utm/organic', () => {
    expect(Mediumator.test(
        "https://smappee.test/nl/laadpaal/thuis/?utm_medium=twitter",
    )).toMatchObject({
        medium: 'social'
    });

    expect(Mediumator.test(
        "https://smappee.test/nl/laadpaal/thuis/?utm_medium=fb",
    )).toMatchObject({
        medium: 'social'
    });

    expect(Mediumator.test(
        "https://smappee.test/nl/laadpaal/thuis/?utm_medium=tiktok",
    )).toMatchObject({
        medium: 'social'
    });

    expect(Mediumator.test(
        "https://smappee.test/nl/laadpaal/thuis/?utm_medium=youtube",
    )).toMatchObject({
        medium: 'social'
    });
});

test('is utm/organic', () => {
    expect(Mediumator.test(
        "https://smappee.test/nl/laadpaal/thuis/?utm_medium=newsletter",
    )).toMatchObject({
        medium: 'email'
    });
});


test('is utm/organic', () => {
    expect(Mediumator.test(
        "https://smappee.test/nl/laadpaal/thuis/?utm_medium=otomaties",
    )).toMatchObject({
        medium: 'referral'
    });
});

/**
 * UTM is not set
 */
test('is referer/direct', () => {
    expect(Mediumator.test(
        "https://smappee.test/nl/laadpaal/thuis/"
    )).toMatchObject({
        medium: 'direct',
        referer: null
    });
});

test('is referer/organic', () => {
    expect(Mediumator.test(
        "https://smappee.test/nl/laadpaal/thuis/",
        "https://www.google.com"
    )).toMatchObject({
        medium: 'organic'
    });

    expect(Mediumator.test(
        "https://smappee.test/nl/laadpaal/thuis/",
        "https://www.bing.com"
    )).toMatchObject({
        medium: 'organic'
    });

    expect(Mediumator.test(
        "https://smappee.test/nl/laadpaal/thuis/",
        "https://www.yahoo.com"
    )).toMatchObject({
        medium: 'organic'
    });

    expect(Mediumator.test(
        "https://smappee.test/nl/laadpaal/thuis/",
        "https://www.qwant.com"
    )).toMatchObject({
        medium: 'organic'
    });
});

test('is referer/social', () => {
    expect(Mediumator.test(
        "https://smappee.test/nl/laadpaal/thuis/",
        "https://www.facebook.com"
    )).toMatchObject({
        medium: 'social'
    });

    expect(Mediumator.test(
        "https://smappee.test/nl/laadpaal/thuis/",
        "https://www.tiktok.com"
    )).toMatchObject({
        medium: 'social'
    });

    expect(Mediumator.test(
        "https://smappee.test/nl/laadpaal/thuis/",
        "https://www.youtu.be"
    )).toMatchObject({
        medium: 'social'
    });

    expect(Mediumator.test(
        "https://smappee.test/nl/laadpaal/thuis/",
        "https://www.yt.be"
    )).toMatchObject({
        medium: 'social'
    });

    expect(Mediumator.test(
        "https://smappee.test/nl/laadpaal/thuis/",
        "https://www.youtube.com"
    )).toMatchObject({
        medium: 'social'
    });

    expect(Mediumator.test(
        "https://smappee.test/nl/laadpaal/thuis/",
        "https://www.youtubekids.com"
    )).toMatchObject({
        medium: 'social'
    });
});

test('is referer/referral', () => {
    expect(Mediumator.test(
        "https://smappee.test/nl/laadpaal/thuis/",
        "https://www.tijd.be"
    )).toMatchObject({
        medium: 'referral'
    });
});