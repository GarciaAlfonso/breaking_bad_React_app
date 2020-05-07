import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase'

const Contenedor = styled.div `
   display: flex;
   align-items: center;
   padding-top: 4rem;
   flex-direction: column;
  `;

const Boton = styled.button `
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 30%, #0f574e 70%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  margin-bottom: 10px;
  padding: 1rem 3rem;
  font-size: 1.4rem;
  border: 2px solid black;
  outline: none;
  transition: background-size .8s ease, border .8s ease;
  @media(max-width:768px){
    font-size: 1rem;
    margin-top: 2rem;
  }

  :hover {
    cursor: pointer;
    background-size:400px;
    
  }
`;

function App() {

  const [frase, setFrase] = useState({});

  /* const consultarAPI = () => {
    
    //Consultando la API con Fetch y .then() -- Promises
    // const api = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    // const frase = api.then(respuesta => respuesta.json());
    // frase.then(resultado => console.log(resultado));

  }; */
  
  //consultando la API con async y await
  const consultarAPI = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json();
    setFrase(frase[0]);
  }

  //Cargar una Frase al iniciar la pagina

  useEffect(() => {
    consultarAPI();
  }, []);

  return (
    <Contenedor>

      <Frase
        frase={frase}
      />
      <Boton
        onClick={consultarAPI}
      >
        Obtener Frase
      </Boton>
    </Contenedor>  
  );
}

export default App;
