
import React from 'react'
import Character from "./Character";

export default function SearchResults({ characters }) {
    return (
        <div className='container'>
            <div className='row'>
                {
                    characters &&
                    characters.map(character => {
                        return (
                            <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12' key={character.id}>
                                <Character character={character} />
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}
