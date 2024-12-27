import { useEffect, useState } from "react";
import "./App.css";
import sound from "./sound/laser.mp3";
import Scoreboard from "./components/scoreboard";
import Houseone from "./components/houseone";
import Housetwo from "./components/housetwo";
import Author from "./components/author";
import Playbuttons from "./components/playbuttons";

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
      <Scoreboard
        setings={setings}
        setRounds={setRounds}
        round={round}
        rounds={rounds}
        scoreone={scoreone}
        scoretwo={scoretwo}
      />
      <div className="App">
        <Houseone houseone={houseone} btnWindows1={btnWindows1} />
        <Playbuttons
          btn={btn}
          start={start}
          play={play}
          scoreone={scoreone}
          scoretwo={scoretwo}
          startHouseOne={startHouseOne}
          startHouseTwo={startHouseTwo}
        />
        <Housetwo housetwo={housetwo} btnWindows2={btnWindows2} />
        <Author />
      </div>
    </>
  );
}

export default App;
