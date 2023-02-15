import React, { useState } from "react";
import "./styles.css";

const emojiPedia = {
  "😊": "Smiling Face with Smiling Eyes",
  "🤦‍♂️": "Man Facepalmn",
  "😒": "Unamused Face",
  "🥹": "Face Holding Back Tears",
  "🫶": "Heart Hands",
  "😉": "Winking Face",
  "🫡": "Saluting Face"
};
var emojiList = Object.keys(emojiPedia);
export default function App() {
  var [meaning, setUserInput] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiPedia[userInput];
    // console.log(meaning);
    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setUserInput(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiPedia[emoji];
    // console.log(meaning);
    setUserInput(meaning);
  }
  return (
    <div className="App">
      <h1>emoji-adda</h1>
      <input onChange={emojiInputHandler}></input>
      <div className="sub-header">translation will appear here..</div>
      <div className="output">{meaning}</div>
      <h3 className="emoji-header">emoji's we have</h3>
      {emojiList.map(function (emoji) {
        return (
          <span key={emoji} onClick={() => emojiClickHandler(emoji)}>
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
