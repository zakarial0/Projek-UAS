import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ProdukPage = ({ data }) => {
    return(
        <Layout>
            <h1 className="text-3xl my-8 ms-8 font-bold">New Article</h1>
            <div className="grid grid-cols-3 gap-8 mx-8 mb-8">
                    {
                        data.allMdx.edges.map(({node}) => (
                            <article className="bg-[#bebebe] w-full h-96 rounded-lg shadow-xl mx-2 my-1 border border-[#0d47a1] hover:border-[#81d4fa]">
                              <Link to={node.frontmatter.slug} key={node.id}>
                                <GatsbyImage image={getImage(node.frontmatter.image1)} className="rounded-tl-lg rounded-tr-lg h-3/5"/>
                                <div className="w-72 h-2/5 px-8 py-3 rounded-br-xl rounded-bl-xl">
                                  <h1 className="font-medium">{node.frontmatter.title}</h1>
                                  <p>Rp {node.frontmatter.harga}</p>
                                </div>
                              </Link>
                            </article>
                        ))
                    }
            </div>
        </Layout>
    )
}

export const query = graphql `
query MyQuery {
  allMdx {
    edges {
      node {
        frontmatter {
          image1 {
            childImageSharp {
              gatsbyImageData
            }
          }
          title
          slug
          harga
        }
        id
      }
    }
  }
}
`
export default ProdukPage;