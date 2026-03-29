# Lab 06 – TypeScript (101498001_COMP3133)

## Setup

From this folder (or each exercise folder):

```bash
npm install
```

Install TypeScript globally (optional): `npm install -g typescript`  
Check version: `tsc --version`

## Exercises

### Exercise 1 – TypeScript First Start (`exercise-1`)

- `hello-world.ts` – uses `let`, arrow function, template literals for first/last name.
- Compile: `cd exercise-1 && tsc hello-world.ts`
- Run: `node exercise-1/hello-world.js`

### Exercise 2 – Types, Classes and Objects (`exercise-2`)

- `customer.ts` – `Customer` class with two string properties and `greeter()` method.
- Compile: `cd exercise-2 && tsc customer.ts`
- Run: `node exercise-2/customer.js`

### Exercise 3 – Access Modifiers and Constructors (`exercise-3`)

- `customer.ts` – `Customer` with `private` properties and constructor(firstName, lastName).
- Compile: `cd exercise-3 && tsc customer.ts`
- Run: `node exercise-3/customer.js`

### Exercise 4 – Modules (`exercise-4`)

- `customer.ts` – exported `Customer` class with `greeter()` and `GetAge()`.
- `main.ts` – imports `Customer`, creates instance, calls `greeter()` and `GetAge()`.
- Compile: `cd exercise-4 && tsc`
- Run: `node exercise-4/main.js`

## Submission

- Screenshots of output (e.g. in a Word document).
- Zip of the project folder (exclude `node_modules`).
- GitHub project link.
