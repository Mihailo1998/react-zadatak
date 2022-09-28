import React, { useState } from "react";

const Input = (props) => {
  const [enteredText, setEnteredText] = useState("");

  const inputChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };
  return (
    <div onSubmit={props.onSubmit}>
      <label>{props.id}?</label>
      <input
        id={props.id}
        type="text"
        value={enteredText}
        onChange={inputChangeHandler}
      />
    </div>
  );
};
export default Input;
