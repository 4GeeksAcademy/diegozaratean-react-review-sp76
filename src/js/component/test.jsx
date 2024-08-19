import React from "react";

const Test = () => {
    function getTaks(){
        console.log('traer tareas')
        fetch('https://playground.4geeks.com/todo/users/dolores')
        .then( (response)=> response.json() )
        .then( (data)=> console.log(data) )
    }

    function addTaks(){
        console.log('crear tareas')

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "label": "tarea desde react",
                "is_done": false
              })
        };

        fetch('https://playground.4geeks.com/todo/todos/dolores',requestOptions)
        .then( (response)=> response.json() )
        .then( (data)=> console.log(data) )
    }

    function deleteTaks(){
        console.log('eliminar tareas')

        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({})
        };

        fetch('https://playground.4geeks.com/todo/todos/140',requestOptions)
        .then( (data)=> console.log(data) )
    }
	return (
		<>
            <h1>Test</h1>
            <button onClick={getTaks}>Traer tareas</button>
            <button onClick={addTaks}>Crear tareas</button>
            <button onClick={deleteTaks}>Eliminar tarea</button>
        </>
	);
};

export default Test;
