import { useState, lazy, Suspense } from 'react'
import Sidebar from './sidebar-components/Sidebar'
import './App.css'
import { Routes, Route, } from 'react-router-dom'

import Loading from './Loading'
import { ExpandedContextProvider, useExpanded } from './Expanded_context'
import { motion } from 'framer-motion'


const Animations = lazy(() => import('./animation-components/Animation-page'))


export default function App() {
  const { expanded, toggleExpanded } = useExpanded()
  return (

    <div>
      <Sidebar />
      <Suspense fallback={<Loading/>}>
      <motion.div
        initial={false}
        animate={{ width: expanded ? "82.5vw" : "94.5vw", transition: { delay: 0.125 } }}
        className='main-content'>
        
          <Routes>
          {/* <Route path="/" element={}/> */}
          <Route path="/animations" element={<Animations/>} />
        </Routes>
       
        
      </motion.div>
      </Suspense>

    </div>


  )
}