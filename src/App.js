
import { useSelector } from "react-redux";
import Input from "./components/Input";
import Output from "./components/Output";
import styles from "./App.module.css";

function App() {
  const showQuestions = useSelector((state) => state.ui.questionIsVisible);

  return (
    <div className={styles.forms}>
      {showQuestions && <Input></Input>}
      {!showQuestions && <Output></Output>}
    </div>
  );
}

export default App;
