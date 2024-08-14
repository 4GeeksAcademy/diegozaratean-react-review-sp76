import React, { useState } from "react";

const Videogames = ()=>{
    console.log('comopmnente videogames')
    const [ games, setGames] = useState(['Zelda','Monkey island','MarioKart','Pug','Uncharted','Zelda'])    
    const [ texto, setTexto] = useState('esta es una variable con memoria')
    const [ count, setCount] = useState(0)

    function addElement(){
        console.log('addElement')
        let elementos = [1,2,3,4,5]
        console.log(elementos)
        elementos.push(7)
        console.log(elementos)
        console.log(games)
        // games.push('fornite')
        
        console.log(...games)
        setGames(['fortnite',...games])
        //setCount(count + 1)
        //setCount(x).  ======> count = x
        //count++ ====> count = count + 1
        // setCount(count++) ====>  count = count++ =====> count = count = count + 1
        // count =  count + 1 ===> setCount(count + 1)
    }

    return(
        <>
            <h1>VideoGames</h1>
            {texto}
            {count}
            <div>
                {games[0]}
                {games[1]}
                {games[2]}
                {games}
                {games.map( (game, index)=> <p key={index} id={game}> {game} {index}</p> )}
                <button onClick={()=>addElement()}>Add element</button>
            </div>
        </>
    )
}

export default Videogames



// PSEUDOCODIGO
// DONE: agregar un input a la vista html
// DONE: mostrar una array con las tareas
// DONE:crear una funcion que agregue un elmento a un array
// crear una funcion que elimine un elmento a un array
// cuando hago over sobre la tarea mostrar un botn x
// DONE: cuando le doy click a la x ejecutar funcion eliminar elmento
// hacer que graficamente se vea como el diseño
// DONE: poder leeer el valor dle input
// DONE: poder ejecutar una funcion cuando le doy enter dentro dle input
// mostrar el total de la tareas
// carer componente todolist
