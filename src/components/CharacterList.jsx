
import React, { useEffect, useState } from 'react'
import Character from "./Character";
import queryString from 'query-string'
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';


function Paginator({ page, setPage }) {
  return (
    <div
      className='navbar navbar-expand-lg navbar-light d-flex justify-content-between align-items-center'>
      {
        page - 1 > 0
        &&
        <button className='btn btn-primary btn-sm'
          onClick={() => {
            setPage(page - 1)
          }}>
          Page {page - 1}
        </button>
      }
      <p>Current: {page}</p>
      <button className='btn btn-primary btn-sm'
        onClick={() => {
          setPage(page + 1)
        }}>
        Page {page + 1}
      </button>
    </div>
  )
}

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();
  const { p = '1' } = queryString.parse(location.search);

  useEffect(() => {
    if (page === 1) {
      navigate(`?p=${page}`);
      fetchData(1)
    }
    if (page > 1) {
      navigate(`?p=${page}`);
      fetchData(page);
    }
  }, [page]);

  useEffect(
    () => {
      setPage(Number(p));
      fetchData(Number(p));
    }, []
  )

  async function fetchData(query) {
    let response = await fetch('https://rickandmortyapi.com/api/character/?page=' + query);
    response = await response.json();
    setLoading(false);
    setCharacters(response.results);
  }

  return (
    <div className='container'>
      <h1 className='text-center py-4 display-1 slidein'>Rick and Morty</h1>
      <Paginator page={page} setPage={setPage} />
      {
        loading
          ? <h1>Loading ...</h1>
          :
          <div className='row'>
            {characters.map(character => {
              return (
                <div className='col-4' key={character.id}>
                  <Character character={character} />
                </div>
              )
            })}
          </div>
      }
      <Paginator page={page} setPage={setPage} />
    </div>
  )
}
