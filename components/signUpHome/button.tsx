import React from "react";
import { styles } from "../../styles";

type Props = {
  index: number;
  title: string;
  activeComponent: number;
  selectedComponentHandler: (index: number) => void;
};

function Button({ title, index, activeComponent, selectedComponentHandler }: Props) {
  console.log(index);
  return (
    <button
      className={`w-[46%] lg:w-fit text-[.7rem] lg:text-[1rem] ${styles.primary} py-5 !px-2 lg:!px-14 ${
        activeComponent !== index ? "!bg-secondary !text-dark" : ""
      }`}
      onClick={() => selectedComponentHandler(index)}
    >
      {title}
    </button>
  );
}

export default Button;
