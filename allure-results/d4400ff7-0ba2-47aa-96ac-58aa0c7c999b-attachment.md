# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Registration\registeruser.spec.js >> Verify valid User
- Location: tests\Registration\registeruser.spec.js:197:6

# Error details

```
ReferenceError: data is not defined
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - link:
        - /url: admin.htm;jsessionid=1D6DCA6B1461EBF3C5B45BF68FD49A74
        - img [ref=e4] [cursor=pointer]
      - link "ParaBank":
        - /url: index.htm;jsessionid=1D6DCA6B1461EBF3C5B45BF68FD49A74
        - img "ParaBank" [ref=e5] [cursor=pointer]
      - paragraph [ref=e6]: Experience the difference
    - generic [ref=e7]:
      - list [ref=e8]:
        - listitem [ref=e9]: Solutions
        - listitem [ref=e10]:
          - link "About Us" [ref=e11] [cursor=pointer]:
            - /url: about.htm;jsessionid=1D6DCA6B1461EBF3C5B45BF68FD49A74
        - listitem [ref=e12]:
          - link "Services" [ref=e13] [cursor=pointer]:
            - /url: services.htm;jsessionid=1D6DCA6B1461EBF3C5B45BF68FD49A74
        - listitem [ref=e14]:
          - link "Products" [ref=e15] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/products.jsp
        - listitem [ref=e16]:
          - link "Locations" [ref=e17] [cursor=pointer]:
            - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - listitem [ref=e18]:
          - link "Admin Page" [ref=e19] [cursor=pointer]:
            - /url: admin.htm;jsessionid=1D6DCA6B1461EBF3C5B45BF68FD49A74
      - list [ref=e20]:
        - listitem [ref=e21]:
          - link "home" [ref=e22] [cursor=pointer]:
            - /url: index.htm;jsessionid=1D6DCA6B1461EBF3C5B45BF68FD49A74
        - listitem [ref=e23]:
          - link "about" [ref=e24] [cursor=pointer]:
            - /url: about.htm;jsessionid=1D6DCA6B1461EBF3C5B45BF68FD49A74
        - listitem [ref=e25]:
          - link "contact" [ref=e26] [cursor=pointer]:
            - /url: contact.htm;jsessionid=1D6DCA6B1461EBF3C5B45BF68FD49A74
    - generic [ref=e27]:
      - generic [ref=e28]:
        - heading "Customer Login" [level=2] [ref=e29]
        - generic [ref=e30]:
          - generic [ref=e31]:
            - paragraph [ref=e32]: Username
            - textbox [active] [ref=e34]
            - paragraph [ref=e35]: Password
            - textbox [ref=e37]
            - button "Log In" [ref=e39] [cursor=pointer]
          - paragraph [ref=e40]:
            - link "Forgot login info?" [ref=e41] [cursor=pointer]:
              - /url: lookup.htm;jsessionid=1D6DCA6B1461EBF3C5B45BF68FD49A74
          - paragraph [ref=e42]:
            - link "Register" [ref=e43] [cursor=pointer]:
              - /url: register.htm;jsessionid=1D6DCA6B1461EBF3C5B45BF68FD49A74
      - generic [ref=e44]:
        - heading "Signing up is easy!" [level=1] [ref=e45]
        - paragraph [ref=e46]: If you have an account with us you can sign-up for free instant online access. You will have to provide some personal information.
        - table [ref=e48]:
          - rowgroup [ref=e49]:
            - row "First Name:" [ref=e50]:
              - cell "First Name:" [ref=e51]
              - cell [ref=e52]:
                - textbox [ref=e53]
              - cell [ref=e54]
            - row "Last Name:" [ref=e55]:
              - cell "Last Name:" [ref=e56]
              - cell [ref=e57]:
                - textbox [ref=e58]
              - cell [ref=e59]
            - row "Address:" [ref=e60]:
              - cell "Address:" [ref=e61]
              - cell [ref=e62]:
                - textbox [ref=e63]
              - cell [ref=e64]
            - row "City:" [ref=e65]:
              - cell "City:" [ref=e66]
              - cell [ref=e67]:
                - textbox [ref=e68]
              - cell [ref=e69]
            - row "State:" [ref=e70]:
              - cell "State:" [ref=e71]
              - cell [ref=e72]:
                - textbox [ref=e73]
              - cell [ref=e74]
            - row "Zip Code:" [ref=e75]:
              - cell "Zip Code:" [ref=e76]
              - cell [ref=e77]:
                - textbox [ref=e78]
              - cell [ref=e79]
            - 'row "Phone #:" [ref=e80]':
              - 'cell "Phone #:" [ref=e81]'
              - cell [ref=e82]:
                - textbox [ref=e83]
              - cell [ref=e84]
            - row "SSN:" [ref=e85]:
              - cell "SSN:" [ref=e86]
              - cell [ref=e87]:
                - textbox [ref=e88]
              - cell [ref=e89]
            - row [ref=e90]:
              - cell [ref=e91]
            - row "Username:" [ref=e92]:
              - cell "Username:" [ref=e93]
              - cell [ref=e94]:
                - textbox [ref=e95]
              - cell [ref=e96]
            - row "Password:" [ref=e97]:
              - cell "Password:" [ref=e98]
              - cell [ref=e99]:
                - textbox [ref=e100]
              - cell [ref=e101]
            - row "Confirm:" [ref=e102]:
              - cell "Confirm:" [ref=e103]
              - cell [ref=e104]:
                - textbox [ref=e105]
              - cell [ref=e106]
            - row "Register" [ref=e107]:
              - cell [ref=e108]
              - cell "Register" [ref=e109]:
                - button "Register" [ref=e110] [cursor=pointer]
  - generic [ref=e112]:
    - list [ref=e113]:
      - listitem [ref=e114]:
        - link "Home" [ref=e115] [cursor=pointer]:
          - /url: index.htm;jsessionid=1D6DCA6B1461EBF3C5B45BF68FD49A74
        - text: "|"
      - listitem [ref=e116]:
        - link "About Us" [ref=e117] [cursor=pointer]:
          - /url: about.htm;jsessionid=1D6DCA6B1461EBF3C5B45BF68FD49A74
        - text: "|"
      - listitem [ref=e118]:
        - link "Services" [ref=e119] [cursor=pointer]:
          - /url: services.htm;jsessionid=1D6DCA6B1461EBF3C5B45BF68FD49A74
        - text: "|"
      - listitem [ref=e120]:
        - link "Products" [ref=e121] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/products.jsp
        - text: "|"
      - listitem [ref=e122]:
        - link "Locations" [ref=e123] [cursor=pointer]:
          - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
        - text: "|"
      - listitem [ref=e124]:
        - link "Forum" [ref=e125] [cursor=pointer]:
          - /url: http://forums.parasoft.com/
        - text: "|"
      - listitem [ref=e126]:
        - link "Site Map" [ref=e127] [cursor=pointer]:
          - /url: sitemap.htm;jsessionid=1D6DCA6B1461EBF3C5B45BF68FD49A74
        - text: "|"
      - listitem [ref=e128]:
        - link "Contact Us" [ref=e129] [cursor=pointer]:
          - /url: contact.htm;jsessionid=1D6DCA6B1461EBF3C5B45BF68FD49A74
    - paragraph [ref=e130]: © Parasoft. All rights reserved.
    - list [ref=e131]:
      - listitem [ref=e132]: "Visit us at:"
      - listitem [ref=e133]:
        - link "www.parasoft.com" [ref=e134] [cursor=pointer]:
          - /url: http://www.parasoft.com/
```

# Test source

```ts
  121 |     phoneNumber:'',
  122 |     ssn:'SDSS',
  123 |     username:'',
  124 |     password:'',
  125 |     repeatedPassword:'',
  126 | },
  127 | {
  128 | scenario:'only username Entered',
  129 | firstName: '',
  130 |     lastName: '',
  131 |     address: '',
  132 |     city: '',
  133 |     state:'',
  134 |     zipCode:'',
  135 |     phoneNumber:'',
  136 |     ssn:'',
  137 |     username:'eeee',
  138 |     password:'',
  139 |     repeatedPassword:'',
  140 | },
  141 | {
  142 | scenario:'only password Entered',
  143 | firstName: '',
  144 |     lastName: '',
  145 |     address: '',
  146 |     city: '',
  147 |     state:'',
  148 |     zipCode:'',
  149 |     phoneNumber:'',
  150 |     ssn:'',
  151 |     username:'',
  152 |     password:'yyyy',
  153 |     repeatedPassword:'',
  154 | },
  155 | {
  156 | scenario:'only repeatedPassword Entered',
  157 | firstName: '',
  158 |     lastName: '',
  159 |     address: '',
  160 |     city: '',
  161 |     state:'',
  162 |     zipCode:'',
  163 |     phoneNumber:'',
  164 |     ssn:'',
  165 |     username:'',
  166 |     password:'',
  167 |     repeatedPassword:'9999'
  168 | }
  169 | 
  170 | ];
  171 |   for (const data of testData) {
  172 | 
  173 |     await registrationpage.invokeApp();
  174 |     //await page.pause();
  175 | 
  176 |     await registrationpage.performRegistration(
  177 |       data.firstName,
  178 |       data.lastName,
  179 |       data.address,
  180 |       data.city,
  181 |       data.state,
  182 |       data.zipCode,
  183 |       data.phoneNumber,
  184 |       data.ssn,
  185 |       data.username,
  186 |       data.password,
  187 |       data.repeatedPassword
  188 |     );
  189 | 
  190 |     await registrationpage.clickRegisterButton();
  191 | 
  192 |     await registrationpage.verifyRequiredFieldErrors(data);
  193 |   }
  194 | });
  195 | 
  196 | 
  197 | test.only ('Verify valid User', async ({ page }) => {
  198 | 
  199 | const registrationpage = new RegistrationPage(page);
  200 | const testData = [
  201 |   {
  202 |     firstName: 'USer01',
  203 |     lastName: 'USer01',
  204 |     address: 'USer01',
  205 |     city: 'USer01',
  206 |     state:'USer01',
  207 |     zipCode:'USer01',
  208 |     phoneNumber:'USer01',
  209 |     ssn:'USer01',
  210 |     username:'USer01',
  211 |     password:'USer0011',
  212 |     repeatedPassword:'USer001',
  213 |   }
  214 | ]
  215 | 
  216 | 
  217 |     await registrationpage.invokeApp();
  218 |     //await page.pause();
  219 | 
  220 |     await registrationpage.performRegistration(
> 221 |       data.firstName,
      |       ^ ReferenceError: data is not defined
  222 |       data.lastName,
  223 |       data.address,
  224 |       data.city,
  225 |       data.state,
  226 |       data.zipCode,
  227 |       data.phoneNumber,
  228 |       data.ssn,
  229 |       data.username,
  230 |       data.password,
  231 |       data.repeatedPassword
  232 |     );
  233 | 
  234 |     await registrationpage.clickRegisterButton();
  235 | 
  236 |     await registrationpage.verifyRegistrationPage(); 
  237 |   }
  238 | 
  239 | );
```