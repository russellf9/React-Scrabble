# React Scrabble

## Project

This project was built using the [Create React App](https://github.com/facebook/create-react-app) CLI tools


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.


## Features to add

* [X] Add typescipt
* [X] Use Redux
* [X] Fix `redux-devtools`
* [X] Use Observables with RxJS
* [X] Use Free API
* [X] Add `styled-components`
* [ ] Add Grid (or other styling system)
* [ ] Organise file structure
* [ ] Add more tests
* [ ] Add Husky
* [ ] Use XML Parsing if another library cannot be found
* [ ] Use a better back-end

## Redo Dec 2020 / Jan 2021

I'm changing my workflow using VIM solely for the React application development.

This is the first project where I'll be using this workflow.

Looking at the old project working out the next steps:

* [X] Review design (I've tidied up for now)
* [ ] Resolve TS Config issue (I kind of replaced the `tslint.json` with an empty json file was this necessary?)
* [X] Use Yarn rather than NPM were possible
* [X] Run through the application so I have a good idea how it works.
* [X] Convert to FC where I can.
* [X] Convert to FC where I can where props are being used how do I do that?
    * [X] ScrabbleContent 
* [X] Update all node_modules and document the process
* [ ] Should I use React Hooks? 
* [ ] Work out the best way to do the styling.
* [ ] Are there ways to add my own React Snippets? (I'm using the CoC snippets)
* [ ] Document handy snippets
* [X] Spend extra time using VIM commands each time I do something. 
* [X] Resolve functions like (make pure?) `onClick={e => this.props.requestSearch(this.props.search)}`
* [ ] Is there a way of finding and resolving errors in style components definitions?
* [ ] Use other styling than styled-components.
* [ ] Interesting - can use the menu to get the path: eg  `/Users/factornine/localhosts/www.factornine.co.uk/development/React-Scrabble/src/services/index.ts`, but can I use it for a GOTO or something else?
* [ ] The requests are a bit rough so find out the simplest way to do it.
* [ ] Keep the tests up to date
* [ ] Add a complete test suite.
* [X] Issue with the input - there is a delay of some sort so the UX is bad. (It looses focus on each additional text input)
* [ ] Get all the React Chrome tools up and running so I can debug the app. 
* [ ] Can I make it so the theme can be quickly updated?
* [ ] Update node version? (I have `node -v v15.3.0`)
* [X] Update so styled-components do not give warning.
* [ ] Update typescript dependency see: `2.9.2   2.9.2  4.1.3  devDependencies https://www.typescriptlang.org/`
* [ ] Update Redux dependencies.
* [ ] What should I do with the `tsconfig` file? (I've kept it for now)

## Links

* [React and Redux with TypeScript](https://levelup.gitconnected.com/react-and-redux-with-typescript-da0c37537a79)
