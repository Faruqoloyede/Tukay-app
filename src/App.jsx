import { styles } from "./style";
import {Navbar, Features, Footer, Testimonial, Main, Getstarted,} from "./components"

function App() {
  return (
    <div className="bg-secondary overflow-hidden w-full">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
