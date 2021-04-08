const LoginPage = require('../pageobjects/login.page');
const MindPage = require('../pageobjects/landing.page');

describe('Test Mindata', () => {
    // it('should be loaded fine', () => {
    //     LoginPage.open();
    //     console.log("comprobamos que existe cookiees");
    //     expect(MindPage.cookiesButton).toBeExisting();
    //     console.log("Hacemos click y pausamos");
    //     browser.pause(3000)
    //     MindPage.clickOnCookies();
    //     console.log("comprobamos que existe cookiees despues del click");
    //     /*browser.pause(3000)
    //     expect(MindPage.cookiesButton).toBeExisting();            */
    //     expect(MindPage.texto1).toHaveTextContaining('Discover your Roadmap. Unlock the best technological solutions to your needs.')
    // });


    it('Main page should be load fine', function () {
        browser.url('https://www.mindata.es/');

        const we = $('=We');
        const you = $('=You');
        const then = $('=Them');
        const cookies = $('#ct-ultimate-gdpr-cookie-accept');
        const texto1 = $('//div[@id="you"]/div/div/div/div[2]/div[2]/div/p');
        const texto2 = $('//div[@id="you"]/div/div/div/div[2]/div[2]/div[2]/p');
        const texto3 = $('//div[@id="you"]/div/div/div/div[2]/div[2]/div[3]/p');
        const texto4 = $('//div[@id="you"]/div/div/div/div[2]/div[2]/div[4]/p');
        const texto5 = $('//div[@id="you"]/div/div/div/div[2]/div[2]/div[5]/p');

        const tituloWe = $('//*[@id="we"]/div/div/div/div[2]/div[1]/h2');
        const textoWe = $('//div[@id="we"]/div/div/div/div[2]/div/p[2]');
        

        const accenture = $('//img[@alt="Accenture"]');
		const airEuropa = $('//img[@alt="Air Europa"]');
		const avoris = $('//img[@alt="Ávoris"]');
		const axa = $('//img[@alt="Axa"]');
		const barcelo = $('//img[@alt="Barceló"]');
		const belivee = $('//img[@alt="Be Live"]');
		const birchman = $('//img[@alt="Birchman"]');
		const bnp = $('//img[@alt="BNP Parisba Cardif"]');
		const castinfo = $('//img[@alt="Castinfo"]');
		const cinesa = $('//img[@alt="Cinesa"]');
		const dataspartan = $('//img[@alt="DataSpartan"]');
		const evelop = $('//img[@alt="Evelop"]');
		const gigigo = $('//img[@alt="Gigio"]');
		const glovalia = $('//img[@alt="Globalia"]');
		const halcon = $('//img[@alt="Halcón Viajes"]');
		const hesperia = $('//img[@alt="Hesperia"]');
		const hotelbeds = $('//img[@alt="Hotelbeds"]');
		const kvalia = $('//img[@alt="Kvalita"]');
		const melia = $('//img[@alt="Meliã"]');
		const optiva = $('//img[@alt="Optiva"]');
		const rb = $('//img[@alt="RB"]');
		const riu = $('//img[@alt="Riu"]');
		const robinson = $('//img[@alt="Robinson"]');
		const sixt = $('//img[@alt="Sixt"]');
		const ust = $('//img[@alt="UST Global"]');

        // cookies.click();
        // browser.pause(5000);
        we.click();
        browser.pause(3000);

        console.log("=================Titulo===========================");
        console.log(tituloWe.getText());
        console.log("=================Texto===========================");
        console.log(textoWe.getText());
        

        you.click();
        browser.pause(3000);

        expect(texto1).toHaveTextContaining(`Discover your Roadmap. Unlock the best technological solutions to your needs.`);
        // expect(texto1).toHaveTextContaining(`sdrfgklirghoigh`); error
        expect(texto2).toHaveTextContaining(`Build experiences. Adapt your company to your clients through technology.`);
        expect(texto3).toHaveTextContaining(`Be Agile. Incremental methodologies to save you time and earn you money.`);
        expect(texto4).toHaveTextContaining(`Develop Ecosystems. Seamless, secure, scalable, cross-platform and omni-channel solutions.`);
        expect(texto5).toHaveTextContaining(`Evolve. Automatic learning to improve your competitiveness.`);

        then.click();
        browser.pause(3000);

        expect(accenture).toBeExisting(); 
        expect(airEuropa).toBeExisting(); 
        expect(avoris).toBeExisting(); 
        expect(axa).toBeExisting(); 
        expect(barcelo).toBeExisting(); 
        expect(belivee).toBeExisting(); 
        expect(birchman).toBeExisting(); 
        expect(bnp).toBeExisting(); 
        expect(castinfo).toBeExisting(); 
        expect(cinesa).toBeExisting(); 
        expect(dataspartan).toBeExisting(); 
        expect(evelop).toBeExisting(); 
        expect(gigigo).toBeExisting(); 
        expect(glovalia).toBeExisting(); 
        expect(halcon).toBeExisting(); 
        expect(hesperia).toBeExisting(); 
        expect(hotelbeds).toBeExisting(); 
        expect(kvalia).toBeExisting(); 
        expect(melia).toBeExisting(); 
        expect(optiva).toBeExisting(); 
        expect(rb).toBeExisting(); 
        expect(riu).toBeExisting(); 
        expect(robinson).toBeExisting(); 
        expect(sixt).toBeExisting(); 
        expect(ust).toBeExisting(); 
        
    });
});


