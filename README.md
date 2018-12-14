# Angular Company Website

![Angular Company Website](https://cosmic-s3.imgix.net/6bdb6590-ffc9-11e8-9a9c-8b349df2e2bf-smartmockups_jpoc1svl.jpg?w=1200)
### [View Demo](https://cosmicjs.com/apps/angular-company-website)

This repository showcases the use of Angular with [Cosmic JS](cosmicjs.com), a headless CMS service, to create a simple yet flexible website for a company, freelance, etc. Bulma has been chosen as the CSS framework due to its simplicity.

## How to install
1. Install demo content via the Cosmic JS website:
https://cosmicjs.com/apps/angular-company-website

2. Install the code locally:
```
git clone https://github.com/cosmicjs/angular-company-website
```

3. Once you've got your Cosmic JS Bucket installed, fill the data on the `environment` files as follows:
```
{
  production: true|false,
  read_key: 'COSMIC_READ_KEY',
  write_key: 'COSMIC_WRITE_KEY',
  bucket_slug: 'BUCKET_SLUG',
  URL: 'https://api.cosmicjs.com/v1/',
  presets: 'YOUR_PRESETS_OBJECT_SLUG'
}
```
The `cosmic interceptor` will make sure to send the read and write keys when communicating with the CMS.

You can also run the following command to quickstart the application:
```
COSMIC_BUCKET=your-bucket-slug COSMIC_READ_KEY=your-bucket-read-key npm start
```

## About the project

### Structure

* `App` module will fetch the main presets defined in the CMS, this will define the main page, title of the site, navigation, etc.

* `Core` module holds the service to communicate with the CMS and components used across all the site. It also contains other services, guards and interceptors that will ensure the behaviour of the site is correct.

* `Pages` module is a lazy loaded module that contain the components to show the content pulled from the CMS. It's essentially the body of the website.

* `Shared` module contains elements that can be reused on any other module. It holds a pipe to allow HTML content pulled from the CMS to bypass sanitization.

### Route management

The `Pages` module will sit at the root path: virtually, any URL could be a `page` requested to the CMS. If there is no `page` specified (e.g., when the user hits the root URL), then the `homepage guard` will get the default page from the `presets`. If the URL specified doesn't match any known `page` on the CMS, the `http-error interceptor` will intercept the 404 error and redirect accordingly.

### Features

`cosmic service` has cache implemented so the API consumption is reduced to a minimum.

`analytics service` will automatically send pageviews of your production instance to Google Analytics. The tracking ID has to be set on the presets.

## Thanks

This website uses images by [Field5](https://www.iconfinder.com/Field5) and [Neil Hainsworth](https://www.iconfinder.com/neilorangepeel)

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

------

## Angular CLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
