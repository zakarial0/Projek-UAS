import * as React from "react";
import Layout from "../components/layout";
import Banner from "../components/banner";
import Features from "../components/metodeBelajar";
import Callaction from "../components/cta";


const IndexPage = () => {
  return (
    <Layout>
      <Banner/>
      <Features/>
      <Callaction/>
    </Layout>
  )
}


export default IndexPage

export const Head = () => <title>Home Page</title>
