import React from 'react'
import Header from './src/components/Header';
import Body from './src/components/Body'
import { Outlet } from 'react-router-dom';
const App = () => {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default App;