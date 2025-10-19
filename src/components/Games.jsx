import React from 'react'
import { useTranslation } from 'react-i18next'
import { Star, Download, ExternalLink } from 'lucide-react'

const Games = () => {
  const { t } = useTranslation()
  
  // Buraya kendi oyunlarınızı ekleyebilirsiniz
  const games = [
    {
      id: 1,
      title: t('games.memoryDash.title'),
      description: t('games.memoryDash.description'),
      image: "https://play-lh.googleusercontent.com/YOUR_ICON_URL", // Memory Dash icon from Play Store
      rating: 4.5,
      downloads: "1K+",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.tealducks.memorydash",
      category: t('games.memoryDash.genre'),
      status: 'live' // 'live' or 'coming-soon'
    }
  ]

  return (
    <section id="games" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">{t('games.title')}</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t('games.subtitle')}
          </p>
        </div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <div
              key={game.id}
              className="glass rounded-2xl shadow-2xl hover:shadow-primary-500/30 transition-all duration-300 overflow-hidden group hover:bg-white/10 hover:-translate-y-2"
            >
              {/* Game Image */}
              <div className="relative overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-primary-600 to-accent-600 px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                  <span className="text-white">
                    {game.category}
                  </span>
                </div>
              </div>

              {/* Game Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{game.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-2">{game.description}</p>

                {/* Stats */}
                {game.rating > 0 && (
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="font-semibold text-white">{game.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-300">
                      <Download className="w-4 h-4" />
                      <span className="text-sm">{game.downloads}</span>
                    </div>
                  </div>
                )}
                {game.rating === 0 && (
                  <div className="mb-4 text-center py-2">
                    <span className="text-primary-400 font-semibold">{t('games.comingSoon')}</span>
                  </div>
                )}

                {/* CTA Button */}
                {game.playStoreUrl !== "#" ? (
                  <a
                    href={game.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-500 via-accent-500 to-gaming-500 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-primary-500/30 hover:shadow-accent-500/40 transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <span>{t('games.playNow')}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <button
                    disabled
                    className="w-full inline-flex items-center justify-center space-x-2 glass text-gray-400 px-6 py-3 rounded-xl font-bold cursor-not-allowed"
                  >
                    <span>{t('games.comingSoon')}</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="https://play.google.com/store/apps/dev?id=4897059701094920978"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent font-bold hover:from-primary-700 hover:to-accent-700 transition-all"
          >
            <span>{t('games.viewAll')}</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Games
