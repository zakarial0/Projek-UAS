import React from "react";
import { LightBulbIcon, BookOpenIcon, HeartIcon, UserGroupIcon} from "@heroicons/react/solid";

const features = [
  {
    name: 'Project-Based Learning',
    description:
      'Siswa belajar melalui proyek-proyek yang menantang dan relevan dengan kehidupan nyata. Proyek ini dirancang untuk mengembangkan keterampilan berpikir kritis, kolaborasi, dan kreativitas.',
    icon: LightBulbIcon,
  },
  {
    name: 'Islamic Integration',
    description:
      'Setiap mata pelajaran diintegrasikan dengan nilai-nilai Islam. Siswa diajarkan untuk melihat dunia melalui perspektif Islam dan mengaplikasikan ajaran Islam dalam kehidupan sehari-hari.',
    icon: BookOpenIcon,
  },
  {
    name: 'Community Service',
    description:
      'Siswa terlibat dalam kegiatan pelayanan masyarakat untuk mengembangkan rasa empati dan tanggung jawab sosial. Kegiatan ini juga membantu siswa memahami pentingnya kontribusi positif dalam masyarakat.',
    icon: HeartIcon,
  },
  {
    name: 'Leadership Development',
    description:
      'Program pengembangan kepemimpinan yang dirancang untuk membentuk karakter dan jiwa kepemimpinan siswa. Siswa dilatih untuk menjadi pemimpin yang berintegritas dan bertanggung jawab.',
    icon: UserGroupIcon,
  },
]

export default function Features() {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Mengapa Harus Sekolah Disini?</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Metode Belajar Komprehensif
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
            Disamping ilmu agama, santri juga dibekali dengan skill dan kompetensi dibidang Teknologi dan kepemimpinan
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map(feature => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
