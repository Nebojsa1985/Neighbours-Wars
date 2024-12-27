const Scoreboard = ({
  setings,
  setRounds,
  round,
  rounds,
  scoreone,
  scoretwo,
}) => {
  return (
    <div className="scoreboard">
      {setings && (
        <div className="rounds-set">
          <h3>Set rounds</h3>
          <input
            type="number"
            value={rounds}
            onChange={(e) => setRounds(e.target.value)}
          />
        </div>
      )}

      <h1>
        Round {round} of {rounds}
      </h1>
      <h1 className="score-one">Yellow: {scoreone}</h1>
      <h1 className="score-two">Blue: {scoretwo}</h1>
    </div>
  );
};

export default Scoreboard;
