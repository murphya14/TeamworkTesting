const config = require('../playwright.config');
const { chromium } = require('@playwright/test');
require('dotenv').config();

module.exports = async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(config.use.baseURL + '/demo/vuexy-vuejs-laravel-admin-template/demo-1/login');

  await page.fill('input[type="text"]', process.env.LOGIN_USERNAME);
  await page.fill('input[type="password"]', process.env.LOGIN_PASSWORD);
  await page.click('button:has-text("Sign in")');

  await page.context().storageState({ path: 'tests/state.json' });
  await browser.close();  
};