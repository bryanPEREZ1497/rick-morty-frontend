import React, { useEffect, useState } from 'react'
import CharacterList from "./components/CharacterList";
import { Navbar } from './components/Navbar';
import AppRouter from './router/AppRouter';
export default function App() {


  return (
    <div className='bg-dark text-white'>
      <Navbar/>
      <h1 className='text-center py-4 display-1'>Rick and Morty</h1>
      <AppRouter />
    </div>
  )
}
