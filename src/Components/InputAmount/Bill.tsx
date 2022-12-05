import React from "react";
import styles from "./Bill.module.css";
import icon from "../../images/icon-dollar.svg";

const Bill = (props: {
  enteredBill: string;
  billChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const { enteredBill, billChangeHandler } = props;
  return (
    <div className={styles.billWrapper}>
      <label className={styles.bill}>
        <p>Bill</p>
      </label>
      <img src={icon} alt="logo" className={styles.logo} />
      <input
        type="number"
        value={enteredBill}
        onChange={billChangeHandler}
        className={styles.billInput}
        placeholder="0"
      />
    </div>
  );
};

export default Bill;
