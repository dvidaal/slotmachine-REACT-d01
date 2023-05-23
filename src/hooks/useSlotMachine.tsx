import { useState } from "react";
import SlotsStructure from "../types/types";

const useSlotMachine = () => {
  const figures: string[] = ["🍒", "🍇", "🍊", "🍓", "🍉", "🍋"];
  const jackpot: number = 2500;

  const initialSlots: SlotsStructure = {
    slot1: "🚨",
    slot2: "🚨",
    slot3: "🚨",
  };

  const [slot, setSlots] = useState<SlotsStructure>(initialSlots);
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState(0);
  const [jackpotTotal, setJackpotTotal] = useState(0);
  const [jackpotSuccessRate, setJackpotSuccessRate] = useState(0);
  const [rollCount, setRollCount] = useState(0);
  const [neededClicks, setNeededClicks] = useState(0);

  const getRandomFigures = (): void => {
    setRollCount(rollCount + 1);

    if (rollCount === neededClicks - 1) {
      setSlots({
        slot1: "🍇",
        slot2: "🍇",
        slot3: "🍇",
      });
      setMessage(
        `¡Felicidades! Has ganado el JACKPOT de ${
          jackpot + jackpotTotal + amount
        }€ 🥇. ¡Además del bote actual!`
      );
      setNeededClicks(0);
      setJackpotTotal(0);
      setAmount(0);
      setRollCount(0);
      setJackpotSuccessRate(0);
      return;
    }

    const newSlot1 = figures[Math.floor(Math.random() * figures.length)];
    const newSlot2 = figures[Math.floor(Math.random() * figures.length)];
    const newSlot3 = figures[Math.floor(Math.random() * figures.length)];

    setSlots({ slot1: newSlot1, slot2: newSlot2, slot3: newSlot3 });

    if (newSlot1 === newSlot2 && newSlot2 === newSlot3) {
      if (newSlot1 === "🍇") {
        setMessage(
          `¡Felicidades! Has ganado el JACKPOT de ${
            jackpot + jackpotTotal + amount
          }€ 🥇. ¡Además del bote actual!`
        );
        setAmount(0);
        setJackpotTotal(0);
      } else {
        setMessage(`¡Felicidades! Has ganado 100€ 🤑`);
        setAmount((prevBalance) => prevBalance + 100);
      }
    } else if (
      newSlot1 === newSlot2 ||
      newSlot1 === newSlot3 ||
      newSlot2 === newSlot3
    ) {
      setMessage("¡Bien hecho! Has ganado 50€ 🚀");
      setAmount((prevBalance) => prevBalance + 50);
    } else {
      setMessage("Lo siento, no has ganado nada");
      setJackpotTotal((prevJackpot) => prevJackpot + 5);
    }
  };

  const resetGame = (): void => {
    setMessage("");
    setAmount(0);
    setSlots(initialSlots);
    setJackpotSuccessRate(0);
    setRollCount(0);
    setNeededClicks(0);
  };

  const hackJackpotSuccessRate = (): void => {
    setRollCount(0);
    const newSuccessRate = Math.floor(Math.random() * 100) + 1;
    setJackpotSuccessRate(newSuccessRate);

    if (newSuccessRate >= 10 && newSuccessRate <= 30) {
      setNeededClicks(8);
    }
    if (newSuccessRate >= 31 && newSuccessRate <= 50) {
      setNeededClicks(6);
    }
    if (newSuccessRate >= 51 && newSuccessRate <= 80) {
      setNeededClicks(4);
    }
    if (newSuccessRate >= 81 && newSuccessRate <= 99) {
      setNeededClicks(2);
    }
    if (newSuccessRate === 100) {
      setNeededClicks(0);
    }
  };

  return {
    slot,
    message,
    amount,
    jackpot,
    jackpotTotal,
    jackpotSuccessRate,
    hackJackpotSuccessRate,
    getRandomFigures,
    resetGame,
  };
};

export default useSlotMachine;
