
import React, { useEffect, useState } from 'react'
import Character from "./Character";
import queryString from 'query-string'
import { useLocation, useNavigate } from 'react-router-dom';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Pagination from '@mui/material/Pagination';

// function Paginator({ page, setPage }) {
//   return (
//     <div
//       className='navbar navbar-expand-lg navbar-light d-flex justify-content-between align-items-center'>
//       {
//         page - 1 > 0
//         &&
//         <button className='btn btn-primary btn-sm'
//           onClick={() => {
//             setPage(page - 1)
//           }}>
//           <NavigateBeforeIcon style={{ fontSize: 'medium' }} />
//         </button>
//       }
//       <p>Current Page: {page}</p>
//       <button className='btn btn-primary btn-sm'
//         onClick={() => {
//           setPage(page + 1)
//         }}>
//         <NavigateNextIcon style={{ fontSize: 'medium' }} />
//       </button>
//     </div>
//   )
// }

function Paginator({ count, page, setPage }) {
  function handlePageChange(e, p) {
    setPage(p);
  }

  return (
    <Pagination
      count={count}
      color="primary"
      onChange={handlePageChange}
      page={page}
      size="small"
      showFirstButton
      showLastButton
      sx={{ button: { color: '#ffffff' } }}
    />
  );
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
      <div className='d-flex justify-content-center my-4'>
        <Paginator count={42} page={page} setPage={setPage} />
      </div>
      {
        loading
          ? <h1>Loading ...</h1>
          :
          <div className='row'>
            {characters.map(character => {
              return (
                <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12' key={character.id}>
                  <Character character={character} />
                </div>
              )
            })}
          </div>
      }
      <div className='d-flex justify-content-center my-4'>
        <Paginator count={42} page={page} setPage={setPage} />
      </div>
    </div>
  )
}
