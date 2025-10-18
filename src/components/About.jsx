import React from 'react'
import { useTranslation } from 'react-i18next'
import { Target, Users, Zap, Heart } from 'lucide-react'

const About = () => {
  const { t } = useTranslation()
  
  const values = [
    {
      icon: Target,
      title: "Misyonumuz",
      description: "Oyunculara unutulmaz deneyimler sunmak ve mobil oyun dünyasına yenilikçi fikirler katmak."
    },
    {
      icon: Users,
      title: "Topluluk",
      description: "Oyuncularımızın geri bildirimlerini dinliyor ve oyunlarımızı sürekli geliştiriyoruz."
    },
    {
      icon: Zap,
      title: "İnovasyon",
      description: "En son teknolojileri kullanarak benzersiz oyun mekanikleri ve deneyimler yaratıyoruz."
    },
    {
      icon: Heart,
      title: "Tutku",
      description: "Oyun geliştirmeye olan tutkumuz, her projemize yansıyor ve bizi ileriye taşıyor."
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">{t('about.title')}</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        {/* Story */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="glass-strong rounded-2xl shadow-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              <span className="text-gradient">Hikayemiz</span>
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                {t('about.description1')}
              </p>
              <p>
                {t('about.description2')}
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={index}
                className="glass rounded-xl shadow-lg p-6 hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300 hover:bg-white/10 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-primary-600" />
                </div>
                <h4 className="text-lg font-bold mb-2 text-white">{value.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About
