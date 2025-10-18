import React from 'react'
import { Link } from 'react-router-dom'
import { Gamepad2, Mail, ExternalLink } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 text-gray-300 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 via-accent-500 to-gaming-500 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/50">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient-light">Teal Ducks</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Mobil platformlar için yenilikçi ve eğlenceli oyunlar geliştiren indie oyun stüdyosu.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <a href="#games" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Oyunlar
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  İletişim
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
            <h3 className="text-white font-semibold mb-4">İletişim</h3>
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
              © {currentYear} Teal Ducks. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                Gizlilik Politikası
              </Link>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                Kullanım Koşulları
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
