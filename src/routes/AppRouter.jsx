import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import AboutPage from '../pages/About/AboutPage'
import ProductionLinesPage from '../pages/ProductionLines/ProductionLinesPage'
import ProductionLineDetailPage from '../pages/ProductionLines/ProductionLineDetailPage'
import ApplicationsPage from '../pages/Applications/ApplicationsPage'
import ApplicationDetailPage from '../pages/Applications/ApplicationDetailPage'
import ProjectsPage from '../pages/Projects/ProjectsPage'
import ContactPage from '../pages/Contact/ContactPage'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/"                  element={<Home />} />
      <Route path="/about"             element={<AboutPage />} />
      <Route path="/production-lines"  element={<ProductionLinesPage />} />
      <Route path="/production-lines/:slug" element={<ProductionLineDetailPage />} />
      <Route path="/applications"      element={<ApplicationsPage />} />
      <Route path="/applications/:slug" element={<ApplicationDetailPage />} />
      <Route path="/projects"          element={<ProjectsPage />} />
      <Route path="/contact"           element={<ContactPage />} />
    </Routes>
  )
}
