import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Mail, ExternalLink } from 'lucide-react'

const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-accent-700 text-gray-100 border-t border-accent-600/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/logo.png" 
                alt="Teal Ducks Logo" 
                className="w-16 h-16 object-contain"
              />
              <span className="text-xl font-bold text-gradient-light" dir="ltr">{t('footer.brand')}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('hero.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#games" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  {t('nav.games')}
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  {t('nav.contact')}
                </a>
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps/dev?id=YOUR_DEVELOPER_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm inline-flex items-center space-x-1"
                >
                  <span>Google Play</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:Yusuf@tealducks.com"
                  className="text-gray-400 hover:text-primary-400 transition-colors text-sm inline-flex items-center space-x-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Yusuf@tealducks.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} {t('footer.brand')}. {t('footer.rights')}
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                {t('footer.privacyPolicy')}
              </Link>
              <Link to="/terms-conditions" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                {t('footer.termsConditions')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
