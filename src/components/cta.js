import React from "react";

const Callaction= () => {
    return(
        <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Mau daftar Sekarang?</span>
          <span className="block text-green-600">Lihat seputar sekolah di video ini ...</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="https://www.youtube.com/watch?v=xsiyO9uU-90"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-cyan-600"
            >
              Video
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="https://bit.ly/psbponpesps"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-purple-100"
            >
              Daftar!
            </a>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Callaction;