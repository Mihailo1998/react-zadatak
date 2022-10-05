import { useDispatch, useSelector } from "react-redux";
import { qcActions } from "../store/qc-slice";
import { txtActions } from "../store/text-slice";
import { uiActions } from "../store/ui-slice";
import styles from "./Output.module.css";

const Output = () => {
  const dispatch = useDispatch();

  const WHO = useSelector((state) => state.txt.Who);
  const WHAT = useSelector((state) => state.txt.What);
  const WHEN = useSelector((state) => state.txt.When);
  const WHERE = useSelector((state) => state.txt.Where);

  const togggle = () => {
    dispatch(uiActions.toggle());
    dispatch(qcActions.reset());
    dispatch(txtActions.resetTxt({
      Who:"",
      What:"",
      When:"",
      where:"",
    }));
  };

  return (
    <p className={styles.par}>
      <label>Your sentens: {WHO} {WHAT} {WHERE} {WHEN}.</label>
      <br></br>
      <br></br>
      <button onClick={togggle} className={styles.button}>
        New sentens
      </button>
    </p>
  );
};

export default Output;
