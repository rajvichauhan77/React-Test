import { useState } from 'react'
import Navbar from './components/Navbar'
import RoomDetail from './components/RoomDetail'
import {  Route, Routes } from 'react-router-dom'
import Room from './components/Room'
import Register from './components/Register'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      {/* <RoomDetail/> */}

      <Routes>
        <Route path="/"  element={ <RoomDetail/>} />
        <Route path="/room/:rid"  element={<Room/>} />

        <Route path="/room/:rid/register"  element={ <Register/>} />
        
      </Routes>
    </>
  )
}

export default App
