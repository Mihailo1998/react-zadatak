import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { qcActions } from "../store/qc-slice";
import { txtActions } from "../store/text-slice";
import { uiActions } from "../store/ui-slice";
import ErrorModal from "./ErrorMod";
import styles from "./Input.module.css";

const Input = () => {
  const showWho = useSelector((state) => state.qc.qcWhoIsVis);
  const showWhat = useSelector((state) => state.qc.qcWhatIsVis);
  const showWhen = useSelector((state) => state.qc.qcWhenIsVis);
  const showWhere = useSelector((state) => state.qc.qcWhereIsVis);
  
  const [error, setError] = useState();
  const [enteredTextWho, setEnteredTextWho] = useState("");
  const [enteredTextWhat, setEnteredTextWhat] = useState("");
  const [enteredTextWhen, setEnteredTextWhen] = useState("");
  const [enteredTextWhere, setEnteredTextWhere] = useState("");

  const dispatch = useDispatch();

  const whoChangeHandler = (event) => {
    setEnteredTextWho(event.target.value);
  };

  const whatChangeHandler = (event) => {
    setEnteredTextWhat(event.target.value);
  };

  const whenChangeHandler = (event) => {
    setEnteredTextWhen(event.target.value);
  };

  const whereChangeHandler = (event) => {
    setEnteredTextWhere(event.target.value);
  };
  const getNextQ = (event) => {
    event.preventDefault();
    dispatch(qcActions.next());
  };

  const getPrevQ = (event) => {
    event.preventDefault();
    dispatch(qcActions.prev());
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      enteredTextWho.trim().length === 0 ||
      enteredTextWhat.trim().length === 0 ||
      enteredTextWhen.trim().length === 0 ||
      enteredTextWhere.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please answer all questions!!!",
      });
      return;
    }
    dispatch(
      txtActions.textSave({
        Who:enteredTextWho,
        What:enteredTextWhat,
        When:enteredTextWhen,
        Where:enteredTextWhere
        }
      )
    );
    dispatch(uiActions.toggle());
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form className={styles.form} onSubmit={submitHandler}>
        {showWho && (
          <div>
            <label>Who?</label>
            <input
              type="text"
              onChange={whoChangeHandler}
              value={enteredTextWho}
            />
          </div>
        )}
        {showWhat && (
          <div>
            <label>What?</label>
            <input
              type="text"
              onChange={whatChangeHandler}
              value={enteredTextWhat}
            />
          </div>
        )}
        {showWhen && (
          <div>
            <label>When?</label>
            <input
              type="text"
              onChange={whenChangeHandler}
              value={enteredTextWhen}
            />
          </div>
        )}
        {showWhere && (
          <div>
            <label>Where?</label>
            <input
              type="text"
              onChange={whereChangeHandler}
              value={enteredTextWhere}
            />
          </div>
        )}
        <p className={styles.par}>
          {!showWho && (
            <button onClick={getPrevQ} className={styles.butonnavi}>
              Previous question
            </button>
          )}
          {!showWhere && (
            <button onClick={getNextQ} className={styles.butonnavi}>
              Next question
            </button>
          )}
          <br></br>
          <br></br>
          <button type="Submit" className={styles.button}>
            Submit
          </button>
        </p>
      </form>
    </div>
  );
};

export default Input;
