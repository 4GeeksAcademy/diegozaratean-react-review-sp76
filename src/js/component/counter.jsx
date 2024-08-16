import React, { useState, useEffect } from "react";

const Counter = () => {
    const [ count, setCount] = useState(0)
    const [ decrease, setDecrease] = useState(20)

    // useEffect(funcion callback que debo hacer ,[a quien debeo ver] )
    useEffect( ()=>{
        console.log('cambio count')
    },[count])

    useEffect( ()=>{
        console.log('cambio decrease')
    },[decrease])


    useEffect( ()=>{
        console.log('cambio count o camio decrease')
    },[count,decrease])

    useEffect( ()=>{
        console.log('no se cuando se ejecuta')
    },[])


    function suma(){
        console.log('suma')
        setCount( count + 1)
    }
    function resta(){
        console.log('resta')
        setDecrease( decrease - 1)
    }
	return (
			<>
                <h1>Counter</h1>
                <p>{count}</p>                    
                <button onClick={suma}>sumar</button>
                <p>{decrease}</p>                    
                <button onClick={resta}>restar</button>

            
            </>
	);
};

export default Counter;
