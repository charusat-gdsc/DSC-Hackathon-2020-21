/** @format */

import classes from "./Prizes.module.css";
const PrizeWinner = (props) => {
  let WinnerElement, position;
  switch (props.pos) {
    case "F":
      WinnerElement = (
        <div className={[classes.prizeWinner1, classes.centerAlign].join(" ")}>
          <div className={classes.money}>&#8377;13000</div>
        </div>
      );
      position = <div className={classes.position}> WINNER </div>;
      break;
    case "S":
      WinnerElement = (
        <div className={[classes.prizeWinner2, classes.centerAlign].join(" ")}>
          <div className={classes.money}>&#8377;7000</div>
        </div>
      );
      position = <div className={classes.position}> 1st RUNNER UP </div>;
      break;

    default:
      WinnerElement = "Error";
      break;
  }
  return (
    <div>
      {WinnerElement}
      {position}
    </div>
  );
};

export default PrizeWinner;
