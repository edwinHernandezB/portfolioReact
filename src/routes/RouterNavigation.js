import React from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import { PortFolioMainPage } from '../pages/PortFolioMainPage'

export const RouterNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortFolioMainPage />} />
      </Routes>
    </BrowserRouter>
  )
}
