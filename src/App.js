import React from "react";
import { uiActions } from "./store/ui-slice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { txtActions } from "./store/text-slice";
import { qcActions } from "./store/qc-slice";

function App() {
  const [enteredTextWho, setEnteredTextWho] = useState("");
  const [enteredTextWhat, setEnteredTextWhat] = useState("");
  const [enteredTextWhen, setEnteredTextWhen] = useState("");
  const [enteredTextWhere, setEnteredTextWhere] = useState("");

  const dispatch = useDispatch();

  const showQuestions = useSelector((state) => state.ui.questionIsVisible);
  const showWho= useSelector((state)=> state.qc.qcWhoIsVis);
  const showWhat= useSelector((state)=> state.qc.qcWhatIsVis);
  const showWhen= useSelector((state)=> state.qc.qcWhenIsVis);
  const showWhere= useSelector((state)=> state.qc.qcWhereIsVis);

  const togggle = () => {
    dispatch(uiActions.toggle());
  };
  
  const getNextQ=()=>{
    dispatch(qcActions.next());
  };

  const getPrevQ=()=>{
dispatch(qcActions.prev());
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(
      txtActions.textSave({
        Who: enteredTextWho,
        What: enteredTextWhat,
        When: enteredTextWhen,
        where: enteredTextWhere,
      })
    );
    dispatch(uiActions.toggle());
    setEnteredTextWho("");
    setEnteredTextWhat("");
    setEnteredTextWhen("");
    setEnteredTextWhere("");
  };

  const inputChangeHandlerWho = (event) => {
    setEnteredTextWho(event.target.value);
  };

  const inputChangeHandlerWhat = (event) => {
    setEnteredTextWhat(event.target.value);
  };

  const inputChangeHandlerWhen = (event) => {
    setEnteredTextWhen(event.target.value);
  };

  const inputChangeHandlerWhere = (event) => {
    setEnteredTextWhere(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      {showQuestions &&
        <div>
          {showWho && <div><label>Who?</label>
          <input
            id="who"
            type="text"
            value={enteredTextWho}
            onChange={inputChangeHandlerWho}
          /></div>}
          {showWhat && <div><label>What?</label>
          <input
            id="what"
            type="text"
            value={enteredTextWhat}
            onChange={inputChangeHandlerWhat}
          /></div>}
          {showWhen && <div><label>When?</label>
          <input
            id="when"
            type="text"
            value={enteredTextWhen}
            onChange={inputChangeHandlerWhen}
          /></div>}
          {showWhere && <div><label>Where?</label>
          <input
            id="where"
            type="text"
            value={enteredTextWhere}
            onChange={inputChangeHandlerWhere}
          /></div>}
          <button onClick={getPrevQ}>Prev</button>
          <button onClick={getNextQ}>Next</button>
          <button type="submit">Submit</button>
        </div>
      }
      {!showQuestions && (
        <div>
          <label>{}</label>
          <button onClick={togggle}>New sentens</button>
        </div>
      )}
    </form>
  );
}

export default App;
