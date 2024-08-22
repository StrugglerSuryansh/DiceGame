import React, { useState } from 'react';
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import styled from 'styled-components';
import RoleDice from './RollDice';

const GamePLay = () => {
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState(null);
    const [currentDice, setCurrentDice] = useState(1);

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const rollDice = () => {
        const randomNumber = generateRandomNumber(1, 6);
        setCurrentDice(randomNumber);

        // Update the score based on the selected number
        if (selectedNumber === randomNumber) {
            setScore(prev => prev + randomNumber);
        } else {
            setScore(prev => prev - 2);
        }
    };

    return (
        <MainContainer>
            <div className='topSection'>
                <TotalScore score={score} />
                <RoleDice currentDice={currentDice} rollDice={rollDice} />
                <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
            </div>
        </MainContainer>
    );
}

export default GamePLay;

const MainContainer = styled.main`
    padding-top: 70px;

    .topSection {
        display: flex;
        justify-content: space-around;
        align-items: end;
    }
`;
