import React, { useState, useEffect } from 'react'
import { Menu, X, Gamepad2 } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-strong shadow-2xl shadow-primary-500/10 border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 via-accent-500 to-gaming-500 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/50 hover:shadow-accent-500/50 transition-all hover:scale-110">
              <Gamepad2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl md:text-2xl font-bold text-gradient">Teal Ducks</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-gray-300 hover:text-primary-400 transition-colors font-semibold relative group">
              Ana Sayfa
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('games')} className="text-gray-300 hover:text-primary-400 transition-colors font-semibold relative group">
              Oyunlar
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-primary-400 transition-colors font-semibold relative group">
              Hakkımızda
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-primary-400 transition-colors font-semibold relative group">
              İletişim
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600 group-hover:w-full transition-all duration-300"></span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-primary-50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/10 glass-strong">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('hero')} className="text-gray-300 hover:text-primary-400 transition-colors font-semibold text-left px-4 py-2 rounded-lg hover:bg-white/10">
                Ana Sayfa
              </button>
              <button onClick={() => scrollToSection('games')} className="text-gray-300 hover:text-primary-400 transition-colors font-semibold text-left px-4 py-2 rounded-lg hover:bg-white/10">
                Oyunlar
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-primary-400 transition-colors font-semibold text-left px-4 py-2 rounded-lg hover:bg-white/10">
                Hakkımızda
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-primary-400 transition-colors font-semibold text-left px-4 py-2 rounded-lg hover:bg-white/10">
                İletişim
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
