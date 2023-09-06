function Event1() {
    const mystyle = {
        color : "white",
        backgroundColor: "#000000",
        padding: "10px 20px",
        margin: "200px"
      };
    const handleClick = () => {
          alert ('Welcome to LJU');
    }
    return (
      <div>
        <center>
          <button style = {mystyle} onClick={handleClick}>
            Click me
          </button>
        </center>
      </div>
    );
  }
  export default Event1;
  