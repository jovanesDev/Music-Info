import React,{useState} from 'react'
import Error from './Error'

const Formulario = ({guardarInformacion}) => {

// State para Formulario 

const [busqueda , guardarBusqueda] = useState({

    artista:"",
    cancion:""
})

// State de Error para una validacion Agil 

const [error , guardarError ] = useState(false)


// Extraer los datos del State 

const {artista , cancion } = busqueda


// funcion de handleChange para inputs

const handleChange = e => {

    guardarBusqueda({
        ...busqueda,
        [e.target.name]:e.target.value
    })

}

//funcion de handleSumit del form 

const handleSubmit = e => {

    e.preventDefault();

    if (artista.trim()==="" || cancion.trim() === "") {
        
        guardarError(true)
        return;
    }


    guardarError(false)

    // enviando los datos al componente principal
    guardarInformacion(busqueda);


}


    return (
        <div className="bg-primary">

            <div className="container">

                <div className="row">

                    <form className="col card text-white bg-transparent mb-5 pt-5 pb-2" onSubmit={handleSubmit}>

                        <fieldset>

                                        <div className="row ">
                                        <legend className="mx-auto">Buscador Letras de Canciones</legend>
                                        </div>
                            
                            {error ? <Error mensaje="Todos los campos son obligatorios"/> : null}

                                    <div className="row">

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Artista</label>
                                                <input
                                                    type="text"
                                                    className="form-control form-control-lg"
                                                    name="artista"
                                                    placeholder="Nombre de Artista"
                                                    value={artista}
                                                    onChange={handleChange}
                                                
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">

                                            <div className="form-group">
                                                <label>Cancion</label>
                                                <input
                                                    type="text"
                                                    className="form-control form-control-lg"
                                                    name="cancion"
                                                    placeholder="Cancion"
                                                    value={cancion}
                                                    onChange={handleChange}
                                                
                                                />
                                            </div>

                                            

                                        </div>
                                        

                                    </div>


                                    <button className="btn btn-lg btn-warning  px-5 float-right" type="submit">Buscar</button>                           

                        </fieldset>

                        

                    </form>

                </div>
            </div>
            
        </div>
    )
}

export default Formulario
