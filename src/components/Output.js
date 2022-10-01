import { useDispatch } from "react-redux";
import { qcActions } from "../store/qc-slice";
import txtSlice, { txtActions } from "../store/text-slice";
import { uiActions } from "../store/ui-slice";
import styles from "./Output.module.css";

const Output = () => {
  console.log(txtSlice.getInitialState());
  const dispatch = useDispatch();
  const togggle = () => {
    dispatch(uiActions.toggle());
    dispatch(qcActions.reset());
    dispatch(txtActions.resetTxt());
  };
  return (
    <p className={styles.par}>
      <label>{}</label>
      <button onClick={togggle} className={styles.button}>
        New sentens
      </button>
    </p>
  );
};

export default Output;
