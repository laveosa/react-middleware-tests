import React from "react";
import "./styles.scss";

class PageLeftSide extends React.Component {
  render() {
    return (
      <div className="page-left-side-container w-25 bg-secondary">
        {this.props.children}
      </div>
    );
  }
}

export default PageLeftSide;
