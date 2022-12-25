import { number } from 'prop-types';
import React, { useState } from 'react';

function CounterFunction(){

    function increment(){
        setNumber(++number)
    }

    let [number,setNumber] = useState(0)
    return(
        <div>
            <h2>Functional Component</h2>
            <h2>Counter = {number}</h2>
            <button onClick={e=>increment()}>Increase</button>
        </div>
    )
}

export default CounterFunction;