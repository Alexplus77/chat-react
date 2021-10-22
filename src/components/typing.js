import React from "react";
import "css/main.css";
import { FaCircle } from "react-icons/fa";

const Typing = ({ name, time }) => {
  return (
    <li className="clearfix">
      <div className="message-data align-right">
        <span className="message-data-time">{time}</span>{" "}
        <span className="message-data-name">{name}</span>{" "}
        <FaCircle className="fa fa-circle me" />
      </div>
    </li>
  );
};

export default Typing;
