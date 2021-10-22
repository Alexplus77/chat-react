import React from "react";
import "../css/main.css";
import { FaCircle } from "react-icons/fa";

const Typing = ({ id, name, time }) => {
  return (
    <li className="clearfix">
      <div key={id} className="message-data align-right">
        <span className="message-data-time">{time}</span>
        <span className="message-data-name">{name}</span>
        <i className="fa fa-circle me"> </i>
      </div>
    </li>
  );
};

export default Typing;
