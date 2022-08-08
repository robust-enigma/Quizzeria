import "./App.css";
import React, { useState, useContext } from "react";
import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";
import { QuizContext } from "./Helpers/Context";

function App() {
  const [gameState, setGameState] = useState("menu");
  //making the above state as global using context api
  const [score, setScore] = useState(0);
  //to set score

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuizContext.Provider
        value={{ gameState, setGameState, score, setScore }}
      >
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "EndScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
    //if gamesate is equal to menu, then mainmenu component is rendered
  );
}

export default App;
