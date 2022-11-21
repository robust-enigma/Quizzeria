import React from "react";

import "../App.css";
import { Questions } from "../Helpers/QuestionBank";
import { useState, useContext } from "react";
import { QuizContext } from "../Helpers/Context";

function Quiz() {
  const { score, setScore, setGameState } = useContext(QuizContext); 
  const [currQuestion, setCurrQuestion] = useState(0); //0th index first question
  const [optionChosen, setOptionChosen] = useState(""); //reference to which option u choose

  const nextQuestion = () => {
    //if u choose the correct option, then score will be implemented
    if (Questions[currQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    //move to next question
    setCurrQuestion(currQuestion + 1);
  };
  
  //called for last question
  const finishQuiz = () => {
    if (Questions[currQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setGameState("EndScreen");
  };

  return (
    <div className="Quiz">
      <h1>{Questions[currQuestion].prompt}</h1>
      <div className="options">
        <button onClick={() => setOptionChosen("A")}>
          {Questions[currQuestion].optionA}
        </button>
        <button onClick={() => setOptionChosen("B")}>
          {Questions[currQuestion].optionB}
        </button>
        <button onClick={() => setOptionChosen("C")}>
          {Questions[currQuestion].optionC}
        </button>
        <button onClick={() => setOptionChosen("D")}>
          {Questions[currQuestion].optionD}
        </button>
      </div>
      //to avoid array out of bounds error, if u encounter last question then go to finishQuiz
      {currQuestion == Questions.length - 1 ? (
        <button onClick={finishQuiz}>Finish Quiz</button>
      ) : (
        <button onClick={nextQuestion}>Next Question</button>
      )}
    </div>
    //call next question function
  );
}

export default Quiz;
