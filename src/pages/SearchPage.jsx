import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'
import SearchResults from '../components/SearchResults';
import { useEffect } from 'react';

export default function SearchPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);
    const [name, setName] = useState('')
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        if (q.length > 0) {
            setName(q);
            fetchData(q);
        }
    }, [])

    function handleClick() {
        if (name.length !== 0) {
            navigate(`?q=${name}`);
            fetchData(name);
        }
        else {
            alert('Please enter a name')
        }
    }

    async function fetchData(query) {
        if (query.length > 0) {
            let response = await fetch(`https://rickandmortyapi.com/api/character/?name=${query}`);
            response = await response.json();
            setCharacters(response.results);
        }
    }

    return (
        <div className='container bg-dark text-white' style={{
            width: '100%',
            height: '100%',
        }}>
            {/* <h1 className='text-center py-4 display-1'>Search Character</h1> */}
            <div className='row'>
                <div className="col-3">
                    <h4>Searching</h4>
                    <hr />
                    {/* <input type="text"
                        className='form-control'
                        value={name}
                        onChange={
                            (e) => {
                                setName(e.target.value);
                            }
                        } /> 
                    <button className='btn btn-primary btn-sm'
                        onClick={handleClick}>Search</button> */}
                    <div class="input-group mb-3">
                        <input
                            type="text"
                            aria-describedby="button-addon2"
                            className='form-control'
                            value={name}
                            onChange={
                                (e) => {
                                    setName(e.target.value);
                                }
                            } />

                        <button
                            id="button-addon2"
                            type="button"
                            className='btn btn-primary btn-sm'
                            onClick={handleClick}>
                            <span class="material-symbols-outlined">
                                search
                            </span>
                        </button>
                    </div>
                </div>
                <div className='col-9'>
                    <h4 >Results</h4>
                    <hr />
                    <SearchResults characters={characters} />
                </div>
            </div>
        </div>
    )
}
