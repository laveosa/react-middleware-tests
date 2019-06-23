import React from "react";
import "./styles.scss";

import PageStructure from "../../elements/pageStructure/PageStructutre";
import PageLeftSide from "../../elements/pageStructure/PageLeftSide";
import PageRightSide from "../../elements/pageStructure/PageRightSide";

class Portfolio extends React.Component {
  render() {
    return (
      <PageStructure>
        <PageLeftSide>
          <span>search</span>
        </PageLeftSide>
        <PageRightSide>
          <span>content</span>
        </PageRightSide>
      </PageStructure>
    );
  }
}

export default Portfolio;
