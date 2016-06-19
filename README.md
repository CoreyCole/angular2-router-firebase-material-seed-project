# Angular 2 Component Router, Firebase, Material2--Seed Project

A great Angular 2 example project that incorporates a Firebase backend, some Material Design components (which are in alpha), and Component Routing (with children)

## Project Overview
- The purpose of this project is to try out Angular2 with the [component router](https://angular.io/docs/ts/latest/guide/router.html), [Angular2-Material](https://github.com/angular/material2) and [AngularFire2](https://github.com/angular/angularfire2)
- This project was set up with the [angular-cli](https://github.com/angular/angular-cli)
- Firebase with AngularFire2 is set up. You must connect your instance in `main.ts`
  - A `firebase-data.service.ts` has been created to pass firebase data to your components
- Angular material is set up and the following component are already included
  - button
  - card
  - icon
  - list
  - toolbar
  - checkbox
  - grid-list
  - input
  - progress-bar
  - progress-circle
  - radio
  - sidenav
  - slide-toggle
  - tabs
- The Angular2 component router has been set up and the config is in `app.routes.ts`

## Initializing this repo
- Run `npm install -g angular-cli` to install the angular-cli (command-line-interface)
- Run `npm install` to install all dependencies to the node_modules folder
- connect your firebase by editing `defaultFirebase` in the bootstrap function in `src/main.ts`
- Run `npm start` to launch the webserver and compile the code to the `dist` folder

## Documentation Links
- [Angular Material 2](https://github.com/angular/material2)
- [Firebase](https://firebase.google.com/docs/reference/js/)
- [AngularFire2](https://github.com/angular/angularfire2/tree/master/docs)

# This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.6
## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/route/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
