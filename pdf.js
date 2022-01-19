const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    try {
        const page = await browser.newPage();
        await page.goto('https://pptr.dev/', { waitUntil: 'networkidle0' });
        await page.type("input[type='search']", 'pdf');
        await page.waitForSelector("search-item[class='selected'");
        await page.keyboard.press('Enter');
        await page.pdf({
            path: 'pdf-search.pdf',
            displayHeaderFooter: true,
            printBackground: true,
            landscape: true,
            format: 'a4',
        });
    } catch (error) {
        console.error(error);
    }
    await browser.close();
})();
