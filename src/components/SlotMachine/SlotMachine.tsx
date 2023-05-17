import React, { useState } from "react";
import Button from "../Button/Button";
import SlotMachineStyled from "./SlotMachineStyled";

const figures = ["🍒", "🍇", "🍊", "🍓", "🍉", "🍋"];

const SlotMachine = () => {
  const [slot1, setSlot1] = useState("🚨");
  const [slot2, setSlot2] = useState("🚨");
  const [slot3, setSlot3] = useState("🚨");
  const [message, setMessage] = useState("");

  const randomFigures = () => {
    const newSlot1 = figures[Math.floor(Math.random() * figures.length)];
    const newSlot2 = figures[Math.floor(Math.random() * figures.length)];
    const newSlot3 = figures[Math.floor(Math.random() * figures.length)];
    setSlot1(newSlot1);
    setSlot2(newSlot2);
    setSlot3(newSlot3);

    switch (true) {
      case newSlot1 === newSlot2 && newSlot2 === newSlot3:
        setMessage("¡Felicidades! Has ganado 100€ 🤑");
        break;
      case newSlot1 === newSlot2 ||
        newSlot1 === newSlot3 ||
        newSlot2 === newSlot3:
        setMessage("¡Bien hecho! Has ganado 50€ 🚀");
        break;
      default:
        setMessage("Lo siento, no has ganado nada 🫠");
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
    </SlotMachineStyled>
  );
};

export default SlotMachine;
