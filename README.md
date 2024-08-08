# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

To start a client-side router in a React application, you can use the popular 
`npm install react-router-dom`

## other points
. We then use the BrowserRouter component from react-router-dom to enable client-side routing.
## just points
These routes define the mapping between the URL in the browser's address bar and the component that should be rendered.
## in index.js
The ReactDOM.createRoot function creates a root element in the DOM, and the root.render function renders our App component to that root element.

## BrowserRouter

BrowserRouter is a component from react-router-dom that wraps our entire application.
It provides the routing context to our app, allowing us to use routes and links.

## Navigation

We have a simple navigation menu with threelinks: "Home" "About"  and contacts.
We use the Link component from react-router-dom to create links that can be clicked to navigate to different routes.
The to prop specifies the route path that the link should navigate to.

## Routes

Routes is a component from react-router-dom that wraps our route definitions.
We define two routes: one for the home page ("/") and one for the about page ("/about").
Each Route component specifies the path prop, which defines the route path, and the element prop, which specifies the component to render when the route is matched.

## How it Works

When the user clicks on a link, React Router updates the URL in the browser's address bar and renders the corresponding component.

For example, when the user clicks on the "Home" link, React Router updates the URL to / and renders the Home component. When the user clicks on the "About" link, React Router updates the URL to /about and renders the About component.
  ## strict mode 
  Strict mode is a development feature that helps you catch errors and warnings in your code

