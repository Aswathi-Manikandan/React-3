


import Counter from "./Counter";
import { useState } from "react";

function App() {
 const [state,setState] =useState(false)
  return (
    <div className="App">
       
     <button onClick={()=>setState(!state)}>show/hide</button>
          { state?<Counter/> : null}
    
    </div>
  );
}

export default App;
