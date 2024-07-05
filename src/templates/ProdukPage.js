import React from "react";
import Layout from "../components/layout";

export default function ProdukPage (){
    return(
        <Layout>
            <div className="grid grid-cols-2">
                <h1>gambar,cta</h1>
                <div>
                    <p>nama,deskripsi,ulasan</p>
                </div>
            </div>
        </Layout>
    )
}
