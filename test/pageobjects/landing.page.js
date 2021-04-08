const Page = require('./page');


class Landing extends Page {
    /**
     * define selectors using getter methods
     */
    get cookiesButton () { return $('#ct-ultimate-gdpr-cookie-accept') }
    get texto1 (){return $('//*[@id="you"]/div/div/div/div[2]/div[2]/div[1]/p')}
    

    /**
     * 
     * 
     */
    clickOnCookies () {
        this.cookiesButton.click(); 
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new Landing();
