import React, { useState } from "react";

const Cart = (props)=>{

    const [ items, setItems] = useState(parseInt(props.cantidad))
    const [ sum, setSum] = useState(1)

    // console.log(props)
    
    function agregar(){
        console.log('agregar')
        setItems( items + sum)
        //count++ ===> count = count + 1

    }
    return(
        <>
            <div className="text-center">
                <h4 className="text-center mt-5">
                    
                    {items}

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                    </svg>
                </h4>

                <div className="card" style={{width: "18rem"}}>
                    <img src="https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp&w=256" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Aprende React</h5>
                        <p className="card-text">Libro aprende React , en este libro aprenderas sobre componenentes, props y hooks, especialmente el useState.</p>
                        <button  onClick={()=>{
                            if(sum > 1){
                                setSum( sum - 1)
                            }
                            }} >-</button>
                        <input type="number" value={sum} />
                        <button onClick={()=>setSum( sum + 1)} >+</button>
                        <a onClick={()=>agregar()} className="btn btn-primary">Agregar al carrito</a>
                    </div>
                </div>
                <button onClick={ ()=>setItems(0) } className="btn btn-danger">Limpiar carrito</button>

                
            </div>
        </>
    )
}

export default Cart