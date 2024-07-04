import React from "react";
import Layout from "../components/layout";

const AboutPage = () => {
    return(
        <Layout>
            <main>
                <section class="about-us">
                    <h1>Tentang Kami</h1>
                    <p>Total clean mart adalah sebuah platform yang menyediakan berbagai macam barang untuk menunjang kebersihan pada kamar mandi anda</p>
                    <h2>Misi Kami</h2>
                    <p>"Kebersihan bukanlah tujuan, tapi merupakan gaya hidup untuk menciptakan lingkungan yang sehat dan nyaman bagi semua."</p>
                    <h2>Tim Kami</h2>
                    <ul>
                        <li>
                            <img src="#" alt="John Doe" />
                            <h3>John Doe</h3>
                            <p>Founder & CEO</p>
                        </li>
                        <li>
                            <h3>Jane Doe</h3>
                            <p>Co-Founder & CTO</p>
                        </li>
                    </ul>
                </section>
            </main>
        </Layout>
    )
}

export default AboutPage;