import "./App.css";
import { useState } from "react";

function App() {
  const [currentPressedButton, setCurrentPressedButton] = useState();
  const [currentCalculation, setCurrentCalculation] = useState(" ");
  const [isFail, setFail] = useState(false); // hook for invalid actions on calculator
  const reset = () => {
    setCurrentCalculation(" ");
    setCurrentPressedButton();
  };
  // if some invalid input is given, this function is gonna reset the isFail hook to false.
  if (isFail) {
    setTimeout(() => {
      setFail(false);
    }, 1000);
  }

  // "e" can be '+ - X / =' or number
  const handleClick = (e) => {
    const recentSymbol = currentPressedButton;

    if (currentCalculation.length > 17) {
      setFail(true);
      setTimeout(() => {
        reset();
      }, 1000);
    }

    if (e === "=") {
      // if equals button has been pressed evaluate the calculation.
      // eslint-disable-next-line no-eval
      setCurrentPressedButton(eval(currentCalculation));
      return;
    }
    if (!Number.isInteger(parseInt(e))) {
      if (e === "+" && recentSymbol === "+") {
        setFail(true);
        setTimeout(() => {
          reset();
        }, 1000);
      }
      if (e === "-" && recentSymbol === "-") {
        setFail(true);
        setTimeout(() => {
          reset();
        }, 1000);
      }
      if ((e === "/" && recentSymbol === "/") || recentSymbol === "*") {
        setFail(true);
        setTimeout(() => {
          reset();
        }, 1000);
      }
      if (
        (e === "." && recentSymbol === ".") ||
        recentSymbol === "-" ||
        recentSymbol === "/"
      ) {
        setFail(true);
        setTimeout(() => {
          reset();
        }, 1000);
      }
      if ((e === "*" && recentSymbol === "/") || recentSymbol === "+") {
        setFail(true);
        setTimeout(() => {
          reset();
        }, 1000);
      }
    }
    // if button is not equals, add the symbol to calculation string.
    setCurrentCalculation(currentCalculation + e);
    if (Number.isInteger(parseInt(e))) {
      // if number is inputted, look if recent symbol is a number. If so diplay them together.
      if (Number.isInteger(parseInt(recentSymbol))) {
        setCurrentPressedButton(recentSymbol + e);
        return;
      }
    }
    if (e === "clear") {
      // if input is Clear, reset everything.
      reset();
      return;
    } else {
      setCurrentPressedButton(e);
    }
  };

  return (
    <div className="App">
      <h2 className="header">JavaScript Calculator</h2>
      <div className="calculator">
        <div id="calculationArea">
          <p id="currentPressedButton">
            {currentPressedButton == null ? "0" : currentPressedButton}
          </p>
          <p id="currentCalculation">
            {isFail ? "INVALID ACTION" : currentCalculation}
          </p>
        </div>
        <button
          id="clear"
          className="operator"
          onClick={() => handleClick("clear")}
        >
          Clear
        </button>
        <button
          id="divide"
          className="operator"
          onClick={() => handleClick("/")}
        >
          /
        </button>
        <button
          id="multiply"
          className="operator"
          onClick={() => handleClick("*")}
        >
          X
        </button>
        <button
          className="numberButton"
          id="seven"
          onClick={() => handleClick("7")}
        >
          7
        </button>
        <button
          className="numberButton"
          id="eight"
          onClick={() => handleClick("8")}
        >
          8
        </button>
        <button
          className="numberButton"
          id="nine"
          onClick={() => handleClick("9")}
        >
          9
        </button>
        <button
          id="minus"
          className="operator"
          onClick={() => handleClick("-")}
        >
          -
        </button>
        <button
          className="numberButton"
          id="four"
          onClick={() => handleClick("4")}
        >
          4
        </button>
        <button
          className="numberButton"
          id="five"
          onClick={() => handleClick("5")}
        >
          5
        </button>
        <button
          className="numberButton"
          id="six"
          onClick={() => handleClick("6")}
        >
          6
        </button>
        <button id="plus" className="operator" onClick={() => handleClick("+")}>
          +
        </button>
        <button
          className="numberButton"
          id="one"
          onClick={() => handleClick("1")}
        >
          1
        </button>
        <button
          className="numberButton"
          id="two"
          onClick={() => handleClick("2")}
        >
          2
        </button>
        <button
          className="numberButton"
          id="three"
          onClick={() => handleClick("3")}
        >
          3
        </button>
        <button
          id="equal"
          className="operator"
          onClick={() => handleClick("=")}
        >
          =
        </button>
        <button id="zero" onClick={() => handleClick("0")}>
          0
        </button>
        <button id="dot" onClick={() => handleClick(".")}>
          .
        </button>
        <span className="spanForBackground1"></span>
        <span className="spanForBackground2"></span>
        <span className="spanForBackground3"></span>
      </div>
      <p className="credit">
        by{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/hasan-ugurlu-6993051b3/"
        >
          Hasan Ugurlu
        </a>
      </p>
    </div>
  );
}

export default App;
