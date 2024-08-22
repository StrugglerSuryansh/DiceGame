import styled from 'styled-components';

const RollDice = ({ rollDice, currentDice }) => {


    return (
        <DiceContainer>
            <div className="dice" onClick={rollDice}>
                <img src={`/images/dice_${currentDice}.png`} alt="" />
            </div>
            <p>Click on the dice to roll</p>
        </DiceContainer>
    );
};

export default RollDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    
  }
`;