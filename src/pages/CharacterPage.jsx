import React, { useState, useEffect } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';


export default function characterPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [character, setcharacter] = useState({});

    useEffect(() => {
        async function fetchData() {
            let response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            response = await response.json();
            // setLoading(false);
            setcharacter(response);
        }
        fetchData();
    }, [])

    const onNavigateBack = () => {
        navigate(-1);
    }

    if (!character) {
        return <Navigate to="/list" />
    }

    return (
        <div className='container bg-dark text-white' style={{
        }}>

            <div className="row mt-5">
                <div className="col-4">
                    <img
                        src={character.image}
                        alt={character.name}
                        className="img-fluid rounded-pill"
                    />
                </div>

                <div className="col-8">
                    <h3>{character.name}</h3>
                    <ul className="list-group list-group">
                        <li className="list-group-item bg-dark text-white border border-light"> <b>Gender:</b> {character.gender} </li>
                        <li className="list-group-item bg-dark text-white border border-light"> <b>Species:</b> {character.species} </li>
                        <li className="list-group-item bg-dark text-white border border-light"> <b>Status:</b> {character.status} </li>
                        <li className="list-group-item bg-dark text-white border border-light"> <b>Type:</b> {character.type} </li>
                    </ul>
                    <button
                        className="btn btn-outline-primary mt-3"
                        onClick={onNavigateBack}
                    >
                        Regresar
                    </button>
                </div>
            </div>
        </div>
    )
}