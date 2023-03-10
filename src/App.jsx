import React, { createContext, useContext } from 'react';
import { History } from './components/History';
import { Navbar } from './components/Navbar';
import { Outlet } from './components/Outlet';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <>
      <Navbar />
      <div style={{ maxHeight:'91vh', overflowY:'scroll'}}>
        <Outlet />
        <History />
        <Footer />
      </div>
    </>
  )
}

