[![Travis](https://img.shields.io/travis/flut1/knockout-validator.svg?maxAge=2592000)](https://travis-ci.org/flut1/knockout-validator)
[![Code Climate](https://img.shields.io/codeclimate/github/flut1/knockout-validator.svg?maxAge=2592000)](https://codeclimate.com/github/flut1/knockout-validator)
[![Coveralls](https://img.shields.io/coveralls/flut1/knockout-validator.svg?maxAge=2592000)](https://coveralls.io/github/flut1/knockout-validator?branch=master)
[![npm](https://img.shields.io/npm/v/knockout-validator.svg?maxAge=2592000)](https://www.npmjs.com/package/knockout-validator)
[![npm](https://img.shields.io/npm/dm/knockout-validator.svg?maxAge=2592000)](https://www.npmjs.com/package/knockout-validator)

# fontpainter

Add a description here...

## Font support
FontPainter currently has the following limitations for font rendering:
 - **Only support horizontal type**

## Installation

### npm

```sh
npm i -S fontpainter
```

### other

We also have browser, amd, commonjs, umd, systemjs and es6 versions of
this module available attached to the [Github Releases](https://github.com/flut1/fontpainter/releases).

### manual

Check the **build** section below to see your you can build for all the
targets yourself.

## Usage

```ts
import Fontpainter from 'fontpainter';
// import Fontpainter from 'fontpainter/lib/classname';

// do something with Fontpainter
```


## Documentation

View the [generated documentation](https://rawgit.com/flut1/fontpainter/master/doc/typedoc/index.html).


## Building

In order to build fontpainter, ensure that you have [Git](http://git-scm.com/downloads)
and [Node.js](http://nodejs.org/) installed.

Clone a copy of the repo:
```sh
git clone https://github.com/flut1/fontpainter.git
```

Change to the fontpainter directory:
```sh
cd fontpainter
```

Install typings cli utility:
```sh
npm install typings --global
```

Install dev dependencies:
```sh
npm install
```

Use one of the following main scripts:
```sh
npm run build           # build this project
npm run dev             # run dev-watch mode, seving example/index.html in the browser
npm run generate        # generate all artifacts (compiles ts, webpack, docs and coverage)
npm run typings         # install .d.ts dependencies (done on install)
npm run test-unit       # run the unit tests
npm run validate        # runs validation scripts, including test, lint and coverage check
npm run lint            # run tslint on this project
npm run doc             # generate typedoc documentation
npm run typescript-npm  # just compile the typescript output used in the npm module
```

When installing this module, it adds a pre-push hook, that runs the `validate`
script before committing, so you can be sure that everything checks out.

If you want to create the distribution files yourself, you can run the
`build-dist` script, and the following files will get generated in the
`dist` folder:

- **/dist/fontpainter.js**: bundled with webpack, can be loaded from
	a script tag, available as `window.Fontpainter`
- **/dist/fontpainter.min.js**: same as above, but minified
- **/dist/fontpainter-amd.js**: bundled with webpack, can be used
	with e.g. requirejs
- **/dist/fontpainter-commonjs.js**: bundled with webpack, can be
	used in systems that support commonjs, but you should just use npm
- **/dist/fontpainter-umd.js**: bundled with webpack, works in the
	browser, with requirejs, and in a commonjs system
- **/dist/fontpainter-umd.min.js**: same as above, but minified
- **/dist/fontpainter-system.js**: bundled with typescript, can be
	used in systems	that support systemjs
- **/dist/fontpainter-es6.zip**: transpiled with typescript, only
	types are removed from the source files

## Contribute

View [CONTRIBUTING.md](./CONTRIBUTING.md)


## Changelog

View [CHANGELOG.md](./CHANGELOG.md)


## Authors

View [AUTHORS.md](./AUTHORS.md)


## LICENSE

[MIT](./LICENSE) © Floris Bernard


