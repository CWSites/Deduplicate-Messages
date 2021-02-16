import data from "./messages.json";

const messages = data.messages;

export interface MessageProps {
  content: string;
  senderUuid: string;
  sentAt: string;
}

export const Message = ({ content, senderUuid, sentAt }: MessageProps) => {
  return (
    <li>
      <div className="message-header">
        <strong>USER: {senderUuid}</strong>
        <time>{sentAt}</time>
      </div>
      <span>{content}</span>
      <div className="message-footer">
        <button>Delete</button>
      </div>
    </li>
  );
};

export const App = () => {
  return (
    <div className="App">
      <ul>
        {messages.map((m, i) => (
          <Message
            content={m.content}
            key={i}
            senderUuid={m.senderUuid}
            sentAt={m.sentAt}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
