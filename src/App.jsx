import { useState } from "react";
import './App.css'
import Moviecard from "./components/moviecard";

function App(){
  return(
    <Moviecard movie={{title:"Meow", releasedate:"12-02-25"}} />
  )
}

export default App;