import React, { useState } from 'react';
import StartGame from './components/StartGame';



const App = () => {

  const [isGameStarted, setisGameStarted] = useState(false);

  const togglePLay = () => {
    setisGameStarted((prev) => !prev);
  }


  return (
    <div>
      <StartGame />
    </div>
  );
};

export default App;



