import React from "react";
import { uiActions } from "./store/ui-slice";
import { useDispatch, useSelector } from "react-redux";
import { txtActions } from "./store/text-slice";
import { qcActions } from "./store/qc-slice";
import Input from "./components/Input";

function App() {
  const dispatch = useDispatch();

  const showQuestions = useSelector((state) => state.ui.questionIsVisible);
  const showWho = useSelector((state) => state.qc.qcWhoIsVis);
  const showWhat = useSelector((state) => state.qc.qcWhatIsVis);
  const showWhen = useSelector((state) => state.qc.qcWhenIsVis);
  const showWhere = useSelector((state) => state.qc.qcWhereIsVis);



  const togggle = () => {
    dispatch(uiActions.toggle());
    dispatch(qcActions.reset());
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
    dispatch(
      txtActions.textSave({
        
        
      })
    );
    dispatch(uiActions.toggle());
  };

  return (
    <form onSubmit={submitHandler}>
      {showQuestions && (
        <div>
          {showWho && (
            <Input onSubmit={submitHandler} id="Who"></Input>
          )}
          {showWhat && (
            <Input onSubmit={submitHandler} id="What"></Input>
          )}
          {showWhen && (
            <Input onSubmit={submitHandler} id="When"></Input>
          )}
          {showWhere && (
            <Input onSubmit={submitHandler} id="Where"></Input>
          )}
          <p>
            {!showWho && <button onClick={getPrevQ}>Prev</button>}
            {!showWhere && <button onClick={getNextQ}>Next</button>}
          </p>
          <button type="submit">Submit</button>
        </div>
      )}
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
