import { useState } from 'react'
import Sidebar from './components/sidebar'
import './App.css'
import { Routes, Route} from 'react-router-dom'

export default function App() {
  

  return(
    <div>
      <Sidebar/>
      <div className='big'></div>
      <Routes>
        <Route />
      </Routes>
    </div>
  )
}