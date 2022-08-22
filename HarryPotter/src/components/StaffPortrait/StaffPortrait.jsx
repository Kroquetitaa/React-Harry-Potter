import React from 'react'
import { Link } from 'react-router-dom'

const StaffPortrait = ( { teacher } ) => {
  return (
    <Link to={`/characters/staff/${teacher.name}`} className='figureCharacter'>
        <figure className='figureCharacter'>
            <img src={ teacher.image }  alt={ teacher.name } className='images'/>
            <h3> { teacher.name }</h3>
        </figure>
    </Link>
  )
}

export default StaffPortrait