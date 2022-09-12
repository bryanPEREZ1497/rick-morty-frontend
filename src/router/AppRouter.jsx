import React from 'react'
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Character from '../components/Character';
import CharacterList from '../components/CharacterList';

export default function AppRouter() {
    return (
        <>
            <Routes>
                <Route path="list" element={<CharacterList />} />
                <Route path="character/:id" element={<Character />} />
                {/* <Route path="/" element={<Navigate to="/list" />} /> */}
                <Route path="/" element={<Navigate to="/list" />} />
                {/* <Route path="/" element={<Home />} /> */}
            </Routes>
        </>
    )
}
