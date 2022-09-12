
import React, { useEffect, useState } from 'react'
import Character from "./Character";

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

  useEffect(() => {
    async function fetchData() {
      let response = await fetch('https://rickandmortyapi.com/api/character/?page=' + page);
      response = await response.json();
      setLoading(false);
      setCharacters(response.results);
    }
    fetchData();
  }, [page]);

  return (
    <div className='container'>
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
