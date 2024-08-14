import React, { useState } from "react";


const Onkey = ()=>{

    const [dudas, setDudas] = useState('como se parte un elefante')

    function oprimioTecla(e){
        console.log('oprimioTecla')
        console.log(e.key)
        console.log(e.keyCode)
        if( e.keyCode == 13){

            console.log('OPRIMISTE ENTER')
        }
    }
    return(
        <>
            <h1>On key down</h1>
            <input type="text" onKeyDown={oprimioTecla} value={dudas} onChange={(e)=> setDudas(e.target.value)} />
        </>

    )
}

export default Onkey