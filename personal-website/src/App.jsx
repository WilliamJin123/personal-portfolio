import { useState } from 'react'
import Sidebar from './sidebar-components/sidebar'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Animations from './animation-components/animation-page'
import { ExpandedContextProvider, useExpanded } from './expanded_context'
import { motion } from 'framer-motion'
export default function App() {
  const { expanded, toggleExpanded } = useExpanded()
  return (

    <div>
      <Sidebar />
      <motion.div
        initial={false}
        animate={{ width: expanded ? "82.5vw" : "94.5vw", transition: { delay: 0.125 } }}
        className='main-content'>
        <Routes>
          {/* <Route path="/" element={}/> */}
          <Route path="/animations" element={<Animations />} />
        </Routes>
      </motion.div>

    </div>


  )
}