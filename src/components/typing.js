import React from "react";
import "css/main.css";
import { FaCircle } from "react-icons/fa";

const Typing = ({ name, time, text }) => {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name">
          {" "}
          <FaCircle className="fa fa-circle online" /> {name}
        </span>
        <span className="message-data-time">{time}</span>
      </div>
      <div>{text}</div>
    </li>
  );
};

export default Typing;
