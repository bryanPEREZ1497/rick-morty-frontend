import React from 'react'
import { Routes, Route, Link, Navigate } from "react-router-dom";
import CharacterList from '../components/CharacterList';
import CharacterPage from '../pages/CharacterPage';
import SearchPage from '../pages/SearchPage';

export default function AppRouter() {
    return (
        <div className='container'>
            <Routes>
                <Route path="list" element={<CharacterList />} />
                <Route path="search" element={<SearchPage />} />
                <Route path="character/:id" element={<CharacterPage />} />
                <Route path="/" element={<Navigate to="/list" />} />
            </Routes>
        </div>
    )
}
