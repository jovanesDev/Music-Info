import React from 'react'
import Error from './Error'

const Artista = ({artist}) => {
    return (
        <div>
            <h1 className="text-center p-3 my-1 bg-success text-light " >Artista</h1>
            { artist=== false || artist === "" ? <Error mensaje="No hay Informacion" /> : null}

            <div className="container my-3">
                <img className="img-fluid" src={artist.strArtistThumb}/>
                <h2 className="text-center mt-5 text-danger d-block">Nombre Completo</h2>
                <h4 className="text-center d-block border border-dark mt-2 py-3">{artist.strArtistAlternate}</h4>
                <h2 className="text-center mt-5 text-danger d-block">Pais</h2>
                <h4 className="text-center d-block border border-dark mt-2 py-3">{artist.strCountry}</h4>
                <h2 className="text-center mt-5 text-danger d-block">Biografia</h2>
                <p className="my-3 py-2">{artist.strBiographyEN}</p>

            </div>
        </div>
    )
}

export default Artista
