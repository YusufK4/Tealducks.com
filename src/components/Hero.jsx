import React from 'react'
import { useTranslation } from 'react-i18next'
import { Play, Download } from 'lucide-react'

const Hero = () => {
  const { t } = useTranslation()
  
  return (
    <section id="hero" className="pt-16 md:pt-20 min-h-screen flex items-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div>
      {/* Animated Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-accent-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gaming-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass-strong px-5 py-2.5 rounded-full shadow-2xl mb-8 hover:scale-105 transition-all hover:shadow-primary-500/50">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-gradient-to-r from-green-400 to-emerald-400"></span>
            </span>
            <span className="text-sm font-bold text-gradient-light">{t('hero.badge')}</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient">{t('hero.title')}</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#games"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-500 via-accent-500 to-gaming-500 text-white px-8 py-4 rounded-xl font-bold shadow-2xl shadow-primary-500/50 hover:shadow-accent-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              <Play className="w-5 h-5" />
              <span>{t('hero.cta')}</span>
            </a>
            <a
              href="https://play.google.com/store/apps/dev?id=YOUR_DEVELOPER_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 glass-strong text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              <Download className="w-5 h-5" />
              <span>{t('hero.playStore')}</span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-12 mt-20 max-w-xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">1</div>
              <div className="text-sm md:text-base text-gray-400">{t('hero.stats.games')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{t('hero.stats.comingSoon')}</div>
              <div className="text-sm md:text-base text-gray-400">{t('hero.stats.onPlayStore')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
