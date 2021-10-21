import React from "react";
import "./css/main.css";

const MessageHistory = ({ list }) => {
  return (
    <ul>
      {list.map(({ id, from, type, text, time }) => (
        <li key={id}>
          <div className="message-data align-right">
            <span className="message-data-time">{time}</span>
            <span className="message-data-name">{from.name}</span>
          </div>
          <div className="message other-message float-right">{text}</div>
        </li>
      ))}
    </ul>
  );
};

export default MessageHistory;