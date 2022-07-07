import Square from "./Square";

const Board = ({ squares, onClick }) => {
  const style = {
    border: "4px solid darkblue",
    borderRadius: "10px",
    width: "300px",
    height: "300px",
    margin: "0 auto",
    display: "grid",
    gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)"
  };

  return (
    <div style={style}>
      {squares.map((squre, i) => (
        <Square key={i} value={squre} onClick={() => onClick(i)} />
      ))}
    </div>
  );
};

export default Board;
