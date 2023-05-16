import SlotProps from "../../types/types";

const Slot = ({ figures }: SlotProps): JSX.Element => {
  const roll = figures[Math.floor(Math.random() * figures.length)];

  return <div>{roll}</div>;
};

export default Slot;
