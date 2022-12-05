import React from "react";
import styles from "./Tip.module.css";

const Tip = (props: {
  enteredCustomTip: string;
  customTipHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isActiveNumber: number | null;
}) => {
  const { enteredCustomTip, customTipHandler, isActiveNumber } = props;
  return (
    <input
      type="number"
      value={enteredCustomTip}
      placeholder="custom"
      onChange={customTipHandler}
      disabled={isActiveNumber !== null ? true : false}
      className={styles.tipMain}
    />
  );
};

export default Tip;
