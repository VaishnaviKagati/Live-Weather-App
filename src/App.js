import React from "react";
import './App.css';

import Greet from "./Components/Greet";
import LoadData from "./Components/LoadData";
function App(){
    return(

       <div className="App">
          <h1>Hello... I am React</h1>
         { /*<Greet name="Python" Age="21"/>*/}
          <LoadData/>
       </div>
    );
}
export default App;
