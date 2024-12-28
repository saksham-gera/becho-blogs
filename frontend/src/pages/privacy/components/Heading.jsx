import React from 'react'

function Heading() {
  return (
    <div>
    <section className="w-full bg-gray-50">
    <div className="relative items-center w-full px-6 py-8 mx-auto md:px-12 lg:px-20 max-w-7xl">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tighter text-gray-800 md:text-5xl lg:text-6xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-lg text-gray-600 md:text-xl">
          Please read the terms carefully before using our services.
        </p>
      </div>
    </div>
  </section>

  {/* Decorative Divider */}
  <div className="w-[70vw] h-1 mx-auto mt-4 bg-gradient-to-r from-blue-300 via-violet-300 to-violet-500 rounded-lg"></div>
</div>
  )
}

export default Heading