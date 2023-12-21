import React from "react";

const WrongLetters = ({ wrongLetters }) => {
  return (
    <div className="wrong-letters-container">
      <div>
        {/* Display "Wrong" only if there are wrong letters */}
        {wrongLetters.length > 0 && <p>Wrong</p>}
        {/* Display the wrong letters separated by commas */}
        {wrongLetters
          .map((letter, i) => <span key={i}>{letter}</span>)
          .reduce(
            //Use reduce to add commas between the wrong letters
            (prev, curr) => (prev === null ? [curr] : [prev, ", ", curr]),
            null
          )}
      </div>
    </div>
  );
};

export default WrongLetters;
