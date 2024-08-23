import React, { useState } from 'react';
import StartGame from './components/StartGame';
import GamePLay from './components/GamePLay';



const App = () => {

  const [isGameStarted, setisGameStarted] = useState(false);

  const togglePLay = () => {
    setisGameStarted((prev) => !prev);
  }


  return (
    <div>
      {
        isGameStarted ? <GamePLay /> : <StartGame toggle={togglePLay} />
      }
    </div>
  );
};

export default App;



     