const Square = ({ value, onClick }) => {
  const style = {
    width: "100px",
    height: "100px",
    background: "lightblue",
    border: "2px solid darkblue",
    fontSize: "30px",
    fontWeight: "800",
    cursor: "pointer",
    outline: "none"
  };

  return (
    <div>
      <button style={style} onClick={onClick}>
        {value}
      </button>
    </div>
  );
};

export default Square;
