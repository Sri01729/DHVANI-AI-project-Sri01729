// puppeteer-extra is a drop-in replacement for puppeteer,
// it augments the installed puppeteer with plugin functionality
const puppeteer = require('puppeteer-extra')

// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

// puppeteer usage as normal
puppeteer.launch({ headless: true }).then(async browser => {
    console.log('Running tests..')
    // Navigate to the login page
    await page.goto('https://accounts.google.com/v3/signin/identifier?access_type=offline&client_id=864619725951-na3uleaalbekeilaalb3ak9qdpuoddeo.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fclerk.suno.ai%2Fv1%2Foauth_callback&response_type=code&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20openid&state=ajtt3kp9fj18o9030zpyyaywhf3gwyhbxin14twp&service=lso&o2v=1&theme=glif&flowName=GeneralOAuthFlow&continue=https%3A%2F%2Faccounts.google.com%2Fsignin%2Foauth%2Fconsent%3Fauthuser%3Dunknown%26part%3DAJi8hAMSw0LWMaYSBfAS5TXpxLuq3WHgK5JOVkwe6zgxzfBQEVistD89nNQtzwSJ-OEM4vDEziscon9K248-8WEQ1WU7kg1F4gYxPaypTca_3MsdmZcmOeIeTr40mOKYK6EPDaklCWZci_DWyS24pksDASuUJNjSKTewawGoekPCL9FQ34U4eg2hlIMRpv4kuFtQ6Y9HOaqya3I9xpa4DR5J1UJJfysMDwyGq5DLr8OEvQ5nXDQdkq4LLrQPAulHvUmIb1XCB8ffWBCeBiEEO5OobEPyLPe-4m8ma38Cm7HmU6_h7WdbjVL_IFUONHtj1rYyG7F5rF169-QBrC44GlJRfUyMXAwAiZ_EG31FNteza_GsOmG7QbXTwI4uRiMix3tezPsRvTbn7GRb5oLsccacW0aAni8JQsBXOMPmgL76bB5xo_bCpCETPrcHGN5bJ_CfpiJFxutR64xJcwc5yRBS2pmrAMBRUQ%26flowName%3DGeneralOAuthFlow%26as%3DS-2146691300%253A1709455616554516%26client_id%3D864619725951-na3uleaalbekeilaalb3ak9qdpuoddeo.apps.googleusercontent.com%26theme%3Dglif%23');

    // Wait for the email input to load
    await page.waitForSelector('input[type="email"]', { visible: true });

    // Type in the email address
    await page.type('input[type="email"]', 'your-email@gmail.com');

    // Click the 'Next' button
    await page.click('#identifierNext');

    // Wait for the password field to appear
    await page.waitForSelector('input[type="password"]', { visible: true });

    // Type in the password
    await page.type('input[type="password"]', 'your-password');

    // Click the 'Next' button
    await page.click('#passwordNext');

    // Wait for navigation after login
    await page.waitForNavigation();


    await page.browser.close();
})