# Deduplicate Messages

Simple message deduping with built in sorting and ability to delete

Run in development mode using `yarn start` which will be made available at [http://localhost:3000](http://localhost:3000)

## Functionality

- [x] Messages are displayed in a list.
- [x] Messages displays content, `senderUuid` and `sentAt`.
- [x] Messages are only displayed once. They should be deduplicated if `uuid` and `content` already exist.
- [x] Display human-readable time format of `sentAt` timestamp, such as `"DayOfTheWeek Month Day, Year at Time"`.
- [x] Support sorting by `sentAt` in ascending/descending order.
- [x] Allow a message to be deleted.

## Techinical & Design Choices

- Used `create-react-app` to get up and running.
- Used `date-fns` to make sorting by date easier
