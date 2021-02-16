# Deduplicate-Messages

Simple message deduping with built in sorting & pagination.

## Acceptance Criteria

- [x] Messages are displayed in a list.
- [x] Messages displays content, `senderUuid` and `sentAt`.
- [ ] Messages are only displayed once. They should be deduplicated if `uuid` and `content` already exist.
- [x] Display human-readable time format of `sentAt` timestamp, such as `"DayOfTheWeek Month Day, Year at Time"`.
- [x] Support sorting by `sentAt` in ascending/descending order.
- [ ] Support pagination through messages where each page contains 5 messages.
- [x] Allow a message to be deleted.

## Techinical & Design Choices

- Used `create-react-app` to get up and running.
- Used `date-fns` to make sorting by date easier

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
