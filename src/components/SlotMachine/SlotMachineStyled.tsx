import styled from "styled-components";

const SlotMachineStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .price-message {
    color: #14a839;
    font-family: "Roboto";
    margin: 30px;
    font-size: 1.5rem;
  }

  .figures {
    padding: 20px;
    background-color: #fff;
    border-radius: 20px;
    font-size: 6rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;

export default SlotMachineStyled;
