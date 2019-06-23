import React from "react";
import "./styles.scss";

export default props => (
  <div className="counter-container d-flex badge badge-secondary ml-3">
    <div className="title-cover text-light text-capitalize m-2">
      <span>{props.title}</span>
    </div>
    <div className="count-cover text-light m-2">
      <span>{props.count}</span>
    </div>
  </div>
);
