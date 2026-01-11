# Anagram Checker – Cucumber + Playwright (TypeScript)

## Overview
This project demonstrates a clean BDD-style test automation setup using
Cucumber with Playwright and TypeScript.

The assignment focuses on validating an anagram-checking algorithm.
No browser automation is used, as the problem is purely algorithmic.

---

## Tech Stack
- TypeScript
- Cucumber (BDD)
- Playwright (assertions & tooling)
- Node.js

---

## Project Structure


---

## Run Tests

Install dependencies:
```bash
npm install
```
 - Run All Tests
 ```bash
npm test
```
 - Run Smoke Tests
 ```bash
npm run test:smoke
```

 - Run Tests in Parallel
 ```bash
npm run test:parallel
```

---

## Reporting
After execution, an HTML report is generated at:

```bash
reports/cucumber-report.html
```

---

## Design Decisions

- BDD used for clarity and business readability
- No UI automation to avoid unnecessary complexity
- Clear separation between logic and test glue
- Parallel-safe execution

---
## Task Explanation

### Assignment 1: Anagram Checker

A reusable Typescript utility that determines whether two strings are anagrams.

- Ignores case
- Ignores spaces

### Assignment 2: BDD Automation

- Implemented using Cucumber feature files
- Scenario Outline used for multiple test cases
- Clean separation between business logic and test glue

---

## Notes
This framework can easily be extended to include:
 - UI tests with Playwright
 - API tests
 - UI Mock tests