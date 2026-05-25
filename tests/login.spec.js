require('dotenv').config();
const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');


test('Naukri login test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.openWebsite();

    await loginPage.clickLogin();

    await loginPage.enterCredentials(
        process.env.EMAIL,
        process.env.PASSWORD
    );

    await loginPage.clickLoginButton();

    await loginPage.clickViewProfileButton();

    await loginPage.clickHeadlineEditButton();

    //await page.waitForSelector(loginPage.resumeHeadline);
    //await page.click(loginPage.resumeHeadline);
    await page.click(loginPage.resumeHeadline);

    await page.keyboard.press('Control+A');

    await page.keyboard.press('Control+C');

    await page.keyboard.press('Backspace');

    await page.keyboard.press('Control+V');

    await loginPage.clickSaveHeadingButton();

});
