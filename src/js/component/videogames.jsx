import React, { useState } from "react";

const Videogames = ()=>{
    console.log('comopmnente videogames')
    const [ games, setGames] = useState(['Zelda','Monkey island','MarioKart','Pug','Uncharted','Zelda'])
    const [ texto, setTexto] = useState('esta es una variable con memoria')
    return(
        <>
            <h1>VideoGames</h1>
            {texto}
            <div>
                {games[0]}
                {games[1]}
                {games[2]}
                {games}
                {games.map( (game, index)=> <p key={index} id={game}> {game} {index}</p> )}
            </div>
        </>
    )
}

export default Videogames
