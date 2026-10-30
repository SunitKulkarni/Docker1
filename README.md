# Docker1

This project is a Playwright-based browser automation suite for testing a banking application flow, with page-object-based test structure and Allure reporting.

## Project Overview

This repository is designed to automate key user journeys such as:

- Login and registration flows
- Account services navigation
- Bill pay, transfer funds, and loan-related actions
- Reusable page objects for application pages

It includes:

- Playwright test configuration
- Page object classes for application modules
- Automated test cases under the `tests/` directory
- Allure report integration for richer test results

## Tech Stack

- JavaScript
- Playwright Test
- Allure Playwright reporter

## Repository Structure

```text
Docker1/
├── .github/
├── allure-report/
├── allure-results/
├── pages/
│   ├── AccountServices/
│   ├── Login/
│   └── Temp/
├── tests/
│   ├── AccountServices/
│   ├── Login/
│   ├── Registration/
│   ├── example.spec.js
│   ├── Sample.spec.js
│   ├── Temp.spec.js
│   ├── Temp1.spec.js
│   ├── accounttest.spec.js
│   ├── skt.spec.js
│   └── testsk.spec.js
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js
├── README.md
└── ...
```

## Prerequisites

Before running the tests, make sure you have the following installed:

- Node.js (LTS recommended)
- npm

## Installation

```bash
npm install
```

## Running Tests

Run the Playwright test suite:

```bash
npx playwright test
```

Run a specific file:

```bash
npx playwright test tests/example.spec.js
```

## Reporting

This project is configured to generate Playwright HTML and Allure reports.

To open the HTML report after execution:

```bash
npx playwright show-report
```

## Notes

- The project uses a page-object-model (POM) pattern to keep test logic organized and reusable.
- Browser configuration is defined in `playwright.config.js`.
- Test execution is set to run in a single worker for predictable behavior.

## Project Purpose

This repository serves as a UI automation project for validating application flows and ensuring key customer actions work correctly in the browser.

## License

This project is currently configured with the ISC license in `package.json`.
