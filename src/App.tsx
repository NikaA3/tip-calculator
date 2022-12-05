import React, { useState } from "react";
import styles from "./App.module.css";
import Buttons from "./Components/Buttons/Buttons";
import { buttonInfo } from "./Components/Data/Data";
import GuestAmount from "./Components/GuestAmount/GuestAmount";
import Bill from "./Components/InputAmount/Bill";
import Tip from "./Components/InputTip/Tip";
import Logo from "./Components/Logo/Logo";
import RightSide from "./Components/RightSide/RightSide";

const App = () => {
  const [enteredBill, setEnteredBill] = useState("");
  const [enteredCustomTip, setEnteredCustomTip] = useState("");
  const [guestNumber, setGuestNumber] = useState("");
  const [isActiveNumber, setIsActiveNumber] = useState<number | null>(null);

  // Customer enetered bill amount
  const billChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredBill(event.target.value);
  };

  // Customer enetered tip amount
  const customTipHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredCustomTip(event.target.value);
  };

  // number of guests
  const peopleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGuestNumber(event.target.value);
  };

  // fucntion which controls clicking and unclicking
  const handleClick = (activeButton: number) => {
    if (isActiveNumber === activeButton) {
      setIsActiveNumber(null);
    } else {
      setIsActiveNumber(activeButton);
    }
  };

  //reset button
  const handleReset = () => {
    setEnteredBill("");
    setEnteredCustomTip("");
    setGuestNumber("");
    setIsActiveNumber(null);
  };

  // calculating tip and amount
  const calculation =
    (isActiveNumber &&
      (Number(enteredBill) * isActiveNumber) / Number(guestNumber)) ||
    (Number(enteredBill) * (Number(enteredCustomTip) / 100)) /
      Number(guestNumber);

  // calculating total sum
  const total = Number(enteredBill) / Number(guestNumber) + Number(calculation);

  return (
    <div className={styles.App}>
      {/* Splitter logo */}
      <Logo />
      <div className={styles.wrapper}>
        <div className={styles.mainDiv}>
          {/* total-amount area */}
          <div className={styles.left}>
            <Bill
              enteredBill={enteredBill}
              billChangeHandler={billChangeHandler}
            />

            {/* percentage buttons area */}
            <div className={styles.tipButtons}>
              <p className={styles.selectTip}>Select Tip %</p>
              <div className={styles.mainButton}>
                {buttonInfo.map((btnInfo) => (
                  <Buttons
                    key={btnInfo.id}
                    id={btnInfo.id}
                    isActiveNumber={isActiveNumber}
                    handleClick={handleClick}
                    currentNumber={btnInfo.currentNumber}
                    content={btnInfo.content}
                  />
                ))}
                <Tip
                  enteredCustomTip={enteredCustomTip}
                  customTipHandler={customTipHandler}
                  isActiveNumber={isActiveNumber}
                />
              </div>
            </div>

            {/* number of guests */}
            <GuestAmount
              guestNumber={guestNumber}
              peopleChangeHandler={peopleChangeHandler}
            />
          </div>
          {/* summed amount area */}

          <RightSide
            calculation={calculation}
            total={total}
            handleReset={handleReset}
            enteredBill={enteredBill}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
