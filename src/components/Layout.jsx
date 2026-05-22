import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'

export default function Layout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen relative selection:bg-mamaku-orange selection:text-white">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-md glass' : 'glass'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
              <span className="font-bold text-2xl text-mamaku-brown tracking-tight">Catering<span className="text-mamaku-orange">Mamaku</span></span>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#about" className="text-gray-600 hover:text-mamaku-orange font-medium transition-colors">Tentang Kami</a>
              <a href="#packages" className="text-gray-600 hover:text-mamaku-orange font-medium transition-colors">Paket Catering</a>
              <a href="#gallery" className="text-gray-600 hover:text-mamaku-orange font-medium transition-colors">Galeri Menu</a>
              <a href="#testimonials" className="text-gray-600 hover:text-mamaku-orange font-medium transition-colors">Testimoni</a>
              <a href="https://wa.me/6282310991320" target="_blank" rel="noreferrer" className="bg-mamaku-orange text-white px-6 py-2.5 rounded-full font-semibold hover:bg-amber-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Hubungi Kami
              </a>
            </div>
            {/* Mobile Menu Btn */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-600 hover:text-mamaku-orange">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass border-t border-gray-100 absolute w-full overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1 text-center">
                <a onClick={() => setMobileMenuOpen(false)} href="#about" className="block px-3 py-3 text-gray-700 font-medium hover:text-mamaku-orange hover:bg-orange-50 rounded-lg">Tentang Kami</a>
                <a onClick={() => setMobileMenuOpen(false)} href="#packages" className="block px-3 py-3 text-gray-700 font-medium hover:text-mamaku-orange hover:bg-orange-50 rounded-lg">Paket Catering</a>
                <a onClick={() => setMobileMenuOpen(false)} href="#gallery" className="block px-3 py-3 text-gray-700 font-medium hover:text-mamaku-orange hover:bg-orange-50 rounded-lg">Galeri Menu</a>
                <a onClick={() => setMobileMenuOpen(false)} href="#testimonials" className="block px-3 py-3 text-gray-700 font-medium hover:text-mamaku-orange hover:bg-orange-50 rounded-lg">Testimoni</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0 text-center md:text-left">
                    <span className="font-bold text-2xl text-mamaku-brown tracking-tight block mb-2">Catering<span className="text-mamaku-orange">Mamaku</span></span>
                    <p className="text-gray-500 text-sm">Menyajikan kebahagiaan lewat cita rasa rumahan Nusantara.</p>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                <p>&copy; 2026 Catering Mamaku. Hak Cipta Dilindungi.</p>
                <p className="mt-2 md:mt-0">Dibuat dengan ❤️ di Indonesia</p>
            </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <motion.a 
        href="https://wa.me/6282310991320" 
        target="_blank" rel="noreferrer"
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-colors"
      >
        <MessageCircle size={32} />
      </motion.a>
    </div>
  )
}
