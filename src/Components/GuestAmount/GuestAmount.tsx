import React from "react";
import styles from "./GuestAmount.module.css";
import icon from "../../images/icon-person.svg";

const GuestAmount = (props: {
  guestNumber: string;
  peopleChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const { guestNumber, peopleChangeHandler } = props;
  return (
    <div className={styles.people}>
      <img src={icon} alt="icon" className={styles.icon} />
      <label className={styles.title}>
        <span>Number of people</span>
        <span className={styles.error}>
          {guestNumber === "0" ? "Can't be zero" : ""}
        </span>
      </label>

      <input
        type="number"
        value={guestNumber}
        onChange={peopleChangeHandler}
        className={styles.inputStyle}
        placeholder="0"
      />
    </div>
  );
};

export default GuestAmount;
