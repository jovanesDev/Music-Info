import React from 'react'
import Artista from './Artista'
import Cancion from './Cancion'



const Resultado = ({letras , artist}) => {
    return (
        <div className="container-fluid">


        <div className="row">
    
                <div className="col-md-6">
                        <Artista
                                artist={artist}
                        />
                </div>
            
            
                <div className="col-md-6">
                    <Cancion
                            letras={letras}
                    
                    />
                </div>
            
    
        </div>
    
    
        </div>
    )
}

export default Resultado
