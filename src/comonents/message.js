import React from "react";
import "../css/main.css";

const Message = ({ id, name, text, time }) => {
  return (
    <li>
      <div key={id} className="message-data">
        <span className="message-data-name">
          <i className="fa fa-circle online"> </i> {name}
        </span>
        <span className="message-data-time">{time}</span>
      </div>
      <div className="message my-message">{text}</div>
    </li>
  );
};
export default Message;
