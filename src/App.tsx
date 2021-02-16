import { useEffect, useState } from "react";
import { compareAsc, compareDesc } from "date-fns";
import data from "./messages.json";

const messages: Array<MessageData> = data.messages;

type Messages = Array<ExtendedMsg | MessageData>;

interface MessageData {
  content: string;
  senderUuid: string;
  sentAt: string;
  uuid: string;
}

interface ExtendedMsg extends MessageData {
  index: number;
  onDelete?: (key: number) => void;
}

export const Message = ({
  content,
  index,
  onDelete,
  senderUuid,
  sentAt,
}: ExtendedMsg) => {
  const date = new Date(sentAt).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "est",
  });
  const time = new Date(sentAt).toLocaleTimeString("en-us");
  return (
    <li>
      <div className="message-header">
        <strong>USER: {senderUuid}</strong>
        <time dateTime={sentAt}>
          {date} at {time}
        </time>
      </div>
      <span>{content}</span>
      <div className="message-footer">
        <button className="delete" onClick={() => onDelete && onDelete(index)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export const App = () => {
  const [dedupList, updateDedupList] = useState<Messages>([]);
  const [sortOrder, updateSortOrder] = useState("asc");

  useEffect(() => {
    deDupMessages(messages);
  }, []);

  const deDupMessages = (messageList: Messages) => {
    let uuids: Array<string> = [];
    let contentList: Array<string> = [];
    let uniqueMessages: Messages = [];

    for (let i = 0; i < messageList.length; i++) {
      const uuid = messageList[i].uuid;
      const content = messageList[i].content;

      if (!uuids.includes(uuid) && !contentList.includes(content)) {
        uuids.push(uuid);
        contentList.push(content);
        uniqueMessages.push({
          index: i,
          ...messageList[i],
        });
      }
    }

    updateDedupList(uniqueMessages);
  };

  const sortByDate = () => {
    if (sortOrder === "asc") {
      updateSortOrder("desc");
      dedupList.sort((a, b) =>
        compareAsc(new Date(b.sentAt), new Date(a.sentAt))
      );
    } else {
      updateSortOrder("asc");
      dedupList.sort((a, b) =>
        compareDesc(new Date(b.sentAt), new Date(a.sentAt))
      );
    }

    deDupMessages(dedupList);
  };

  const deleteMsg = (index: number) => {
    const removedMsg = dedupList.splice(index, 1);

    // TO-DO: better way to do this with TypeScript without using the removed message
    console.log(`removed`, removedMsg);

    updateDedupList(dedupList);
    deDupMessages(dedupList);
  };

  return (
    <div className="app">
      <header>
        <button onClick={() => sortByDate()}>Sort by Date</button>
      </header>
      <ul>
        {dedupList.map((m, i) => (
          <Message
            content={m.content}
            index={i}
            key={i}
            onDelete={deleteMsg}
            senderUuid={m.senderUuid}
            sentAt={m.sentAt}
            uuid={m.uuid}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
