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
    jackpotSuccessRate,
    hackJackpotSuccessRate,
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
        {jackpotSuccessRate > 0 && (
          <span>{jackpotSuccessRate}% de éxito para ganar el Jackpot</span>
        )}
      </div>
      <Button
        className={"roll"}
        action={() => {
          getRandomFigures();
        }}
        message="ROLL"
      />
      <div className="secondary-button-container">
        <Button
          className={"secondary-button-container__hack-jackpot"}
          action={() => hackJackpotSuccessRate()}
          message="HACK"
        />
        <Button
          className={"secondary-button-container__reset-game"}
          action={resetGame}
          message="RESET"
        />
      </div>
    </SlotMachineStyled>
  );
};

export default SlotMachine;
