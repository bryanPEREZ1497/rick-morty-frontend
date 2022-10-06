
import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import '../App.css'


export default function Character({ character }) {

    return (
        <div className='text-center p-5 fadein'>
            <div className='title' onClick={(e) => {
                navigator.clipboard.writeText(character.name)
            }}>
                <h2>{character.name}</h2>
            </div>

            <img className='img-fluid borderradius' src={character.image}
                alt={character.name} />

            <Link to={`/character/${character.id}`}>
                More...
            </Link>

        </div>
    );
}

