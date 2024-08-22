import React, { useState } from 'react';
import styled from 'styled-components';

const NumberSelector = ({ setSelectedNumber, SelectedNumber }) => {

    const arrayNum = [1, 2, 3, 4, 5, 6];

    return (
        <NumberSelectorContainer>
            <div className='flex'>
                {arrayNum.map((value, index) => (
                    <Box
                        key={index}
                        onClick={() => setSelectedNumber(value)} // Use arrow function for consistent this binding
                        isSelected={value === SelectedNumber}
                    >
                        {value}
                    </Box>
                ))}
            </div>
            <p>Select Number</p>
        </NumberSelectorContainer>
    );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
display: flex;
align-items: end;
flex-direction: column;

.flex{
    display: flex;
    gap: 24px;
}
p{
    font-size: 24px;
    font-weight: 700px;
}

`;

const Box = styled.div`
  width: 72px;
  height: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? 'black' : 'white')};
  color: ${(props) => (!props.isSelected ? 'black' : 'white')};

`;