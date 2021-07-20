import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';


// передача стейта потомкам через пропс

function Child(props) {
    return (
        <span className="counter">{props.number}</span>
    )
}

function Button(props) {
    return (
        <button className="counter-button" onClick={props.onClick}>Click!</button>
    )
}

function Counter () {

    //get start value and setter
    const [count, setCount] = useState(0);

    // define function-setter
    const updateCount = () => {
        //with callback
        // в данном случае передается начальное значение count
        setCount((prevCount) => prevCount+1);
    }
    // hook useEffect
    useEffect(()=>{
        console.log(count)
    }, [count]);
    return (
      <div>
       <Child number = {count}/>
       <Button onClick={updateCount}/>
    
      </div>
    )
}

export default Counter