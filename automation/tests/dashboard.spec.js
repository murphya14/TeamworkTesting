const { test, expect } = require('@playwright/test');

test.use({ storageState: 'tests/state.json' });

test('dashboard', async ({ page }) => {
  await page.goto('');
  const title = await page.locator('.task-table-blank-icon');
  await expect(title).toContainText('Access your recent projects!');
});