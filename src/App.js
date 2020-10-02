import React,{Fragment,useState,useEffect} from 'react';
import Formulario from './components/Formulario'
import axios from 'axios';
import Error from './components/Error';
import Resultado from './components/Resultado';


function App() {


  // State del App.js 

  const [ informacion , guardarInformacion ] = useState({});


  const {artista , cancion} = informacion

  // State de las letras de cancion 

  const [letras , guardarLetras ] = useState({})


  // State de Artista 

  const [artist , guardarArtist] = useState({})



  // uso del useEffect para hacer consulta al Api 

  useEffect (()=>{

    if(Object.keys(informacion).length === 0) return ;
    


    const consultarApiLetras = async () => {

      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2 = ` https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`

      const [ letra , artist] = await Promise.all([

        axios.get(url),
        axios.get(url2)
      ])

      console.log(letra)
      console.log(artist)


      guardarLetras(letra.data.lyrics)
      if( artist.data.artists === null || !artist.data.artists[0] ) return guardarArtist (artist === "")
      guardarArtist(artist.data.artists[0])

      
      
              

      
    }
    consultarApiLetras();

  },[informacion])



  return (
    <Fragment>
      <Formulario
      
      guardarInformacion={guardarInformacion}
      
      
      />

      { letras === "" ? <Error mensaje="No hay Resultado"/> : null }


     

  {Object.keys(letras).length >= 1   ? <Resultado letras={letras} artist={artist}/> : null  }  
  
      
    </Fragment>
  );
}

export default App;
