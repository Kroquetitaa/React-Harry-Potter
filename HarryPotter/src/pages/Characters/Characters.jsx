import React, { useContext } from 'react'
import CharacterPortrait from '../../components/CharacterPortrait/CharacterPortrait';
import { HarryPotterContext } from '../../context/context';
import './Characters.css'

const Characters = () => {

    const { characters } = useContext( HarryPotterContext );

  return (
    <section className='characters'>
        <h3>Personajes</h3>
        <div className='gallery'>
            { characters.length > 0 ? characters.map( character => <CharacterPortrait character={ character } key={ character.id }/>  ) : <p>Loading...</p> }
        </div>
    </section>
  )
}

export default Characters