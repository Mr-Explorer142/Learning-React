import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";
import "./App.css";

function App() {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "X",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <>
      <div className="outer_div d-flex justify-content-center mt-5">
        <div className="calculator px-5 overflow-hidden border border-3 w-75 md-w-25 d-flex flex-column justify-content-center gap-3 rounded-2">
          <Display></Display>
          <div className="buttons_container mb-4 p-4 rounded d-flex row justify-content-center align-content-center gap-3 flex-wrap">
            <ButtonsContainer buttonNames={buttonNames}></ButtonsContainer>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
