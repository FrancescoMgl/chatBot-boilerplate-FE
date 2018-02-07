# ChatBot

## Description

This package is a simple ChatBot boilerplate frontend built with React and Redux.
dasasd
## Features

- [x] [React](https://facebook.github.io/react/)
- [x] [Redux](https://github.com/reactjs/redux)
- [x] [React-Redux](https://github.com/reactjs/react-redux)
- [x] [React-Router](https://github.com/ReactTraining/react-router)
- [x] [React-Router-Redux](https://github.com/reactjs/react-router-redux)
- [x] [Redux-Thunk](https://github.com/gaearon/redux-thunk)
- [x] [Webpack2](https://webpack.github.io)
- [x] [Babel](https://babeljs.io/)
- [x] [Lodash](https://github.com/lodash/lodash)
- [x] [Bourbon](https://github.com/thoughtbot/bourbon)
- [x] [Jest](https://github.com/facebook/jest)
- [x] [Enzyme](https://github.com/airbnb/enzyme)
- [x] [Eslint](https://github.com/eslint/eslint)

## Requirements
* node `^6.0.0`
* npm `^3.0.0`

### Install from source

First, clone the project:

```bash
$ git clone https://github.com/FrancescoMgl/chatBot-boilerplate-FE.git <my-project-name>
$ cd <my-project-name>
```

Then install dependencies and check to see it works.

```bash
npm install    # Install project dependencies
npm start      # Compile and launch
```

While developing, you will probably rely mostly on `npm start`; however, there are additional scripts at your disposal:

|`npm run <script>`|Description|
|------------------|-----------|
|`start`           |Serves your app at `localhost:3000`. HMR will be enabled in development.|
|`build`           |Compiles the application to disk for production (`~/dist` by default).|
|`build:dev`       |Compiles the application to disk (`~/dist` by default).|
|`test`            |Run test. add `-- --coverage` for coverage code|
|`clear`           |Remove compiled application (`~/dist` by default).|
|`clear:coverage`  |Remove coverage folder.|
|`lint:eslint`     |Lint js code.|
|`lint:stylelint`  |Lint style code.|

### Testing
To add a unit test, simply create a `.spec.js` file anywhere in `~/test`.

#### Developer Tools

**[Redux DevTools Chrome Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd).**

```bash
npm i --save-dev redux-devtools redux-devtools-log-monitor redux-devtools-dock-monitor
```

Then follow the [manual integration walkthrough](https://github.com/gaearon/redux-devtools/blob/master/docs/Walkthrough.md).

