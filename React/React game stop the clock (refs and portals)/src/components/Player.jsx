import React, { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [isName, setIsName] = React.useState("");

  function handleClickName() {
    setIsName(playerName.current.value);
  }

  return (
    <section id="player">
      <h2> Welcome {isName ?? "unknown entity"}</h2>

      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClickName}> Set Name </button>
      </p>
    </section>
  );
}
