import {useState} from 'react';
import CounterAction from "./CounterActions"
import './Counter.css'

const Counter = () => {

    const [counter, setCounter] = useState(0);

    const increament = function (){
        setCounter(counter + 1)
    }

    const decrement = function (){
        if(counter > 0){
            setCounter (counter - 1)
        }
    }


    return(
<>
<div>
    <div className ="w-50 m-auto text-center">
    <h1 className="page-title mt-5">The Counter</h1>    
    <h2 className="mt-5">Counter: <span className="countNumber">{counter}</span></h2>
    <CounterAction increament={increament} decrement={decrement}/>
    </div>
</div>

</>
    );
}
export default Counter;
