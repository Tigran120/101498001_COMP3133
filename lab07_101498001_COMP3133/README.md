# Lab 07 – Angular Application (101498001)

## Exercise 1 – Express Generator + Body Parser

### Location
`exercise-1/myapp`

### Setup & run
```bash
cd exercise-1/myapp
npm install
npm start
```

Open **http://localhost:3000**

### Exercise 2 (same folder) – POST with body-parser
- `body-parser` is installed; `routes/users.js` parses JSON and URL-encoded bodies.
- **Postman:** `POST` **http://localhost:3000/users**  
  - Body: `x-www-form-urlencoded` or `raw` JSON (e.g. `{"name":"Test"}`).
- Response: **`POST received!`**
- Request body is logged in the **server console**.

---

## Exercise 3 – Angular CLI

### Location
`exercise-2/my-app`

### Run
```bash
cd exercise-2/my-app
npm install
ng serve
```

Open **http://localhost:4200** — the root component title is set in `src/app/app.component.ts`.

### Create project (reference)
```bash
npm install -g @angular/cli
ng new my-app --defaults
```

---

## Submission
- Screenshots (Word doc, not inside zip).
- Zip of `lab07_101498001_COMP3133` (without `node_modules`).
- GitHub link.
