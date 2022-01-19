const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    try {
        const page = await browser.newPage();
        await page.goto('https://pptr.dev/', { waitUntil: 'networkidle0' });
        await page.$eval('toolbar-component', (node) => {
            // eslint-disable-next-line no-param-reassign
            node.style.background = '#1F54C0';
        });
        await page.screenshot({
            path: 'beautify-bar.png',
            type: 'png',
        });
    } catch (error) {
        console.error(error);
    }
    await browser.close();
})();
