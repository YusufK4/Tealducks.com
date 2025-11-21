import React from 'react'
import { useTranslation } from 'react-i18next'

const PrivacyPolicy = () => {
  const { t } = useTranslation()
  
  return (
    <section id="privacy" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">{t('privacy.title')}</span>
            </h1>
            <p className="text-gray-400">{t('privacy.lastUpdated')}</p>
          </div>

          {/* Content */}
          <div className="glass-strong rounded-2xl p-8 md:p-12 space-y-8 text-gray-300 leading-relaxed">
            
            {/* Introduction */}
            <div>
              <p className="mb-4">
                {t('privacy.intro')}
              </p>
            </div>

            {/* Section 1: Information We Collect */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">{t('privacy.section1.title')}</h2>
              <p className="mb-4">
                {t('privacy.section1.intro')}
              </p>
              
              {/* 1.1 Google Play Games Information */}
              <div className="ml-4 mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">{t('privacy.section1.subsection1.title')}</h3>
                <p className="mb-3">{t('privacy.section1.subsection1.intro')}</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
                  <li>{t('privacy.section1.subsection1.item1')}</li>
                  <li>{t('privacy.section1.subsection1.item2')}</li>
                  <li>{t('privacy.section1.subsection1.item3')}</li>
                  <li>{t('privacy.section1.subsection1.item4')}</li>
                </ul>
                <p>{t('privacy.section1.subsection1.purpose')}</p>
              </div>

              {/* 1.2 Leaderboard Data (via PlayFab) */}
              <div className="ml-4 mb-6">
                <h3 className="text-xl font-semibold text-white mb-3">{t('privacy.section1.subsection2.title')}</h3>
                <p className="mb-3">{t('privacy.section1.subsection2.intro')}</p>
                <p className="mb-2">{t('privacy.section1.subsection2.stored')}</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
                  <li>{t('privacy.section1.subsection2.item1')}</li>
                  <li>{t('privacy.section1.subsection2.item2')}</li>
                  <li>{t('privacy.section1.subsection2.item3')}</li>
                </ul>
                <p>{t('privacy.section1.subsection2.noPersonalData')}</p>
              </div>

              {/* 1.3 Advertising Data (AdMob) */}
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-white mb-3">{t('privacy.section1.subsection3.title')}</h3>
                <p className="mb-3">{t('privacy.section1.subsection3.intro')}</p>
                <p className="mb-2">{t('privacy.section1.subsection3.mayCollect')}</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
                  <li>{t('privacy.section1.subsection3.item1')}</li>
                  <li>{t('privacy.section1.subsection3.item2')}</li>
                  <li>{t('privacy.section1.subsection3.item3')}</li>
                  <li>{t('privacy.section1.subsection3.item4')}</li>
                </ul>
                <p className="mb-2">{t('privacy.section1.subsection3.processed')}</p>
                <p>{t('privacy.section1.subsection3.policy')}</p>
              </div>
            </div>

            {/* Section 2: Third-Party Services */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">{t('privacy.section2.title')}</h2>
              <p className="mb-3">{t('privacy.section2.intro')}</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong className="text-white">{t('privacy.section2.service1.name')}</strong>
                  <br />
                  <span className="text-sm">{t('privacy.section2.service1.description')}</span>
                </li>
                <li>
                  <strong className="text-white">{t('privacy.section2.service2.name')}</strong>
                  <br />
                  <span className="text-sm">{t('privacy.section2.service2.description')}</span>
                  <br />
                  <a href="https://support.google.com/admob/answer/6128543?hl=en" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 underline text-sm">
                    AdMob Privacy Policy
                  </a>
                </li>
                <li>
                  <strong className="text-white">{t('privacy.section2.service3.name')}</strong>
                  <br />
                  <span className="text-sm">{t('privacy.section2.service3.description')}</span>
                  <br />
                  <a href="https://privacy.microsoft.com/" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 underline text-sm">
                    PlayFab Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Section 3: Account & Data Deletion */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">{t('privacy.section3.title')}</h2>
              <p className="mb-3">{t('privacy.section3.intro')}</p>
              <p className="mb-3">{t('privacy.section3.requestInfo')}</p>
              <p className="mb-3">
                📧{' '}
                <a href="mailto:yusuf@tealducks.com" className="text-primary-400 hover:text-primary-300 underline">
                  yusuf@tealducks.com
                </a>
              </p>
              <p className="mb-2 font-semibold text-white">{t('privacy.section3.whenRequested')}</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-3">
                <li>{t('privacy.section3.deletion1')}</li>
                <li>{t('privacy.section3.deletion2')}</li>
                <li>{t('privacy.section3.deletion3')}</li>
              </ul>
            </div>

            {/* Section 4: Children's Privacy */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">{t('privacy.section4.title')}</h2>
              <p className="mb-3">{t('privacy.section4.notIntended')}</p>
              <p className="mb-3">{t('privacy.section4.noKnowingly')}</p>
            </div>

            {/* Section 5: Security */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">{t('privacy.section5.title')}</h2>
              <p>{t('privacy.section5.description')}</p>
            </div>

            {/* Section 6: Changes to This Policy */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">{t('privacy.section6.title')}</h2>
              <p className="mb-3">{t('privacy.section6.description')}</p>
            </div>

            {/* Section 7: Contact Us */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">{t('privacy.section7.title')}</h2>
              <p className="mb-3">{t('privacy.section7.description')}</p>
              <p className="mt-3">
                📧{' '}
                <a href="mailto:yusuf@tealducks.com" className="text-primary-400 hover:text-primary-300 underline">
                  yusuf@tealducks.com
                </a>
              </p>
              <p className="mt-2 text-sm">{t('privacy.section7.developer')}</p>
            </div>

          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <a
              href="/"
              className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors"
            >
              <span>{t('privacy.backToHome')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrivacyPolicy
