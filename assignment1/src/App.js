import { Counter } from "./component/Counter";
import styles from "./App.module.css"

function App() {
    //  return <Counter />;
    return(
      <div className={styles.center}>
        <Counter />
      </div>
    )
}
export default App; 

