import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/login.tsx'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
