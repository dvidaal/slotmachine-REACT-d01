import React, { useState } from "react";
import Button from "../Button/Button";
import SlotMachineStyled from "./SlotMachineStyled";

const figures: string[] = ["🍒", "🍇", "🍊", "🍓", "🍉", "🍋"];
const jackpot: number = 2500;

const SlotMachine = () => {
  const [slot1, setSlot1] = useState("🚨");
  const [slot2, setSlot2] = useState("🚨");
  const [slot3, setSlot3] = useState("🚨");
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState(0);

  const randomFigures = () => {
    const newSlot1 = figures[Math.floor(Math.random() * figures.length)];
    const newSlot2 = figures[Math.floor(Math.random() * figures.length)];
    const newSlot3 = figures[Math.floor(Math.random() * figures.length)];
    setSlot1(newSlot1);
    setSlot2(newSlot2);
    setSlot3(newSlot3);

    switch (true) {
      case newSlot1 === newSlot2 && newSlot2 === newSlot3:
        setMessage(`¡Felicidades! Has ganado 100€ 🤑`);
        setAmount((prevBalance) => prevBalance + 100);
        break;
      case newSlot1 === newSlot2 ||
        newSlot1 === newSlot3 ||
        newSlot2 === newSlot3:
        setMessage("¡Bien hecho! Has ganado 50€ 🚀");
        setAmount((prevBalance) => prevBalance + 50);
        break;

      case amount >= jackpot:
        setMessage(
          `🥇¡JACKPOT!🥇 Has ganado el bote de ${jackpot}€. ¡Rolea de nuevo para jugar otra vez!`
        );
        setAmount(0);
        break;
      default:
        setMessage("Lo siento, no has ganado nada 🫠");
        setAmount((prevBalance) => prevBalance - 2);
        break;
    }
  };
  return (
    <SlotMachineStyled>
      <div className="figures">
        {slot1} {slot2} {slot3}
      </div>
      <div className="price-message">{message}</div>
      <Button className={"roll"} action={randomFigures} message="ROLL" />
      <div className="container-balance">
        <span className="container-balance__amount">Bote actual:{amount}</span>
        <span className="container-balance_jackpot">Jackpot: {jackpot}</span>
      </div>
    </SlotMachineStyled>
  );
};

export default SlotMachine;
