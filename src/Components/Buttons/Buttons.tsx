import React from "react";
import styles from "./Buttons.module.css";

const Buttons = (props: {
  isActiveNumber: number | null;
  handleClick: (num: number) => void;
  currentNumber: number;
  content: string;
  id: string;
}) => {
  const { isActiveNumber, handleClick, currentNumber, content, id } = props;
  return (
    <div className={styles.main}>
      <button
        onClick={() => handleClick(currentNumber)}
        className={
          isActiveNumber === currentNumber ? styles.selected : styles.buttonMain
        }
      >
        {content}
      </button>
    </div>
  );
};

export default Buttons;
