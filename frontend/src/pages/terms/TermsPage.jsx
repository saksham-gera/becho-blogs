import React from 'react'
import MainLayout from '../../components/MainLayout';
import Heading from './components/Heading';

const TermsPage = () => {
  return (
    <div>
    <MainLayout style={{ backgroundColor: '#a67bdb' }}>
    <div className="bg-gray-50 min-h-screen">
      {/* Heading Component */}
      <Heading />

      {/* Content Section */}
      <section className="py-12 px-6 lg:px-24 max-w-6xl mx-auto">
        <div className="space-y-10">
          {/* Introduction */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-600 leading-7">
              Welcome to Becho! By accessing our website or using our services, you agree to comply with these terms and conditions. Please read them carefully before proceeding.
            </p>
          </div>

          {/* User Responsibilities */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. User Responsibilities
            </h2>
            <p className="text-gray-600 leading-7">
              As a user, you agree to provide accurate information and refrain from engaging in any activities that could disrupt or harm the platform. Failure to comply may result in the suspension of your account.
            </p>
          </div>

          {/* Privacy Policy */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. Privacy Policy
            </h2>
            <p className="text-gray-600 leading-7">
              Your privacy is important to us. For details on how we collect, use, and protect your data, please refer to our <a href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</a>.
            </p>
          </div>

          {/* Limitations of Liability */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. Limitations of Liability
            </h2>
            <p className="text-gray-600 leading-7">
              Becho is not liable for any direct, indirect, or consequential damages resulting from the use of our services. While we strive to provide a seamless experience, we cannot guarantee uninterrupted service.
            </p>
          </div>

          {/* Amendments */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. Amendments
            </h2>
            <p className="text-gray-600 leading-7">
              Becho reserves the right to update or modify these terms at any time. Changes will be communicated through our website. Continued use of our services signifies acceptance of the revised terms.
            </p>
          </div>

          {/* Governing Law */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. Governing Law
            </h2>
            <p className="text-gray-600 leading-7">
              These terms are governed by the laws of your country or state. Any disputes arising from these terms will be resolved under the jurisdiction of local courts.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-white py-8">
        <div className="text-center text-gray-600">
          <p>© 2024 Becho. All rights reserved.</p>
          <p>Last Updated: December 2024</p>
        </div>
      </footer>
    </div>
    </MainLayout>
    </div>
  )
}

export default TermsPage
