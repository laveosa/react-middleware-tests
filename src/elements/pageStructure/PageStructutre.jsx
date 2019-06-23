import React from "react";
import "./styles.scss";

class PageStructure extends React.Component {
  render() {
    return (
      <div className="page-structure-container d-flex bg-dark h-100">
        {this.props.children}
      </div>
    );
  }
}

export default PageStructure;
