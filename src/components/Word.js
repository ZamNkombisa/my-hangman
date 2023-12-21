import React from "react";

const Word = ({ selectedWord, correctLetters }) => {
  return (
    <div className="word">
      {/* Map through each letter of the selected word */}
      {selectedWord.split("").map((letter, i) => {
        return (
          //Display each letter as a span with a "letter" class
          <span className="letter" key={i}>
            {/* Display the letter if it has been correctly guessed, otherwise display an empty string */}
            {correctLetters.includes(letter) ? letter : ""}
          </span>
        );
      })}
    </div>
  );
};

export default Word;
