import { test, expect } from '@playwright/test';

// Can Consider as  sample test case model 
test('Valid Login', async ({ page }) => {

    // Arrange
    await page.goto('https://parabank.parasoft.com');
    const username = 'john';
    const password = 'demo';

    // Act
    await page.locator('[name="username"]').fill(username);
    await page.locator('[name="password"]').fill(password);
    await page.locator('[value="Log In"]').click();

    // Assert
    await expect(page.getByRole('heading', { name: 'Accounts Overview' })).toBeVisible();

});
