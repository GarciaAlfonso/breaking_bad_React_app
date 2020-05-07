import React from 'react';
import styled from '@emotion/styled';

const ContenedorFrase = styled.div `
    padding: 1.5rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width: 800px;
    margin-top: 14rem;
    @media(max-width: 768px){
        margin: 0 10px .5rem 10px;
    }

    h1{
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 3.5rem;

        &::before {
            content: open-quote;
            font-size: 8rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
        @media(max-width:768px){
            font-size:20px;
        }
    }
    p{
        font-family:Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1rem;
        text-align: right;
        color:#666;
        margin-top: 2rem;
    }
`;

const Frase = ({frase}) => {

    //Oculta el campo de frase mientras no haya respondido la api
    if(Object.keys(frase).length === 0) return null; 

    const {quote, author} = frase;
     
    return(
        <ContenedorFrase>
            <h1>{quote}</h1>
            <p>-{author}</p>
        </ContenedorFrase>
    );
}

export default Frase;