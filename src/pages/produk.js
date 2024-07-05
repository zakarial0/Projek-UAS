import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ProdukPage = ({ data }) => {
    return(
        <Layout>
            <h1>Produk kami</h1>
            <div>
                    {
                        data.allMdx.edges.map(({node}) => (
                            <article>
                                <GatsbyImage image={getImage(node.frontmatter.image)} />
                                <p> <Link to={node.frontmatter.slug} key={node.id}>{node.frontmatter.title}</Link></p>
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
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
          title
          slug
        }
        id
      }
    }
  }
}
`
export default ProdukPage;