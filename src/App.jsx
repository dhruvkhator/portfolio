import styles from "./App.module.css"
import { Proposal } from "./components/Proposal/Proposal"
import { About } from "./components/About/About"
import { Timeline } from "./components/Timeline/Timeline"
import { Final } from "./components/Final/Final"
import { Asking } from "./components/Asking/Asking"


function App() {
 return (
  <div className={styles.App}>
     <Proposal />
     <About />
     <Timeline />
     <Final />
     <Asking />
    </div>
 )

  
}

export default App
