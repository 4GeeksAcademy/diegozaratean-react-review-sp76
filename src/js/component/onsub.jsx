import React, { useState } from "react";


const Onsub = ()=>{

    const [dudas, setDudas] = useState('')

    function envie(e){
        e.preventDefault();
        console.log('envie')
        console.log('OPRIMISTE ENTER')
        setDudas('')
    }
   
    return(
        <>
            <h1>On Submmit</h1>
            <form onSubmit={envie}>
                <input type="text"  value={dudas} onChange={(e)=> setDudas(e.target.value)} />
            </form>
        </>

    )
}

export default Onsub