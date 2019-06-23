import React from "react";
import "./styles.scss";

class PageRightSide extends React.Component {
  render() {
    return (
      <div className="page-right-side-container w-75">
        {this.props.children}
      </div>
    );
  }
}

export default PageRightSide;
