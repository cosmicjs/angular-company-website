# CompanyPresentation

This repo showcases the use of Angular with [CosmicJS](cosmicjs.com), a headless CMS service, to create a simple yet flexible website for a company, freelance, etc. Bulma has been chosen as the CSS framework due to its simplicity.

## About the project

### Structure

* `App` module will fetch the main presets defined in the CMS, this will define the main page, title of the site, navigation, etc.

* `Core` module contains the service to communicate with the CMS and components used across all the site. It also contains guards and interceptors that will ensure the behaviour of the site is correct.

* `Pages` module is a lazy loaded module that contain the components to show the content pulled from the CMS.

### Features

`cosmic` service has cache implemented so the API consumption is reduced to a minimum.

`analytics` service will automatically send pageviews to Google Analytics. UA has to be manually set on `index.html`

## Thanks

This website uses images by [Field5](https://www.iconfinder.com/Field5) and [Neil Hainsworth](https://www.iconfinder.com/neilorangepeel)

------

### Angular CLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5.

#### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

#### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

#### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

#### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
