import React from "react";

const Header = () => {
  return (
    <>
      {/* <!-- Game Title --> */}
      <h1>Hangman</h1>
      {/* <!-- Instruction for the Player --> */}
      <p>Find the hidden word - Enter a letter</p>
      <br />
      <p>⭐ Hint!!! All words used in this game are tech-related. ⭐</p>
    </>
  );
};

export default Header;
