import { useEffect, useState } from "react";
import "./App.css";
import sound from "./sound/laser.mp3";

function App() {
  const [btn, setBtn] = useState(100);
  const [setings, setSetings] = useState(true);
  const [rounds, setRounds] = useState(5);
  const [round, setRound] = useState(1);
  const [scoreone, setScoreone] = useState(0);
  const [scoretwo, setScoretwo] = useState(0);
  const [houseone, setHouseone] = useState({
    window1: false,
    window2: false,
    window3: false,
    window4: false,
    window5: false,
    window6: false,
    window7: false,
    window8: false,
    window9: false,
    window10: false,
    window11: false,
    window12: false,
    window13: false,
    window14: false,
    window15: false,
    window16: false,
  });

  const [housetwo, setHousetwo] = useState({
    window1: false,
    window2: false,
    window3: false,
    window4: false,
    window5: false,
    window6: false,
    window7: false,
    window8: false,
    window9: false,
    window10: false,
    window11: false,
    window12: false,
    window13: false,
    window14: false,
    window15: false,
    window16: false,
  });

  const setDefaultWindows = () => {
    setHouseone({
      window1: false,
      window2: false,
      window3: false,
      window4: false,
      window5: false,
      window6: false,
      window7: false,
      window8: false,
      window9: false,
      window10: false,
      window11: false,
      window12: false,
      window13: false,
      window14: false,
      window15: false,
      window16: false,
    });
    setHousetwo({
      window1: false,
      window2: false,
      window3: false,
      window4: false,
      window5: false,
      window6: false,
      window7: false,
      window8: false,
      window9: false,
      window10: false,
      window11: false,
      window12: false,
      window13: false,
      window14: false,
      window15: false,
      window16: false,
    });
  };

  const sounds = () => {
    new Audio(sound).play();
  };

  const btnWindows1 = (e) => {
    sounds();
    setScoreone((x) => x + 1);
    e.target.disabled = true;
  };

  const btnWindows2 = (e) => {
    sounds();
    setScoretwo((x) => x + 1);
    e.target.disabled = true;
  };

  const gameover = () => {
    if (round == rounds) {
      setBtn(0);
      setRound(0);
    }
  };
  const start = () => {
    setBtn(1);
    setSetings(false);
  };

  const play = () => {
    setBtn(100);
    setRound(1);
    setScoreone(0);
    setScoretwo(0);
    setSetings(true);
  };

  const startHouseOne = () => {
    setBtn(null);
    //get random num four between min and max
    const randomNum = (min, max) => {
      var n = [];
      for (var i = 0; i < 6; i++) {
        n.push(Math.floor(Math.random() * max) + min);
      }
      return n;
    };
    //make array of houseone object keys
    const xxxx = Object.keys(houseone);
    let nex = [
      xxxx[randomNum(0, 15)[0]],
      xxxx[randomNum(0, 15)[1]],
      xxxx[randomNum(0, 15)[2]],
      xxxx[randomNum(0, 15)[3]],
      xxxx[randomNum(0, 15)[4]],
      xxxx[randomNum(0, 15)[5]],
    ];
    //make object from nex array with values true
    let obj = nex.reduce((ac, a) => ({ ...ac, [a]: "true" }), {});
    setHouseone(obj);
    //reset on start houseone and housetwo after 1110 miliseconds
    setTimeout(() => {
      setDefaultWindows();
      setBtn(2);
    }, 1200);
  };

  const startHouseTwo = () => {
    setBtn(null);
    //get random num four between min and max
    const randomNum = (min, max) => {
      var n = [];
      for (var i = 0; i < 6; i++) {
        n.push(Math.floor(Math.random() * max) + min);
      }
      return n;
    };
    //make array of houseone object keys
    const xxxx = Object.keys(housetwo);
    let nex = [
      xxxx[randomNum(0, 15)[0]],
      xxxx[randomNum(0, 15)[1]],
      xxxx[randomNum(0, 15)[2]],
      xxxx[randomNum(0, 15)[3]],
      xxxx[randomNum(0, 15)[4]],
      xxxx[randomNum(0, 15)[5]],
    ];
    //make object from nex array with values true
    let obj = nex.reduce((ac, a) => ({ ...ac, [a]: "true" }), {});
    setHousetwo(obj);
    //reset on start houseone and housetwo after 1110 miliseconds
    setTimeout(() => {
      setDefaultWindows();
      setBtn(1);
      setRound((x) => x + 1);
      gameover();
    }, 1200);
  };

  return (
    <>
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
      <div className="App">
        <div className="house-one">
          {houseone.window1 ? (
            <button
              onClick={(e) => {
                btnWindows1(e);
              }}
              disabled={false}
            >
              🧙‍♂️
            </button>
          ) : (
            <button></button>
          )}
          {houseone.window2 ? (
            <button
              onClick={(e) => {
                btnWindows1(e);
              }}
              disabled={false}
            >
              👨‍🎨
            </button>
          ) : (
            <button></button>
          )}
          {houseone.window3 ? (
            <button
              onClick={(e) => {
                btnWindows1(e);
              }}
              disabled={false}
            >
              🧞‍♂️
            </button>
          ) : (
            <button></button>
          )}
          {houseone.window4 ? (
            <button
              onClick={(e) => {
                btnWindows1(e);
              }}
              disabled={false}
            >
              🧝
            </button>
          ) : (
            <button></button>
          )}
          {houseone.window5 ? (
            <button
              onClick={(e) => {
                btnWindows1(e);
              }}
              disabled={false}
            >
              👨‍🏭
            </button>
          ) : (
            <button></button>
          )}
          {houseone.window6 ? (
            <button
              onClick={(e) => {
                btnWindows1(e);
              }}
              disabled={false}
            >
              👨‍🌾
            </button>
          ) : (
            <button></button>
          )}
          {houseone.window7 ? (
            <button
              onClick={(e) => {
                btnWindows1(e);
              }}
              disabled={false}
            >
              👨‍🎤
            </button>
          ) : (
            <button></button>
          )}
          {houseone.window8 ? (
            <button
              onClick={(e) => {
                btnWindows1(e);
              }}
              disabled={false}
            >
              👩‍🔬
            </button>
          ) : (
            <button></button>
          )}
          {houseone.window9 ? (
            <button
              onClick={(e) => {
                btnWindows1(e);
              }}
              disabled={false}
            >
              🧕
            </button>
          ) : (
            <button></button>
          )}
          {houseone.window10 ? (
            <button
              onClick={(e) => {
                btnWindows1(e);
              }}
              disabled={false}
            >
              🤹‍♂️
            </button>
          ) : (
            <button></button>
          )}
          {houseone.window11 ? (
            <button
              onClick={(e) => {
                btnWindows1(e);
              }}
              disabled={false}
            >
              🦹‍♂️
            </button>
          ) : (
            <button></button>
          )}
          {houseone.window12 ? (
            <button
              onClick={(e) => {
                btnWindows1(e);
              }}
              disabled={false}
            >
              🦇
            </button>
          ) : (
            <button></button>
          )}
          {houseone.window13 ? (
            <button
              onClick={(e) => {
                btnWindows1(e);
              }}
              disabled={false}
            >
              👩‍🏫
            </button>
          ) : (
            <button></button>
          )}
          {houseone.window14 ? (
            <button
              onClick={(e) => {
                btnWindows1(e);
              }}
              disabled={false}
            >
              👰
            </button>
          ) : (
            <button></button>
          )}
          {houseone.window15 ? (
            <button
              onClick={(e) => {
                btnWindows1(e);
              }}
              disabled={false}
            >
              🧙‍♀️
            </button>
          ) : (
            <button></button>
          )}
          {houseone.window16 ? (
            <button
              onClick={(e) => {
                btnWindows1(e);
              }}
              disabled={false}
            >
              👨‍⚖️
            </button>
          ) : (
            <button></button>
          )}
        </div>
        <div className="play-btns">
          {btn == 100 && (
            <>
              <button className="btn-ctrl" onClick={start}>
                Start
              </button>
              <br /> <br /> <br />
              <div className="text-div">
                <h3 className="text">In a galaxy far far far away...</h3>
                <h3 className="text">Some far far neighbours...</h3>
                <h4 className="text">Not geting along well,so ...</h4>
                <h4 className="text">Time of war has come...</h4>
                <h4 className="text">..........</h4>
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
        <div className="house-two">
          {housetwo.window1 ? (
            <button
              onClick={(e) => {
                btnWindows2(e);
              }}
              disabled={false}
            >
              👮‍♂️
            </button>
          ) : (
            <button></button>
          )}
          {housetwo.window2 ? (
            <button
              onClick={(e) => {
                btnWindows2(e);
              }}
              disabled={false}
            >
              🧛‍♂️
            </button>
          ) : (
            <button></button>
          )}
          {housetwo.window3 ? (
            <button
              onClick={(e) => {
                btnWindows2(e);
              }}
              disabled={false}
            >
              🧝‍♀️
            </button>
          ) : (
            <button></button>
          )}
          {housetwo.window4 ? (
            <button
              onClick={(e) => {
                btnWindows2(e);
              }}
              disabled={false}
            >
              👩‍🍳
            </button>
          ) : (
            <button></button>
          )}
          {housetwo.window5 ? (
            <button
              onClick={(e) => {
                btnWindows2(e);
              }}
              disabled={false}
            >
              👩‍🎤
            </button>
          ) : (
            <button></button>
          )}
          {housetwo.window6 ? (
            <button
              onClick={(e) => {
                btnWindows2(e);
              }}
              disabled={false}
            >
              👩🏽‍🎨
            </button>
          ) : (
            <button></button>
          )}
          {housetwo.window7 ? (
            <button
              onClick={(e) => {
                btnWindows2(e);
              }}
              disabled={false}
            >
              👨‍💼
            </button>
          ) : (
            <button></button>
          )}
          {housetwo.window8 ? (
            <button
              onClick={(e) => {
                btnWindows2(e);
              }}
              disabled={false}
            >
              👨‍🔧
            </button>
          ) : (
            <button></button>
          )}
          {housetwo.window9 ? (
            <button
              onClick={(e) => {
                btnWindows2(e);
              }}
              disabled={false}
            >
              👩‍🎓
            </button>
          ) : (
            <button></button>
          )}
          {housetwo.window10 ? (
            <button
              onClick={(e) => {
                btnWindows2(e);
              }}
              disabled={false}
            >
              🤷‍♂️
            </button>
          ) : (
            <button></button>
          )}
          {housetwo.window11 ? (
            <button
              onClick={(e) => {
                btnWindows2(e);
              }}
              disabled={false}
            >
              👩‍💼
            </button>
          ) : (
            <button></button>
          )}
          {housetwo.window12 ? (
            <button
              onClick={(e) => {
                btnWindows2(e);
              }}
              disabled={false}
            >
              💂‍♂️
            </button>
          ) : (
            <button></button>
          )}
          {housetwo.window13 ? (
            <button
              onClick={(e) => {
                btnWindows2(e);
              }}
              disabled={false}
            >
              🧞‍♀️
            </button>
          ) : (
            <button></button>
          )}
          {housetwo.window14 ? (
            <button
              onClick={(e) => {
                btnWindows2(e);
              }}
              disabled={false}
            >
              🦸🏼‍♂️
            </button>
          ) : (
            <button></button>
          )}
          {housetwo.window15 ? (
            <button
              onClick={(e) => {
                btnWindows2(e);
              }}
              disabled={false}
            >
              🤵
            </button>
          ) : (
            <button></button>
          )}
          {housetwo.window16 ? (
            <button
              onClick={(e) => {
                btnWindows2(e);
              }}
              disabled={false}
            >
              🧘
            </button>
          ) : (
            <button></button>
          )}
        </div>
        <div className="author-button">
          <a href="https://nebojsajovanovic.netlify.app/" target="_blank">
            ©️
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
