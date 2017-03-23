<div align="center">
<img src="https://github.com/Stratio/egeo-web/blob/master/src/assets/images/egeo_logo_c.png">
</div>

# Egeo Web

Egeo Web is the project of the official documentation website of the [Egeo project](https:/github.com/Stratio/egeo).

But this is only one part of the project. You can discover more in:

* [egeo](https://github.com/Stratio/egeo): the library of components used to build Stratio's applications.
* [egeo-theme](https://github.com/Stratio/egeo-theme): The egeo components are thematizable. This is the official theme used in the Stratio's applications.
* [egeo-starter](https://github.com/Stratio/egeo-starter): A Boilerplate project prepared for work with Egeo 1.x, Angular 2.x, TypeScript, Webpack, Karma, Jasmine and Sass.
* [egeo-web](https://github.com/Stratio/egeo-web): The official website of Egeo where documentation will be available soon.

## Table of contents

* [About this repo](#about-this-repo)
* [Architecture Overview](#architecture-overview)
* [File Structure](#file-structure)
* [Getting Started](#getting-started)
   * [Dependencies](#dependencies)
   * [Work with the code](#work-with-the-code)
   * [How to test](#how-to-test)
   * [How to lint](#how-to-lint)
* [Contributing](#contributing)
* [License](#license)

## About this Repo

This repo includes the documentation website that will be soon available.

* Documentation website (soon)

## File Structure

```
egeo-ui-base/
 ├──config/                        * our configuration
 |   └──webpack/                   * webpack configurations
 |       ├──webpack.common.js      * common webpack configuration
 |       ├──webpack.dev.js         * webpack configuration for development environment
 |       ├──webpack.prod.js        * webpack configuration for production environment
 |       └──webpack.test.js        * webpack configuration for testing
 |   ├──empty.js                   * special file needed for webpack
 |   ├──helpers.js                 * utilities file for webpack
 |   ├──karma.conf.js              * karma config for our unit tests
 |   ├──resource-override.js       * special file needed for webpack
 │   └──spec-bundle.js             * index generator of spec files for testing
 │
 ├──src/                           * code of the website
 |   ├──app/                       * the angular 2 app of the website
 |   ├──assets/                    * images, fonts and other static resources
 |   ├──styles/                    * global CSS
 │   ├──custom-typings.d.ts        * typing definitions for typescript
 |   ├──index.html                 * website entry point
 |   ├──main.aot.ts                * bootstrap using AoT
 |   ├──main.ts                    * bootloader of the webapp
 |   └──polyfill.ts                * polyfills used by the webapp
 │
 ├──.htmlhintrc                    * our htmlhint linting configuration
 ├──.sass-lint.yml                 * our sass linting configuration
 ├──.travis.yml                    * configuration of our travis process
 ├──tslint.json                    * typescript lint config
 ├──karma.conf.js                  * index file for the karma configuration
 ├──tsconfig.webpack.json          * settings of typescript to build the library using webpack
 ├──tsconfig.json                  * default settings of typescript
 ├──package.json                   * what npm uses to manage it's dependencies
 └──yarn.lock                      * need in order to get consistent installs across machines using yarn

```

## Getting Started

### Dependencies

What you need to run this app:
* [`node`](https://nodejs.org/es/) and `npm`
* Ensure you're running the latest versions Node `v6.x.x` and NPM `4.x.x`+

### Work with the code

You can use Npm or Yarn to work with egeo-web. If you want to use Yarn, it has to be installed first as a global dependency in your local machine.

```
sudo npm i -g yarn
```

Once Yarn is installed or Npm is ready, you can install Egeo using:

```
yarn
```

or

```
npm install
```

### How to Test

There is a command to compile the library and test if some compilation error is launched.

```
yarn test
```

or

```
npm run test
```

### How to Lint

There is a command to launch the linting process.

```
yarn lint
```

or

```
npm run lint
```

## Contributing

There are many ways to contribute to the egeo-web project. [Check our contribution section in the Wiki to learn more](https://github.com/Stratio/egeo-web/wiki/How-to-contribute).

## License

Egeo-web is distributed under the Apache 2 license. You may obtain a copy of the license here at:

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)
