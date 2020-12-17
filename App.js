import React, { useState } from "react";
import "./styles.css";
const emojiDectionary = {
  "😊": "smilling",
  "🤪": "Zany",
  "😐": "neutral",
  "🥺": "pleading",
  "❤": "love",
  "🧗": "climbing"
};
var emojiHandler = Object.keys(emojiDectionary);
export default function App() {
  const [meaning, setmeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDectionary[userInput];
    if (meaning === undefined) {
      meaning = "We do not have this in our database";
    }
    setmeaning(meaning);
  }
  function emojiclick(emoji) {
    var meaning = emojiDectionary[emoji];
    setmeaning(meaning);
  }
  return (
    <div className="App">
      <h1>input outt!</h1>
      <input onChange={emojiInputHandler}></input>
      <h2>{meaning}</h2>
      <h3>We Know</h3>
      {emojiHandler.map(function (emoji) {
        return (
          <span
            onClick={() => emojiclick(emoji)}
            key={emoji}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
