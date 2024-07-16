import React from "react";
import FeaturedImage from "../images/banner-img.png";
import { Link } from "gatsby";

const Banner = () => {
    return(
        <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <main className="pt-10 mx-auto max-w-7xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
            <div className="text-center sm:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-green-600 sm:text-5xl md:text-6xl text-left">
                <span className="block xl:inline">Al - Hikmah</span>{' '}
                <span className="block text-gray-900 xl:inline">International Islamic School</span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Membangun Generasi dan Peradaban Islam melalui jalan Property Syariah dengan Pesantren sebagai wasilah melahirkan SDM yang visioner, berkepribadian Islam, faqih fiddin serta unggul dan profesional.
              </p>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Mencetak lulusan yang paham bahasa arab, berkepribadian dan memiliki tsaqafah Islam dengan kemampuan Digital Marketing yang unggul untuk mendukung property syariah di Indonesia.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/about"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-cyan-600 md:py-4 md:text-lg md:px-10"
                  >
                    About us
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="https://bit.ly/psbponpesps"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-800 hover:bg-cyan-600 md:py-4 md:text-lg md:px-10"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Pendaftaran
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-purple-100">
        <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={FeaturedImage} alt="gedung sekolah" />
      </div>
    </div>
    )
}

export default Banner;