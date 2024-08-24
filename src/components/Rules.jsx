import styled from "styled-components";

const Rules = () => {
    return (
        <RulesContainer>
            <h2>How to play dice game</h2>
            <div className="text">
                <p>Select any number</p>
                <p>Click on dice image</p>
                <p>
                    after click on dice if selected number is equal to dice number you
                    will get same point as dice{" "}
                </p>
                <p>if you get wrong guess then 2 point will be dedcuted </p>
            </div>
        </RulesContainer>
    );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  background-color: #fbf1f1;
  padding: 20px;
  border-radius: 10px;
  height: 67%;

  h2 {
    font-size: 24px;
  }

  .text {
    margin-top: 24px;
  }

  @media (max-width: 768px) { // Adjust breakpoint as needed
    max-width: 90%;
    height: auto; // Remove fixed height for better responsiveness
  }
`;