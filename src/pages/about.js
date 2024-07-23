import React from "react";
import Layout from "../components/layout";
import { StarIcon ,ClipboardListIcon, AcademicCapIcon, LightBulbIcon, ShieldCheckIcon, UserGroupIcon } from "@heroicons/react/outline";
import kelas from "../images/Fasilitas/R. Kelas ( New ).jpg"

const fasilitas = [
    {
        title: 'Ruang kelas',
        srcImage: {kelas}
    },
    {
        title: 'Perpustakaan',
        srcImage: "../images/Fasilitas/Perpustakaan.jpg"
    },
    {
        title: 'Lab. Kimia',
        srcImage: "../images/Fasilitas/Lab. Kimia.jpg"
    },
    {
        title: 'Lapangan Basket',
        srcImage: "../images/Fasilitas/Lap. Basket.jpg"
    },
    {
        title: 'Masjid',
        srcImage: "../images/Fasilitas/Masjid.jpg"
    },
    {
        title: 'Lab. Komputer',
        srcImage: "../images/Fasilitas/Lab. Komputer.jpg"
    },
]

const mision = [
    {
        name: 'Menyediakan pendidikan berkualitas tinggi yang mengintegrasikan ilmu pengetahuan umum dan nilai-nilai Islam.',
        icon: AcademicCapIcon,
    },
    {
        name: 'Mendorong siswa untuk belajar melalui pengalaman langsung dan praktik nyata.',
        icon: LightBulbIcon,
    },
    {
        name: 'Mengembangkan potensi siswa secara holistik, mencakup aspek intelektual, spiritual, emosional, dan fisik.',
        icon: ShieldCheckIcon,
    },
    {
        name: 'Membentuk karakter siswa yang berakhlak mulia dan memiliki jiwa kepemimpinan yang kuat.',
        icon: UserGroupIcon,
    },
]
const AboutPage = () => {
    return(
        <Layout>
        <div className="grid grid-cols-3 m-8 gap-4">
        
            <div className="bg-green-500 col-start-1 h-2/3 rounded-md">
            <div className=" py-4 px-8 ">
                <div className=" flex items-center justify-center py-8">
                    <StarIcon className="h-10 w-10 stroke-white" aria-hidden="true"/>
                    <h1 className=" text-4xl leading-6 font-medium text-white">
                        Visi
                    </h1>
                </div>
                <h2 className="font-medium text-lg text-balance text-white">Menjadi sekolah unggulan yang menghasilkan generasi muslim yang beriman, berilmu, dan berakhlak mulia, serta mampu bersaing di kancah internasional.</h2>
            </div>
            </div>
            <div className="col-start-2 col-span-2 pt-[2.1rem]">
                <div className=" py-4 rounded-md shadow-xl bg-white">
                <div className=" flex items-center justify-center py-8">
                    <ClipboardListIcon className="h-10 w-10" aria-hidden="true"/>
                    <h1 className=" text-4xl leading-6 font-medium text-black">
                        Misi
                    </h1>
                </div>
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-10">
                        {mision.map(mision => (
                        <div key={mision.name} className="relative px-4">
                            <dt>
                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                                <mision.icon className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{mision.name}</p>
                            </dt>
                        </div>
                        ))}
                    </dl>
                </div>
            </div>
            <div>
            <h1>Fasilitas yang Tersedia</h1>
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-6 md:gap-x-14 md:gap-y-10">
            {fasilitas.map(fasilitas => (
              <div key={fasilitas.title} className="relative">
                <dt>
                  <img src={fasilitas.srcImage} alt={fasilitas.title}/>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-600">{fasilitas.title}</dd>
              </div>
            ))}
          </dl>
            </div>
            
        </div>
        </Layout>
        
    )
}

export default AboutPage;
