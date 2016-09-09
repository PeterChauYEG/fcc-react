# FCC-React for Sept. 10, 2016 Coffee-and-Code Meetup
[DEMO](https://peterchauyeg.github.io/fcc-react/)

This is a learning project to introduce Single Page Apps and React at our meetup.

# Setup Your Development Environment

I use [Cloud9](https://c9.io) workspaces to manage my development environments.

# Discussion

1. Install [Node.js](https://nodejs.org/en/)
2. Install the [create-react-app](https://github.com/facebookincubator/create-react-app) npm package
	- package.json
	- index.html
	- index.js
	- App.js
3. Start example app
4. Run test watchdog via [Jest](https://facebook.github.io/jest/)
	- App.test.js
5. Create Coverage Report	
6. Create component
	- eslint
	- CSS
7. [React Dev Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
8. Style Component
9. Make component more reusable
10. Create container component
11. Style container component
12. Build production version
	- webpack
		- Transpiling from JSX, ES6+ to JS
		- Linting, Testing
		- Auto prefix CSS
		- Bundle JS, CSS, and images for production, with sourcemaps
		- Hash-based File Cacheing
13. Launch Local Production Version

# Notes

## Node.js
"Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world."

Node.js allows us to write Single Page Applications or backends. 

## npm
"npm is the package manager for JavaScript. Find, share, and reuse packages of code from hundreds of thousands of developers — and assemble them in powerful new ways."

npm allows us to be better developers by 'standing on the shoulders of gaints'. With over 300000 npm packages, you're likely to find an implementation for your project. Notable examples include:
- [express](https://www.npmjs.com/package/express)
- [lodash](https://www.npmjs.com/package/lodash)
- [react](https://www.npmjs.com/package/react)
- [material-ui](https://www.npmjs.com/package/material-ui)

## React
"A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES"
"React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."

It's data-driven and component-based nature allows React to be scalable, customizable and composable. Notable projects using React include:
- Netflix
- Imgur
- Airbnb
- Facebook

## Programming Tools
"A programming tool or software development tool is a computer program that software developers use to create, debug, maintain, or otherwise support other programs and applications." - Wikipedia

Although not neccessary, current Best Practices include using programming tools. Common Frontend Web Development programming tools purposes include:
- Linting: Linters checks code for errors and non-style conforming code.
- CSS Autoprefixer: Automatically prefixes CSS code which requires multiple property declarations for cross-browser compatibility.
- Transpiling: Allows the developer to programming in different versions of JavaScript. The Transpiler will compile code down into browser-friendly JavaScript. One might use other versions of JavaScript to access new and/or experiment features.
- Testing: Testing allows developers to automatically check if their code works as intended.

## webpack

![webpack](https://webpack.github.io/assets/what-is-webpack.png)

Webpack looks at our code and dependencies then packs it all up to be deployed to the web. This is important because the more requests the browser makes to the server, the slower your SPA will load. 

## Github Pages

Allows your to host your websites for free via Github. You can push your code to your repo's GH-Pages branch to deploy your website.