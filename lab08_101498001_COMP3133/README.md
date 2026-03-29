# Lab 08 – Angular Data Binding & Directives (101498001)

Angular **19** app in `lab08-heroes/`. The handout references `app.module.ts`; this project uses **standalone** components—pipes and directives are imported in each component’s `imports` array (same idea as `NgModule` declarations).

## Exercise 1 – Structural directives & data binding (Tour of Heroes style)

- `src/app/hero.ts` – `Hero` interface  
- `src/app/mock-heroes.ts` – hero list (includes dashed names for the pipe)  
- `src/app/heroes/` – list with `*ngFor`, click selection, `[class.selected]`  
- `src/app/hero-detail/` – **nested child** with `@Input() hero`, `*ngIf`, `[(ngModel)]` (Exercise 3 / homework pattern)

## Exercise 2 – Custom pipe `removeSpaces`

- `src/app/remove-spaces.pipe.ts` – replaces `-` with a space  
- Used in `heroes.component.html` and `hero-detail.component.html` on hero names  

Generate equivalent (reference):

```bash
ng generate pipe remove-spaces --standalone
```

## Exercise 3 – Custom directive `input-format`

- `src/app/input-format.directive.ts` – selector `[input-format]`, `@HostListener('blur')`, uppercase via `ElementRef`  
- Demo input in `heroes.component.html`  

Generate equivalent:

```bash
ng generate directive input-format --standalone
```

## Run

```bash
cd lab08-heroes
npm install
ng serve
```

Open **http://localhost:4200** — select a hero, edit name (dashes show as spaces in the list), blur the bottom textbox to uppercase.

## Submission

- Screenshots in a Word document (not inside the zip).  
- Zip the lab folder without `node_modules`.  
- GitHub link.

If your instructor wants **only** the files you created, zip at least:  
`hero.ts`, `mock-heroes.ts`, `heroes/*`, `hero-detail/*`, `remove-spaces.pipe.ts`, `input-format.directive.ts`, and updated `app.component.*`.
