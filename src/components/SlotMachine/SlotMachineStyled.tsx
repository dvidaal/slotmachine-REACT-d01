import styled from "styled-components";

const SlotMachineStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .price-message {
    text-align: center;
    color: #14a839;
    font-family: "Roboto";
    margin: 30px;
    font-size: 1.5rem;
    width: 500px;
    height: 50px;
  }

  .figures {
    padding: 20px;
    background-color: #fff;
    border-radius: 20px;
    font-size: 6rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }

  .instructions {
    color: #fff;
    font-family: "Roboto";
  }

  .container-balance {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Press Start 2P";
    margin: 20px;
    color: #fff;
    gap: 20px;

    &__jackpot {
      text-transform: uppercase;
      color: #de2727;
    }
  }

  .timer {
    color: #fff;
    font-family: "Press Start 2P";
  }

  .roll {
    animation: blinkingText 1.2s infinite;
  }

  .reset-game {
    background-color: #14a839;
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }

  @keyframes blinkingText {
    0% {
      color: #000;
    }
    49% {
      color: #000;
    }
    60% {
      color: transparent;
    }
    99% {
      color: transparent;
    }
    100% {
      color: #000;
    }
  }

  button {
    font-family: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 134px;
    height: 56px;
    background-color: #ffff00;
    border-radius: 20px;
    cursor: pointer;
    border: none;
    font-family: "Press Start 2P";
    margin: 30px;
  }
`;

export default SlotMachineStyled;
