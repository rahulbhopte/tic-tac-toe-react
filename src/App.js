import "./styles.css";
//import GridItem from "./GridItem";
import GridRow from "./GridRow";

export default function App() {
  return (
    <div className="container">
      <div className="header">Tic Tac Toe</div>
      <div id="board">
        <GridRow />
        <GridRow />
        <GridRow />
      </div>
      <div className="turn"></div>
    </div>
  );
}
