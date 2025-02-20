import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import Popup from "./components/Popup";
import Notification from "./components/Notification";
import { showNotification as show } from "./Helpers";

import "./App.css";

const words = [
  "application",
  "programming",
  "interface",
  "wizard",
  "engineer",
  "technology",
  "javascript",
  "backend",
  "frontend",
  "software",
  "coding",
  "bootcamp",
  "developer",
  "debugging",
  "deploy",
  "project",
];
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  //State variables
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    //Event listener for keyboard input
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          //Correct letter entered
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            //Show notification if the letter has already been entered
            show(setShowNotification);
          }
        } else {
          //Wrong letter entered
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            //Show notification if the letter has already been entered
            show(setShowNotification);
          }
        }
      }
    };
    //Add event listener for keyboard input
    window.addEventListener("keydown", handleKeydown);

    //Cleanup: Remove event listener when the component is unmounted
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  //Function to start a new game
  function playAgain() {
    setPlayable(true);

    //Reset arrays for correct and wrong letters
    setCorrectLetters([]);
    setWrongLetters([]);

    //Select a new random word
    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  return (
    <>
      {/* Game header */}
      <Header />
      {/* Main game container */}
      <div className="game-container">
        {/* Hangman figure */}
        <Figure wrongLetters={wrongLetters} />
        {/* Display wrong letters */}
        <WrongLetters wrongLetters={wrongLetters} />
        {/* Display the word with correct letters filled in */}
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      {/* Popup for win/lose messages and play again button */}
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      {/* Notification for repeated letter entry */}
      <Notification showNotification={showNotification} />
    </>
  );
}

export default App;
