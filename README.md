# QA Automation Project - E2E & API Testing - Franklin Velasquez

This repository contains a comprehensive automation solution that includes End-to-End (E2E) testing for **SauceDemo** and **API** testing for **PetStore**, developed with a focus on robustness and maintainability.

## Project Description
The goal is to validate the integrity of critical business processes and the stability of Application Programming Interfaces (APIs).

### Automated Features:
* **E2E - SauceDemo:** Complete flow from authentication to order confirmation using `data-test` selectors.
* **API - PetStore:** Validation of REST services (POST, GET, PUT) including record creation and filtering by status (available/sold).
* **Cart Management:** Product selection and real-time verification.
* **Result Verification:** Confirmation of HTTP status codes and success messages in the UI.

## Tech Stack
* **Framework:** Cypress
* **Language:** JavaScript (ES6+)
* **Version Control:** Git / GitHub
* **Architecture:** Unified E2E and API test suite.

## Test Execution
To replicate the testing environment locally, follow these instructions:

1. **Cloning:**
   `git clone https://github.com/soyvelz/Prueba_QA_Cypress_Franklin_Velasquez.git`

2. **Installing Dependencies:**
   `npm install`

3. **Execution:**
   * **Interactive Mode:** `npx cypress open`
   * **Headless Mode:** `npx cypress run`

---
**Developed by:** Franklin Velasquez  
**Role:** Engineer / QA Automation & Business Intelligence