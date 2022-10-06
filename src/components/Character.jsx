
import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'


export default function Character({ character }) {

    return (
        <div className='text-center p-5 fadein'>
            <h2>{character.name}</h2>

            <img className='img-fluid rounded-pill' src={character.image}
                alt={character.name} />

            <Link to={`/character/${character.id}`}>
                More...
            </Link>

        </div>
    );
}

