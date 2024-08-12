import React, { useState } from "react";

const Form = ()=>{
    console.log('este es el componente form')

    const [ name, setName] = useState('Davinia')
    const [ lastname, setLastname] = useState('Rodriguez')

   

    return(
        <>        
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" value={name} onChange={ (e)=>{setName(e.target.value)}} className="form-control" id="name" placeholder="ingresa tu nombre" />
            </div>
            <div className="mb-3">
                <label htmlFor="lastname" className="form-label">Apellido</label>
                <input type="text" value={lastname} onChange={ (e)=>setLastname(e.target.value)  } className="form-control" id="lastname" placeholder="ingresa tu apellido" />
            </div>
            <p>Tu nombre completo es {name} {lastname}</p>
           
        </>
    )
}

export default Form