import React from 'react'
import Card from '../Components/Card';
import { Characters } from '../models/Characters'

const MenScreen = () => {

  const men = Characters.filter(character => character.type === "h" );


  return (
    <div className='container mt-3'>
      

        <h1>Men Screen</h1>
        <hr />
        <div className='row'> 
        {
          men.map(man => (
            <Card key={man.id} {...man} />
          ))
        }
        </div>

    </div>
  )
}

export default MenScreen