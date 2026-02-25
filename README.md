# Assesment CX Quality Assurance Engineer

## Overview

This project contains automated test scenarios developed for the CX QAE assessment using the demoqa.com website.  
The automation follows the Screenplay Pattern using Serenity/JS integrated with Playwright and TypeScript.

The goal of the project is to validate key UI functionalities across different sections of the DemoQA application.

## Tech Stack

- TypeScript
- Playwright
- Serenity/JS (Screenplay Pattern)
- Node.js

## Project Structure

src/
    ui/ - Page objects (PageElements)
    tasks/ - Reusable Screenplay tasks
tests/ - Test scenarios


The project follows the Screenplay Pattern:
- Actors perform Tasks
- Tasks interact with UI elements
- Assertions validate expected behavior

---

## How to Run the Tests

Install dependencies:
`npm install`

Run all tests:
`npx playwright test`

Run a specific test:
`npx playwright test tests/case4-alerts-and-windows.spec.ts --headed`

## Automated Scenarios

### Case 1 – Home Page Loads Successfully  
**Test file:** `case1-homepage.spec.ts`

---

### Case 2 – Elements: Text Box Form  
**Test file:** `case2-elements-textbox.spec.ts`

---

### Case 3 – Forms: Practice Form
**Test file:** `case3-forms-practice-form.spec.ts`

---

### Case 4 – Alerts, Frame & Windows  
**Test file:** `case4-alerts-and-windows.spec.ts`

---

### Case 5 – Section Widgets - Accordion
**Test file:** `case5-widgets-accordian.spec.ts`

---

### Case 7 – Book Store Search  
**Test file:** `case7-bookstore-search.spec.ts`

---

## Serenity Report

After executing the automated tests, a Serenity BDD HTML report can be generated with the following steps:

### 1️⃣ Run the tests

```bash
npx playwright test
target/site/serenity
npx serenity-bdd run --source target/site/serenity --destination target/site/serenity
target/site/serenity/index.html 
```

## Additional Notes

- XPath selectors were used in specific scenarios due to dynamic DOM behavior affecting CSS selector stability.
- Direct URL navigation was implemented in certain cases to ensure reliable test execution and avoid unstable sidebar interactions.

---
## Author

Dennys Valentina Mosquera  
QA Engineer