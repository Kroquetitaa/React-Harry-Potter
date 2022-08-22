import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import './CharacterDetail.css'

const CharacterDetail = () => {

    const { name } = useParams();
    
    const [ character, setCharacter ] = useState([]);

    const getCharacter = async() => {
        const api = await axios.get(`http://hp-api.herokuapp.com/api/characters/${name}`);
        setCharacter( api );
    }

    useEffect( () => {
        getCharacter();
    }, []);

  return (
    <figure>
        { character ? ( <>
            <div className='content'>
                <h2 className='content--name'> { character.name } </h2>
                <p className='content--house'>Casa: { character.house }</p>
                <p className='content--colors'>Color de pelo: { character.hairColour } Color de ojos: { character.eyeColour }</p>
                <p className='content--birth'>Año de nacimiento: { character.yearOfBirth } </p>
                <p className='content--date'>Cumpleaños: { character.dateOfBirth } </p>
                <p className='content--wand'>Varita mágica: { character.wand.wood } </p>
                <p className='content--core'>Nucleo: { character.wand.core } </p>
                <p className='content--student'>Estudiante: { (character.hogwartsStudent === true) ? 'Estudiante' : 'Profesor/a' } </p>
                <p className='content--actor'>Actor: { character.actor }</p>
            </div>
        </>) : ( <p>Loading...</p>)}
    </figure>
  )
}


export default CharacterDetail