import React, { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar';
import AppRouter from './router/AppRouter';
export default function App() {


  return (
    <div className='bg-dark text-white'>
      <Navbar/>
      <AppRouter />
    </div>
  )
}
