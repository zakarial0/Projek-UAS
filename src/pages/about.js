import React from "react";
import Layout from "../components/layout";
import { StarIcon ,ClipboardListIcon, AcademicCapIcon, LightBulbIcon, ShieldCheckIcon, UserGroupIcon } from "@heroicons/react/outline";

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
        </div>
        </Layout>
        
    )
}
<body>
	<header>
		<h1>Fasilitas Yang Tersedia Di Sekolah Kami</h1>
	</header>
	<main>
		<section id="Ruang kelas">
			<h2>Ruang Kelas</h2>
			<p>Ruang kelas kami dilengkapi dengan fasilitas modern, termasuk papan tulis interaktif, komputer, dan akses internet berkecepatan tinggi</p>
			<img src="images/Fasilitas/R. Kelas ( New ).jpg" alt="Ruang Kelas">
		</section>
		<section id="Perpustakaan">
			<h2>Perpustakaan</h2>
			<p>Perpustakaan kami adalah pusat pengetahuan, menyediakan akses ke banyak koleksi buku, jurnal, dan sumber daya online</p>
			<img src="images/Fasilitas/Perpustakaan.jpg" alt="Perpustakaan">
		</section>
		<section id="Lab. Kimia">
			<h2>Lab. Kimia</h2>
			<p>Laboratorium kami dilengkapi dengan peralatan dan teknologi modern, memungkinkan siswa kami melakukan eksperimen dan investigasi di lingkungan yang aman dan terkendali</p>
			<img src="images/Fasilitas/Lab. Kimia.jpg" alt="Lab. Kimia">
		</section>
		<section id="Olahraga">
			<h2>Lapangan Basket</h2>
			<p>Lapangan Basket yang bisa digunakan pada waktu ekstrakurikuler maupun turnamen guna memadai dalam keahlian para siswa</p>
			<img src="images/Fasilitas/Lap. Basket.jpg" alt="Olahraga">
		</section>
		<section id="Mosque">
			<h2>Masjid</h2>
			<p>Fasilitas yang memungkinkan siswa dan staf sekolah untuk menjalankan ibadah secara praktis dan nyaman tanpa harus meninggalkan lingkungan sekolah.</p>
			<img src="images/Fasilitas/Masjid.jpg" alt="Mosque">
		</section>
		<section id="Lab. Komputer">
			<h2>Lab. Komputer</h2>
			<p>Lab komputer dirancang untuk menyediakan akses ke perangkat keras dan perangkat lunak yang diperlukan untuk mendukung pembelajaran dan pengajaran di berbagai mata pelajaran.</p>
			<img src="images/Fasilitas/Lab. Komputer.jpg" alt="Lab. Komputer">
		</section>
	</main>
</body>

export default AboutPage;
