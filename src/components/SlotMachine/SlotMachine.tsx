import Button from "../Button/Button";
import SlotMachineStyled from "./SlotMachineStyled";
import useSlotMachine from "../../hooks/useSlotMachine";

const SlotMachine = (): JSX.Element => {
  const {
    slot,
    message,
    amount,
    jackpot,
    jackpotTotal,
    getRandomFigures,
    resetGame,
  } = useSlotMachine();

  return (
    <SlotMachineStyled>
      <div className="figures">
        {slot.slot1} {slot.slot2} {slot.slot3}
      </div>
      <div className="price-message">{message}</div>
      <div className="container-balance">
        <span className="container-balance__amount">Bote actual:{amount}€</span>
        <span className="container-balance__jackpot">
          Jackpot: {jackpot + jackpotTotal}€
        </span>
      </div>
      <Button
        className={"roll"}
        action={() => {
          getRandomFigures();
        }}
        message="ROLL"
      />
      <Button className={"reset-game"} action={resetGame} message="RESET" />
    </SlotMachineStyled>
  );
};

export default SlotMachine;
