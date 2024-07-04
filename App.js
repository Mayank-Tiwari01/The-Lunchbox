import React from 'react'
import Header from './src/components/Header';
import Body from './src/components/Body'
import { Outlet } from 'react-router-dom';
import ResMenu from './src/components/ResMenu';
import BodyNew from './src/components/Body';
const App = () => {
  return (
    <>
      <Header/>
      {/* <ResMenu/> */}
      <Outlet/>
    </>
  )
}

export default App;