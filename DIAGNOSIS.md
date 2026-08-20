# CI Failure Diagnosis

## Failure 1 — Unit Test Assertion

- Step: Run tests
- Error:
  `Expected: 100`
  `Received: 90`
- Cause:
  The `calculateDiscount` function correctly applies a 10 percent discount to 100 and returns 90. The test incorrectly expected 100, so the assertion was wrong. The fix was to change the expected value from 100 to 90.

## Failure 2 — Unit Test Matcher

- Step: Run tests
- Error:
  `expect(received).toBe(expected) // Object.is equality`
- Cause:
  The `formatCurrency` test compares two objects using `toBe`. `toBe` checks reference identity, while the test needs to compare the values inside the objects. The correct matcher is `toEqual`.

## Failure 3 — Dependency and Workflow Configuration

- Step: Install dependencies / Run tests
- Error:
  The workflow used `npm install`, and the test job was configured without `needs: install` and without checking out the repository or installing dependencies.
- Cause:
  The dependency installation was not reproducible because the workflow used `npm install` instead of `npm ci`. In addition, GitHub Actions jobs run on separate fresh runners, so the test job could not use the dependencies from the install job. The test job also had no checkout step. The workflow was fixed by using `npm ci`, adding `needs: install`, checking out the repository, and installing dependencies in the test job.
