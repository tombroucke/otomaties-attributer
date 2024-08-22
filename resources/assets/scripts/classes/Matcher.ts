class Test {
    regexp: RegExp;

    constructor(regexp: RegExp)
    {
        this.regexp = regexp;
    }

    test(str: URL | string): 'pass' | 'fail' {
        //= cast as string
        if (str instanceof URL)
        {
            str = str.toString();
        }

        //= pass or fail
        return str.match( this.regexp ) ? 'pass' : 'fail';
    }
}

class Match {
    static all( str: string, ...tests: Test[]): boolean {
        //= bail
        if (tests.length <= 0) return false;

        //= execute tests and filter by "pass"
        return tests
            .map((t: Test) => t.test(str))
            .filter(r => r == 'pass').length == tests.length;
    }

    static one(str: string, ...tests: Test[]): boolean {
        //= bail
        if (tests.length <= 0) return false;

        //= execute tests and filter by "pass"
        return tests
            .map((t: Test) => t.test(str))
            .filter(r => r == 'pass').length >= 1;
    }
}

const Tests = {
    //= organic
    google: new Test( /\.google(?:\.com?|\.\w{2})(?:\.\w{2})?/ ),
    bing: new Test( /((?:bing|bing\.office|microsoftapp)\.net)|((?:bing(?:apis)?|windowssearch|bingforbusiness)\.com)|((?:cortana)\.ai)/ ),
    yahoo: new Test(/yahoo(?:\.com?(?:\.\w{2})?|\.\w{2})/),
    
    //= social
    twitter: new Test( /(?:tw(?:ttr|img|itter))(?:\.com|\.net)|x\.com/ ),
    facebook: new Test( /(?:the)?face(?:b|c)oo?o?k?\.(?:com?|\w{2})(?:\.\w{2})?|(?:fb(?:cdn)?\.(?:com|me|net))|(?:ins?tr?a?gram\.com?)|^m\.me|messenger\.com|akamaihd\.net/ )
}

export { Match, Test, Tests };