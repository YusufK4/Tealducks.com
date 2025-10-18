import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const { t } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsMobileMenuOpen(false)
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
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img 
              src="/logo.png" 
              alt="Teal Ducks Logo" 
              className="w-10 h-10 md:w-12 md:h-12 object-contain hover:scale-110 transition-all"
            />
            <span className="text-xl md:text-2xl font-bold text-gradient" dir="ltr">Teal Ducks</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button onClick={() => scrollToSection('hero')} className="text-gray-300 hover:text-primary-400 transition-colors font-semibold relative group">
              {t('nav.home')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('games')} className="text-gray-300 hover:text-primary-400 transition-colors font-semibold relative group">
              {t('nav.games')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-primary-400 transition-colors font-semibold relative group">
              {t('nav.about')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-primary-400 transition-colors font-semibold relative group">
              {t('nav.contact')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <LanguageSwitcher />
          </nav>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <button
              className="p-2 rounded-lg hover:bg-primary-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-300" />
            )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/10 glass-strong">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('hero')} className="text-gray-300 hover:text-primary-400 transition-colors font-semibold text-left px-4 py-2 rounded-lg hover:bg-white/10">
                {t('nav.home')}
              </button>
              <button onClick={() => scrollToSection('games')} className="text-gray-300 hover:text-primary-400 transition-colors font-semibold text-left px-4 py-2 rounded-lg hover:bg-white/10">
                {t('nav.games')}
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-primary-400 transition-colors font-semibold text-left px-4 py-2 rounded-lg hover:bg-white/10">
                {t('nav.about')}
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-primary-400 transition-colors font-semibold text-left px-4 py-2 rounded-lg hover:bg-white/10">
                {t('nav.contact')}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
