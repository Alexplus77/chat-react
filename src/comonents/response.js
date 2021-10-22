import React from "react";
import "../css/main.css";
import { FaCircle } from "react-icons/fa";

const Response = ({ id, name, text, time }) => {
  return (
    <li className="clearfix">
      <div key={id} className="message-data align-right">
        <span className="message-data-time">{time} </span>
        <span className="message-data-name"> {name}</span>{" "}
        <i>
          <FaCircle className="fa fa-circle me" />
        </i>
      </div>
      <div className="message other-message float-right">{text}</div>
    </li>
  );
};

export default Response;
