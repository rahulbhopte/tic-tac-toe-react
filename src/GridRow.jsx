import React from "react";
import GridItem from "./GridItem";
class GridRow extends React.Component {
  render() {
    const gridItemArr = [<GridItem />, <GridItem />, <GridItem />];
    return <div className="grid-row">{gridItemArr}</div>;
  }
}
export default GridRow;
