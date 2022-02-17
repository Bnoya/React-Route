import React from 'react'
import Card from '../Components/Card';
import { Characters } from '../models/Characters';

const WomenScreen = () => {
    const women = Characters.filter(character => character.type === "m" );
    return (
        <div>
            <h1>Women Screen</h1>
        <hr />
        <div className='row'> 
            {
            women.map(woman => (
                <Card key={woman.id} {...woman} />
            ))
            }
        </div>
        </div>
    )
}

export default WomenScreen;
