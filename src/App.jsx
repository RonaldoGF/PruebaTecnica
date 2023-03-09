import React, { createContext, useContext } from 'react';
import { Navbar } from './components/Navbar';
import { Outlet } from './components/Outlet';

export const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

