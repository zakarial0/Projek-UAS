import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage, } from "gatsby-plugin-image";
import Layout from "../components/layout";

export default function ProdukPage ({ data }){
    const { body } = data.mdx
    const {title} = data.mdx.frontmatter
    const featureimage = getImage(data.mdx.frontmatter.image)
    
    return(
        <Layout>
          <div className="flex ">
            <div className="w-2/3 ">
                <div className=" px-8 py-10">
                    <GatsbyImage image={featureimage} alt="al-hikmah foto"/>
                </div>
                <div className="px-12">
                    <h1 className="text-2xl font-bold">
                      {title}
                    </h1>
                    <div className="px-14 text-lg w-96">
                        {body}
                    </div>
                </div>
            </div>
          </div>
        </Layout>
    )
}

export const query = graphql`
query ProjectDetail($slug: String) {
  mdx(frontmatter: {slug: {eq: $slug}}) {
    frontmatter {
      title
      image {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, height: 300, width: 1200)       
          }
      }
    }
    body
  }
}`