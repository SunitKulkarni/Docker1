# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login\login.spec.js >> The username and password could not be verified
- Location: tests\Login\login.spec.js:6:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('An internal error has occurred and has been logged.')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('An internal error has occurred and has been logged.')

```

```yaml
- link:
  - /url: admin.htm
  - img
- link "ParaBank":
  - /url: index.htm
  - img "ParaBank"
- paragraph: Experience the difference
- list:
  - listitem: Solutions
  - listitem:
    - link "About Us":
      - /url: about.htm
  - listitem:
    - link "Services":
      - /url: services.htm
  - listitem:
    - link "Products":
      - /url: http://www.parasoft.com/jsp/products.jsp
  - listitem:
    - link "Locations":
      - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
  - listitem:
    - link "Admin Page":
      - /url: admin.htm
- list:
  - listitem:
    - link "home":
      - /url: index.htm
  - listitem:
    - link "about":
      - /url: about.htm
  - listitem:
    - link "contact":
      - /url: contact.htm
- heading "Customer Login" [level=2]
- paragraph: Username
- textbox
- paragraph: Password
- textbox
- button "Log In"
- paragraph:
  - link "Forgot login info?":
    - /url: lookup.htm
- paragraph:
  - link "Register":
    - /url: register.htm
- heading "Error!" [level=1]
- paragraph: The username and password could not be verified.
- list:
  - listitem:
    - link "Home":
      - /url: index.htm
    - text: "|"
  - listitem:
    - link "About Us":
      - /url: about.htm
    - text: "|"
  - listitem:
    - link "Services":
      - /url: services.htm
    - text: "|"
  - listitem:
    - link "Products":
      - /url: http://www.parasoft.com/jsp/products.jsp
    - text: "|"
  - listitem:
    - link "Locations":
      - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
    - text: "|"
  - listitem:
    - link "Forum":
      - /url: http://forums.parasoft.com/
    - text: "|"
  - listitem:
    - link "Site Map":
      - /url: sitemap.htm
    - text: "|"
  - listitem:
    - link "Contact Us":
      - /url: contact.htm
- paragraph: © Parasoft. All rights reserved.
- list:
  - listitem: "Visit us at:"
  - listitem:
    - link "www.parasoft.com":
      - /url: http://www.parasoft.com/
```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
  2  | 
  3  | /*
  4  | AAA - How tests are organized
  5  | Arrange -> Create page objects + test data
  6  | Act     -> Call page methods
  7  | Assert  -> Verify result
  8  | */
  9  | 
  10 | export class HomePage {
  11 | 
  12 |     constructor(page) {
  13 |         this.page = page;
  14 |     }
  15 | 
  16 |     async invokeApp() {
  17 |         await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
  18 |     }
  19 | 
  20 |     async performLogin(username, password) {
  21 |         await this.page.locator('input[name="username"]').fill(username);
  22 |         await this.page.locator('input[name="password"]').fill(password);
  23 |         await this.page.getByRole('button', { name: 'Log In' }).click();
  24 |     }
  25 | 
  26 |     async clickRegister() {
  27 |         await this.page.locator('//a[.="Register"]').click();
  28 |     }
  29 | 
  30 |     async clickRegisterLink() {
  31 |         await this.page.getByRole('link', { name: 'Register' }).click();
  32 |     }
  33 | 
  34 |     async clickForgotPassword() {
  35 |         await this.page.locator('//a[.="Forgot login info?"]').click();
  36 |     }
  37 | 
  38 |     async clickAbout() {
  39 |         await this.page.getByRole('link', { name: 'about', exact: true }).click();
  40 |     }
  41 | 
  42 |     async clickContact() {
  43 |         await this.page.getByRole('link', { name: 'contact', exact: true }).click();
  44 |     }
  45 | 
  46 |     async clickHome() {
  47 |         await this.page.locator('body').click();
  48 |     }
  49 |     
  50 | //getByRole('link', { name: 'Forgot login info?' })
  51 |     async verifyErrormsg() {
> 52 |         await expect(this.page.getByText('An internal error has occurred and has been logged.')).toBeVisible();
     |                                                                                                  ^ Error: expect(locator).toBeVisible() failed
  53 |     }
  54 | 
  55 |     async verifyWarning() {
  56 |         await expect(this.page.locator("//p[@class='error']")).toBeVisible();
  57 |     }
  58 | 
  59 |     async verifyAccountPage() {
  60 |         await expect(this.page.getByRole('heading', { name: 'Accounts Overview' })).toBeVisible();
  61 |     }
  62 | 
  63 | }
```