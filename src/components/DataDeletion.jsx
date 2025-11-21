import React from 'react'
import { useTranslation } from 'react-i18next'

const DataDeletion = () => {
  const { t } = useTranslation()
  
  return (
    <section id="data-deletion" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">{t('dataDeletion.title')}</span>
            </h1>
            <p className="text-gray-400">{t('dataDeletion.lastUpdated')}</p>
          </div>

          {/* Content */}
          <div className="glass-strong rounded-2xl p-8 md:p-12 space-y-8 text-gray-300 leading-relaxed">
            
            {/* Introduction */}
            <div>
              <p className="mb-4">
                {t('dataDeletion.intro')}
              </p>
              <p className="mb-3 font-semibold text-white">{t('dataDeletion.noUserAccounts')}</p>
              <p className="mb-3">{t('dataDeletion.authMethod')}</p>
              <p className="mb-2">{t('dataDeletion.appStores')}</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>{t('dataDeletion.storeItem1')}</li>
                <li>{t('dataDeletion.storeItem2')}</li>
              </ul>
            </div>

            {/* Data That Can Be Deleted */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">{t('dataDeletion.canDelete.title')}</h2>
              <p className="mb-3">{t('dataDeletion.canDelete.weCanDelete')}</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>{t('dataDeletion.canDelete.item1')}</li>
              </ul>
              <p className="font-semibold text-white mb-2">{t('dataDeletion.canDelete.googleNote')}</p>
              <p>{t('dataDeletion.canDelete.googleManaged')}</p>
            </div>

            {/* How to Request Deletion */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">{t('dataDeletion.howToRequest.title')}</h2>
              <p className="mb-3">{t('dataDeletion.howToRequest.description')}</p>
              <p className="mb-3">
                📧{' '}
                <a href="mailto:yusuf@tealducks.com" className="text-primary-400 hover:text-primary-300 underline">
                  yusuf@tealducks.com
                </a>
              </p>
              <p className="text-sm italic">{t('dataDeletion.howToRequest.subjectLine')}</p>
            </div>

            {/* Deletion Timeline */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">{t('dataDeletion.timeline.title')}</h2>
              <p>{t('dataDeletion.timeline.description')}</p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">{t('dataDeletion.contact.title')}</h2>
              <p className="mb-2 font-semibold text-white">{t('dataDeletion.contact.company')}</p>
              <p>
                📧{' '}
                <a href="mailto:yusuf@tealducks.com" className="text-primary-400 hover:text-primary-300 underline">
                  yusuf@tealducks.com
                </a>
              </p>
            </div>

          </div>

          {/* Back to Home */}
          <div className="text-center mt-12">
            <a
              href="/"
              className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors"
            >
              <span>{t('dataDeletion.backToHome')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DataDeletion
