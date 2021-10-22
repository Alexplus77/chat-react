import React from "react";
import Message from "../comonents/message";
import Response from "../comonents/response";
import Typing from "../comonents/typing";
import "../css/main.css";

const MessageHistoryPage = ({ list }) => {
  return (
    <ul>
      {list.map(({ id, from, type, text, time }) => {
        const { name } = from;
        switch (type) {
          case "message":
            return <Message id={id} name={name} text={text} time={time} />;
          case "response":
            return <Response id={id} name={name} text={text} time={time} />;
          case "typing":
            return <Typing id={id} name={name}  time={time} />;
          default:
            return null;
        }
      })}
    </ul>
  );
};

export default MessageHistoryPage;
