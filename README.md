# Playwright

Playwright is a framework for Web Testing and Automation. It allows testing Chromium, Firefox and WebKit with a single API. Playwright is built to enable cross-browser web automation that is ever-green, capable, reliable and fast.

## Instalation

Playwright has its own test runner for end-to-end tests, we call it Playwright Test.

    Using init command

The easiest way to get started with Playwright Test is to run the init command.

- Run from your project's root directory
  npm init playwright@latest
- Or create a new project
  npm init playwright@latest new-project

This will create a configuration file, optionally add examples, a GitHub Action workflow and a first test example.spec.ts. You can now jump directly to writing assertions section.

    Manually

Add dependency and install browsers.

npm i -D @playwright/test

- install supported browsers
  npx playwright install

### .env file

    IMPORTANT

In order to successfully fun the tests, you must create .env file (simple text file in the root folder of the project) which should contain:

BASE_URL=
USERNAME_STANDARD_USER=
PASSWORD_STANDARD_USER=
FIRST_NAME=
LAST_NAME=
ZIP_CODE=

This file is ignored because it contains sensitive data such as usernames and passwords. To run the tests just Enter valid data for above listed properties.

#### Runing the tests in headless mode

You can run your tests with the playwright test command. This will run your tests on all browsers as configured in the playwright.config file. Tests run in headless mode by default meaning no browser window will be opened while running the tests and results will be seen in the terminal.

    npx playwright test

##### Run tests in UI mode

Running your tests with UI Mode is highly recommend for a better developer experience where you can easily walk through each step of the test and visually see what was happening before, during and after each step. UI mode also comes with many other features such as the locator picker, watch mode and more.

    npx playwright test --ui
