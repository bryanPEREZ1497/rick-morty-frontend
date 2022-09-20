
import React, { useEffect, useState } from 'react'
import Character from "./Character";

export default function SearchResults({ characters }) {
    return (
        <div className='container'>
            <div className='row'>
                {
                    characters &&
                    characters.map(character => {
                        return (
                            <div className='col-6' key={character.id}>
                                <Character character={character} />
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}
