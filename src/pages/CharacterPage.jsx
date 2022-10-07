import React, { useState, useEffect } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import CircleIcon from '@mui/icons-material/Circle';

import '../App.css'

const status = {
    Alive: 'green',
    Dead: 'red',
    unknown: 'gray'
}

export default function characterPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [character, setcharacter] = useState({});
    const [episode, setepisode] = useState({});

    useEffect(() => {
        async function fetchCharacter() {
            let response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            response = await response.json();
            setcharacter(response);
            const episodeUrl = response.episode[0];
            let episode = await fetch(episodeUrl);
            episode = await episode.json();
            setepisode(episode);
        }
        fetchCharacter();
    }, [])

    const onNavigateBack = () => {
        navigate(-1);
    }

    if (!character) {
        return <Navigate to="/list" />
    }

    return (
        <div className='container bg-dark text-white fadein' style={{
        }}>

            <div className="row mt-5">
                <div className="col-4">
                    <img
                        src={character.image}
                        alt={character.name}
                        className="img-fluid borderradius"
                        style={{
                            display: 'block',
                            marginBottom: '20px'
                        }}
                    />
                    <h3 style={{
                        display: 'inline-block',
                    }}>{character.name}
                    </h3>
                    <CircleIcon style={
                        {
                            color: status[character.status],
                            fontSize: 10,
                            marginLeft: 9,
                        }
                    } />
                </div>

                <div className="col-8">
                    <ul className="list-group list-group">
                        <li className="list-group-item bg-dark text-white border border-light"> <b>Gender:</b> {character.gender} </li>
                        <li className="list-group-item bg-dark text-white border border-light"> <b>Species:</b> {character.species} </li>
                        <li className="list-group-item bg-dark text-white border border-light"> <b>Status:</b> {character.status} </li>
                        {character.type !== '' && <li className="list-group-item bg-dark text-white border border-light"> <b>Type:</b> {character.type} </li>}
                        <li className="list-group-item bg-dark text-white border border-light"> <b>Origin:</b> {character.origin?.name} </li>
                        <li className="list-group-item bg-dark text-white border border-light"> <b>Last known location:</b> {character.location?.name} </li>
                        <li className="list-group-item bg-dark text-white border border-light"> <b>First seen in:</b> {episode?.name} - {episode?.episode} </li>
                    </ul>
                    <button
                        className="btn btn-outline-primary mt-3"
                        onClick={onNavigateBack}
                    >
                        Back
                    </button>
                </div>
            </div>
        </div>
    )
}