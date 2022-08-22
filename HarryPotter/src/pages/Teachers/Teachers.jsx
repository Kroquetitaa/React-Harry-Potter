import React,  { useContext }from 'react'
import StaffPortrait from '../../components/StaffPortrait/StaffPortrait.jsx';
import { HarryPotterContext } from '../../context/context';
import './Teachers.css'

const Teachers = () => {

    const { teachers } = useContext( HarryPotterContext );

  return (
    <section className='teacher'>
        <h3>Profesores</h3>
        <div className='gallery'>
            { teachers.length > 0 ? teachers.map( teacher => <StaffPortrait teacher={ teacher } key={ teacher.id} />  ) : <p>Loading...</p> }
        </div>
    </section>
  )
}

export default Teachers