import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import SherbimetPage from './pages/SherbimetPage'
import ProduktetPage from './pages/ProduktetPage'
import GaleriPage from './pages/GaleriPage'
import KontaktPage from './pages/KontaktPage'

export default function App() {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' })
        const pageTitles = {
            '/': 'Electronic Albania | Kamera CCTV, Smart Home & Sisteme Sigurie',
            '/sherbimet': 'Shërbimet | Electronic Albania',
            '/produktet': 'Produktet | Electronic Albania',
            '/galeri': 'Galeria e Projekteve | Electronic Albania',
            '/kontakt': 'Kontakt | Electronic Albania',
        }
        document.title = pageTitles[location.pathname] || pageTitles['/']
    }, [location.pathname])

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/sherbimet" element={<SherbimetPage />} />
                <Route path="/produktet" element={<ProduktetPage />} />
                <Route path="/galeri" element={<GaleriPage />} />
                <Route path="/kontakt" element={<KontaktPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Footer />
        </>
    )
}
