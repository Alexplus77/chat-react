import React from "react";
import Message from "components/message";
import Response from "components/response";
import Typing from "components/typing";
import "css/main.css";

const HistoryPage = ({ list }) => {
  return (
    <ul>
      {list.map(({ id, from, type, text, time }) => {
        const { name } = from;
        switch (type) {
          case "message":
            return (
              <Message id={id} name={name} text={text} time={time} key={id} />
            );
          case "response":
            return (
              <Response id={id} name={name} text={text} time={time} key={id} />
            );
          case "typing":
            return (
              <Typing id={id} name={name} text={text} time={time} key={id} />
            );
          default:
            return null;
        }
      })}
    </ul>
  );
};

export default HistoryPage;
