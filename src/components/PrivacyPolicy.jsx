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
              <p>
                This privacy policy applies to the <strong className="text-white">Memory Dash</strong> app (hereby referred to as "Application") for mobile devices that was created by <strong className="text-white">Teal Ducks</strong> (hereby referred to as "Service Provider") as an Ad Supported service. This service is intended for use "AS IS".
              </p>
            </div>

            {/* Information Collection and Use */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Information Collection and Use</h2>
              <p className="mb-4">
                The Application collects information when you download and use it. This information may include details such as:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Your device's Internet Protocol address (e.g., IP address)</li>
                <li>The pages of the Application that you visit, the time and date of your visit, and the time spent on those pages</li>
                <li>The operating system you use on your mobile device</li>
              </ul>
              <p className="mt-4">
                The Application does not gather precise information about the location of your device.
              </p>
            </div>

            {/* Account Information */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Account Information</h2>
              <p className="mb-4">
                The Application allows users to create an account using a username, email address, and password.
              </p>
              <p className="mb-3">This information is used solely to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>Enable account login and authentication</li>
                <li>Personalize the in-app experience</li>
                <li>Allow users to save their progress or data securely</li>
              </ul>
              <p className="mb-3">
                Passwords are encrypted and stored securely.
              </p>
              <p>
                The Service Provider does not share this account information with any third parties.
              </p>
            </div>

            {/* Third Party Access */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Third Party Access</h2>
              <p className="mb-4">
                Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service.
              </p>
              <p className="mb-4">
                Please note that the Application utilizes third-party services that have their own Privacy Policy regarding data handling. Below are links to the Privacy Policies of third-party service providers used by the Application:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
                <li>
                  <a href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 underline">
                    Google Play Services
                  </a>
                </li>
                <li>
                  <a href="https://support.google.com/admob/answer/6128543?hl=en" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 underline">
                    AdMob
                  </a>
                </li>
                <li>
                  <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 underline">
                    Google Analytics for Firebase
                  </a>
                </li>
                <li>
                  <a href="https://firebase.google.com/support/privacy/" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 underline">
                    Firebase Crashlytics
                  </a>
                </li>
                <li>
                  <a href="https://unity3d.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 underline">
                    Unity
                  </a>
                </li>
              </ul>
              <p>
                The Service Provider may disclose information as required by law, such as to comply with a subpoena or similar legal process, or when disclosure is necessary to protect the Service Provider's rights or ensure user safety.
              </p>
            </div>

            {/* Account Deletion and Data Retention */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Account Deletion and Data Retention</h2>
              <p className="mb-3">
                Users may request deletion of their account and associated data by contacting{' '}
                <a href="mailto:yusuf@tealducks.com" className="text-primary-400 hover:text-primary-300 underline">
                  yusuf@tealducks.com
                </a>.
              </p>
              <p className="mb-3">
                Upon request, all personal data (email, username, and password) will be permanently deleted from our servers.
              </p>
              <p>
                The Service Provider will retain user data for as long as the user maintains an account and for a reasonable period thereafter.
              </p>
            </div>

            {/* Opt-Out Rights */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Opt-Out Rights</h2>
              <p>
                You can stop all collection of information by uninstalling the Application. You may use the standard uninstall processes as available on your mobile device or through the application marketplace.
              </p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
              <p className="mb-3">
                The Application is not intended for children under the age of 13.
              </p>
              <p className="mb-3">
                The Service Provider does not knowingly collect personal information from children under 13. If it is discovered that a child under 13 has provided personal data, it will be promptly deleted.
              </p>
              <p>
                Parents or guardians may contact{' '}
                <a href="mailto:yusuf@tealducks.com" className="text-primary-400 hover:text-primary-300 underline">
                  yusuf@tealducks.com
                </a>{' '}
                to request data removal.
              </p>
            </div>

            {/* Security */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Security</h2>
              <p>
                The Service Provider takes appropriate measures to safeguard the confidentiality of your information, including physical, electronic, and procedural safeguards.
              </p>
            </div>

            {/* Changes */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Changes</h2>
              <p className="mb-4">
                This Privacy Policy may be updated from time to time. The Service Provider will notify users of any changes by updating this page. You are advised to review this Privacy Policy periodically.
              </p>
              <p className="font-semibold text-white">
                This policy is effective as of 2025-10-18.
              </p>
            </div>

            {/* Your Consent */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Your Consent</h2>
              <p>
                By using the Application, you consent to the processing of your information as described in this Privacy Policy.
              </p>
            </div>

            {/* Contact Us */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p>
                If you have any questions regarding privacy while using the Application, please contact the Service Provider at:
              </p>
              <p className="mt-3">
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
              <span>{t('privacy.backToHome')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrivacyPolicy
