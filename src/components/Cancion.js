import React from 'react'
import Error from './Error';

const Cancion = ({letras}) => {


    //if(letras.length < 1 || letras ===  "") return <Error mensaje="No se Encontro Nada"/>;


    return (
        <div className="border border-black">
            <h1 className="text-center p-3 my-1 bg-success text-light "> Letras</h1>

            <div className="container">
            <p className="letra text-center p-5">{letras}</p>
            </div>
            
        </div>
    )
}

export default Cancion
