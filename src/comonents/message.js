import React from "react";
import "../css/main.css";
import { FaCircle } from "react-icons/fa";

const Message = ({name, text, time }) => {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name">
          {" "}
          <FaCircle className="fa fa-circle online" /> {name}
        </span>
        <span className="message-data-time">{time}</span>
      </div>
      <div className="message my-message">{text}</div>
    </li>
  );
};
export default Message;
