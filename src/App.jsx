import { useState } from "react"
import styles from "./App.module.css"
import { Pro } from "./components/Pro/Pro"
import {Timeline} from "./components/Timeline/Timeline"



function App() {
   const [toggle, setToggle] = useState(true)
 return (
   
  <div className={styles.App}>
   {/* <div>
      <button
         onClick={() => setToggle(!toggle)}
         class="btn btn-primary mb-5"
      >Click</button>
   </div>
   {toggle &&(
      <Pro />
   )} */}
   <Pro />
     {/* <Timeline /> */}
    </div>
 )

  
}

export default App
