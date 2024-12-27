const Playbuttons = ({
  btn,
  start,
  play,
  scoreone,
  scoretwo,
  startHouseOne,
  startHouseTwo,
}) => {
  return (
    <div className="play-btns">
      {btn == 100 && (
        <>
          <button className="btn-ctrl" onClick={start}>
            Start
          </button>
          <br /> <br /> <br />
          <div className="text-div">
            <h3 className="text">In a galaxy far far away...</h3>
            <h3 className="text">Some far far neighbours...</h3>
            <h4 className="text">Not geting along well...</h4>
            <h4 className="text">Time of war has come...</h4>
            <h4 className="text">...</h4>
            <h1 className="text">Neighbours Wars</h1>
          </div>
        </>
      )}
      {btn == 0 && (
        <>
          <button className="btn-ctrl" onClick={play}>
            {scoreone == scoretwo
              ? "Draw"
              : scoreone > scoretwo
              ? "Yellow win"
              : "Blue win"}
            <br />
            {scoreone} - {scoretwo} <br /> Play again?
          </button>
        </>
      )}
      {btn == 1 && (
        <button className="btn-one" onClick={startHouseOne}>
          House 1
        </button>
      )}
      {btn == 2 && (
        <button className="btn-two" onClick={startHouseTwo}>
          House 2
        </button>
      )}
    </div>
  );
};

export default Playbuttons;
