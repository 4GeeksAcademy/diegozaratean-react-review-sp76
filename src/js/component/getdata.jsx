import React, { useEffect, useState } from "react";

const Getdata = () => {

    const [ characters , setCharacters ] = useState([])

    let numeros = [1,2,3,4,]

    // traer los pesonajes
    // mostrar pesronajes

    function getCharacters(){
        console.log('getCharacters')
        fetch('https://rickandmortyapi.com/api/character')
        .then( (response)=> response.json())
        // .then( (data)=> console.log(data.results))
        .then( (data)=> setCharacters(data.results))
    }

    useEffect( ()=>{
        console.log('se cargo componente')
        getCharacters()
    },[])

	return (
			<>
                <h1>Getdata</h1>
                {/* {characters} */}
                {characters.map( (personaje)=> <p key={personaje.id}> 
                    {personaje.name} 
                    <img src={personaje.image} alt="" />

                </p>  )}
            </>
	);
};

export default Getdata;
