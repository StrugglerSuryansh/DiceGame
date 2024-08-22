import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RollDice'
import Button from '../styled/Button'


const GamePLay = () => {

    const [score, setscore] = useState(0)

    const [SelectedNumber, setSelectedNumber] = useState(null); // Initialize with null
    const [currentDice, setCurrentDice] = useState(1);
    const [error, seterror] = useState("")
    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const rollDice = () => {
        if (!SelectedNumber) {

            seterror("you have not selected any number");

            return;
        }


        const randomNumber = generateRandomNumber(1, 6); // Adjust range to 1-6 for dice
        setCurrentDice(randomNumber);





        if (SelectedNumber === randomNumber) {
            setscore(prev => prev + randomNumber);
        } else {
            setscore(prev => prev - 2);
        }

        setSelectedNumber(undefined);

    };


    return (
        <MainContainer>
            <div className='topSection'>
                <TotalScore score={score} />
                <RoleDice currentDice={currentDice} rollDice={rollDice} />
                <NumberSelector SelectedNumber={SelectedNumber} setSelectedNumber={setSelectedNumber} error={error} seterror={seterror} />
            </div>
            <div className='btns'>

                <OutlineButton>Reset</OutlineButton>
                <Button>Show Rules</Button>
            </div>
        </MainContainer>
    )
}

export default GamePLay



const MainContainer = styled.main`
padding-top: 70px;

.topSection{
    display: flex;
    justify-content: space-around;
    align-items:  end;
}
.btns{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

`;