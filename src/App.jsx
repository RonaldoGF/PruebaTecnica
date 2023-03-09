import React, { createContext, useContext } from 'react';
import { History } from './components/History';
import { Navbar } from './components/Navbar';
import { Outlet } from './components/Outlet';

export const App = () => {
  return (
    <>
      <Navbar />
      <div style={{ maxHeight:'100vh', overflowY:'scroll'}}>
        <Outlet />
        <History />
      </div>
    </>
  )
}

