const config = require('../playwright.config');
const { chromium } = require('@playwright/test');
require('dotenv').config();

module.exports = async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(config.use.baseURL + '/launchpad/acceptinvite/projects?code=1290jxoftbbh');
  await page.click('button:has-text("Log in")');

  await page.fill('input[type="text"]', "aislingmurpy14@qad.com");
  await page.fill('input[type="password"]', "teamwork123");
  await page.click('button:has-text("Log in")');

  await page.context().storageState({ path: 'tests/state.json' });
  await browser.close();  
};