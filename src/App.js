import React from 'react'
import "./App.css"
import { useSelector,useDispatch } from "react-redux";
import{incNumber,decNumber} from "./actions/index";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber.counter);
  const Dispatch = useDispatch();
  return(
    <>
    <div className="container">
    <h1>Increment/Decrement Counter</h1>
    <h4>Using React and Redux</h4>
 
    <div className="quantity">
      <a className="quantity_minus" title="Decrement"
      onClick={ () => Dispatch(decNumber()) }><button> - </button></a>
      <input type='text' value={myState}/>
      <a className="quantity_plus" title="Increment"
      onClick={ () => Dispatch(incNumber()) }><button>+</button></a>
    </div>
    </div>
    </>
  )
}

export default App