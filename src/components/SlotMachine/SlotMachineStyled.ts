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
    height: 50px;
  }

  .figures {
    padding: 20px;
    background-color: #fff;
    border-radius: 20px;
    font-size: 6rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;

    @media (max-width: 440px) {
      font-size: 4rem;
    }
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

  .secondary-button-container {
    display: flex;
    flex-direction: row;
    align-items: center;

    &__reset-game {
      background-color: #14a839;
    }

    &__hack-jackpot {
      background-color: #de2727;
    }
  }
`;

export default SlotMachineStyled;
