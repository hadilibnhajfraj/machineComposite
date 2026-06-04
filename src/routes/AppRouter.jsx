import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import AboutPage from '../pages/About/AboutPage'
import ProductionLinesPage from '../pages/ProductionLines/ProductionLinesPage'
import ApplicationsPage from '../pages/Applications/ApplicationsPage'
import ProductsPage from '../pages/Products/ProductsPage'
import ProjectsPage from '../pages/Projects/ProjectsPage'
import ContactPage from '../pages/Contact/ContactPage'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/"                  element={<Home />} />
      <Route path="/about"             element={<AboutPage />} />
      <Route path="/production-lines"  element={<ProductionLinesPage />} />
      <Route path="/applications"      element={<ApplicationsPage />} />
      <Route path="/products"          element={<ProductsPage />} />
      <Route path="/projects"          element={<ProjectsPage />} />
      <Route path="/contact"           element={<ContactPage />} />
    </Routes>
  )
}
