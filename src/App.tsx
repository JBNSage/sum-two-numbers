import { createRef, useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState<number | undefined>();
  const firstNumber = createRef<HTMLInputElement>();
  const secondNumber = createRef<HTMLInputElement>();

  const sumNumbers = () => {
    const firstNumberValue: number = firstNumber.current?.value
      ? parseInt(firstNumber.current?.value)
      : 0;
    const secondNumberValue: number = secondNumber.current?.value
      ? parseInt(secondNumber.current?.value)
      : 0;

    const resultTMP = firstNumberValue + secondNumberValue;

    setResult(resultTMP);
  };

  return (
    <div className="App container p-5">
      <h1>Suma de dos números</h1>
      <form action="">
        <div className="row">
          <div className="col">
            <input
              onChange={sumNumbers}
              ref={firstNumber}
              type="number"
              className="form-control"
            />
          </div>
          <div className="col-auto">
            <span>+</span>
          </div>
          <div className="col">
            <input
              onChange={sumNumbers}
              ref={secondNumber}
              type="number"
              className="form-control"
            />
          </div>
          <div className="col-auto">
            <span> = </span>
          </div>
          <div className="col-auto">
            <input
              type="text"
              className="form-control"
              disabled
              value={result}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
