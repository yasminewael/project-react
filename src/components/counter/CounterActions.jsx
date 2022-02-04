const CounterActions = (props) => {
    return(
<div className="buttonContainer mt-5">
<button type="button" className="btn btn-warning mx-2 w-25" onClick={props.increament}>+</button>
<button type="button" className="btn btn-warning mx-2 w-25" onClick={props.decrement}>-</button>

</div>
    );
}

export default CounterActions