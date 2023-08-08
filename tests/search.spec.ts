import {test,expect} from '@playwright/test';  

test('Google', async ({ page }) => {
  await page.goto('https://google.com/');
  const url = await page.url();
  expect(url).toContain('google');

});
test('search', async ({ page }) => {
  
  const searchQuery = 'playwrigt';
  await page.goto('https://google.com/');

  const searchInput = await page.$('input[name="q"]');
  if (searchInput) {
    await searchInput.fill('Playwright');
    await searchInput.press('Enter');
  } else {
    console.log('Search input not found.');
  }



});
