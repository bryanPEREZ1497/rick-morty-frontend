import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'
import SearchResults from '../components/SearchResults';
import { useEffect } from 'react';
import Alert from '@mui/material/Alert';

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
    }

    async function fetchData(query) {
        if (query.length > 0) {
            let response = await fetch(`https://rickandmortyapi.com/api/character/?name=${query}`);
            response = await response.json();
            if (response.error) {
                setCharacters([]);
            } else {
                setCharacters(response.results);
            }
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        // handleClick();
    }

    // const showSearch = (name.length === 0);
    const showSearch = name.length === 0;
    const showError = (q.length > 0) && characters.length === 0;

    return (
        <div className='container text-white'>
            <div className='row py-4'>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <h4>Searching</h4>
                    <hr />
                    <form onSubmit={submitHandler}>
                        <div className="input-group mb-3">
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
                                // type="button"
                                className='btn btn-primary btn-sm'
                                onClick={handleClick}>
                                <span className="material-symbols-outlined">
                                    search
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
                <div className='col-xl-9 col-lg-8 col-md-6 col-sm-12'>
                    <h4 >Results</h4>
                    <hr />
                    <div
                        style={{ display: showError ? '' : 'none' }}>
                        <Alert severity="error">No character with <b>{q}</b></Alert>
                    </div>
                    <div
                        style={{ display: showSearch ? '' : 'none' }}>
                        <Alert severity="info">Enter a name</Alert>
                    </div>
                    <SearchResults characters={characters} />
                </div>
            </div>
        </div >
    )
}
