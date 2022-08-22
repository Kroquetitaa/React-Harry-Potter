import React from 'react'
import './CharacterPortrait.css'
import { Link } from 'react-router-dom'

const CharacterPortrait = ( { character } ) => {
  return (
    <Link to={`/characters/${character.name}`} className='figureCharacter'>
        <figure className='figureCharacter'>
            <img src={ character.image }  alt={ character.name } className='images'/>
            <h3> { character.name }</h3>
        </figure>
    </Link>
  )
}

export default CharacterPortrait