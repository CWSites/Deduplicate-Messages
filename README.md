# Deduplicate-Messages

Simple message deduping with built in sorting & pagination.

## Acceptance Criteria
- [ ] Messages are displayed in a list.
- [ ] Messages displays content, `senderUuid` and `sentAt`.
- [ ] Messages are only displayed once. If there are duplicated messages, we would like
them to be deduplicated if the `uuid` and `content` are the same.
- [ ] Display human-readable time format of `sentAt` timestamp, such as `"DayOfTheWeek Month Day, Year at Time"`.
- [ ] Support sorting by `sentAt` in ascending/descending order.
- [ ] Support pagination through messages where each page contains 5 messages.
- [ ] Allow a message to be deleted.

## Techinical & Design Choices

- Used `create-react-app` to get up and running.
