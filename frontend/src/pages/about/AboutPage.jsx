import React from 'react'
import TeamSection from './components/teamSection.jsx'
import JoinNow from './components/joinNow.jsx'
import MainLayout from '../../components/MainLayout.jsx'

function AboutPage() {
  return (
    <MainLayout>
    <div className="bg-white">
      <div className="mt-4">
      <div className="flex flex-col text-center w-full">
        <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">About Becho</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Becho is a pioneering company dedicated to bridging the gap between hiring companies and potential candidates across diverse domains. By leveraging cutting-edge technology and a vast network of industry professionals, MicVick streamlines the hiring process, ensuring that companies find the best talent suited to their needs while providing job seekers with unparalleled access to a wide range of opportunities. Our comprehensive platform offers a seamless experience, from initial job postings and candidate searches to interview scheduling and final hiring decisions.</p>
      </div>
        <TeamSection />
        <JoinNow />
      </div>
    </div>
    </MainLayout>
  )
}

export default AboutPage