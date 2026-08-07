import React, { lazy, Suspense } from 'react'
import { useRoutes, Outlet, Navigate } from 'react-router-dom'
import { LANG_CODES } from '../i18n/langRoutes'
import { ROUTE_IMPORTS } from './routeImports'

const Home = lazy(ROUTE_IMPORTS['/'])
const AboutPage = lazy(ROUTE_IMPORTS['/about'])
const ProductionLinesPage = lazy(ROUTE_IMPORTS['/production-lines'])
const ProductionLineDetailPage = lazy(() => import('../pages/ProductionLines/ProductionLineDetailPage'))
const ApplicationsPage = lazy(ROUTE_IMPORTS['/applications'])
const ApplicationDetailPage = lazy(() => import('../pages/Applications/ApplicationDetailPage'))
const ProjectsPage = lazy(ROUTE_IMPORTS['/projects'])
const ContactPage = lazy(ROUTE_IMPORTS['/contact'])

function pageChildren() {
  return [
    { index: true, element: <Home /> },
    { path: 'about', element: <AboutPage /> },
    { path: 'production-lines', element: <ProductionLinesPage /> },
    { path: 'production-lines/:slug', element: <ProductionLineDetailPage /> },
    { path: 'applications', element: <ApplicationsPage /> },
    { path: 'applications/:slug', element: <ApplicationDetailPage /> },
    { path: 'projects', element: <ProjectsPage /> },
    { path: 'contact', element: <ContactPage /> },
  ]
}

export default function AppRouter() {
  const routeConfig = [
    { path: '/', element: <Outlet />, children: pageChildren() },
    ...LANG_CODES.map((lang) => ({ path: `/${lang}`, element: <Outlet />, children: pageChildren() })),
    { path: '*', element: <Navigate to="/" replace /> },
  ]
  const element = useRoutes(routeConfig)

  return <Suspense fallback={null}>{element}</Suspense>
}
