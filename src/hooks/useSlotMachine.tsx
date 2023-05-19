import { useState } from "react";

const useSlotMachine = () => {
  const figures: string[] = ["🍒", "🍇", "🍊", "🍓", "🍉", "🍋"];
  const jackpot: number = 2500;

  const [slot, setSlots] = useState({
    slot1: "🚨",
    slot2: "🚨",
    slot3: "🚨",
  });

  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState(0);
  const [jackpotTotal, setJackpotTotal] = useState(0);

  const getRandomFigures = (): void => {
    const newSlot1 = figures[Math.floor(Math.random() * figures.length)];
    const newSlot2 = figures[Math.floor(Math.random() * figures.length)];
    const newSlot3 = figures[Math.floor(Math.random() * figures.length)];

    setSlots({ slot1: newSlot1, slot2: newSlot2, slot3: newSlot3 });

    if (newSlot1 === newSlot2 && newSlot2 === newSlot3) {
      if (newSlot1 === "🍇") {
        setMessage(
          `¡Felicidades! Has ganado el JACKPOT de ${
            jackpot + jackpotTotal
          }€ 🥇. ¡Vuelve a jugar para tener otra oportunidad!`
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

  const resetGame = () => {
    setMessage("");
    setAmount(0);
  };

  return {
    slot,
    message,
    amount,
    jackpot,
    jackpotTotal,
    getRandomFigures,
    resetGame,
  };
};

export default useSlotMachine;
