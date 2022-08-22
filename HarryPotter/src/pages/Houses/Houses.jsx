import React from 'react'
import HousesPortrait from '../../components/HousesPortrait/HousesPortrait.jsx';
import './Houses.css'

const Houses = () => {
  return (
    <section className='houses'>
    <h3>Casas</h3>
    <div className='gallery'>
        <HousesPortrait />
    </div>
</section>
  )
}

export default Houses