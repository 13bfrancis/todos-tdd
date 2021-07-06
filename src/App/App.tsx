import styles from "App/App.module.css";
import { useState } from "react";
function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <header className={styles.testStyle}>
        <h1>Todo App</h1>
        {show && <div>some text</div>}
        <button onClick={() => setShow(!show)}>click</button>
      </header>
    </>
  );
}

export default App;
