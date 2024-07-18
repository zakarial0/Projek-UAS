import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";

export default function ProdukPage ({ data }){
    const { body } = data.mdx
    const {title, keyword1} = data.mdx.frontmatter
    const image01 = getImage(data.mdx.frontmatter.image1)
    return(
        <Layout>
          <div className="flex ">
            <div className="w-2/3 ">
                <div className="">
                    <GatsbyImage image={image01} alt={keyword1} class="h-40"/>
                </div>
                <div className="px-12">
                    <h1 className="text-2xl font-bold">
                      {title}
                    </h1>
                    <div className="px-12 text-lg w-96">
                        {body}
                    </div>
                </div>
            </div>
            <div className="w-1/3 ">
              test
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
      keyword3
      keyword2
      keyword1
      image1 {
            childImageSharp {
              gatsbyImageData(height: 300, width: 300)
          }
      }
      image2 {
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
    body
  }
}`