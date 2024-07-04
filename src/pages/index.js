import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <h1 className="text-black m-10 text-2xl">Landing Page</h1>
      <br/>
      <div>
                    {
                        data.allMdx.edges.map(({node}) => (
                            <article>
                                <GatsbyImage image={getImage(node.frontmatter.image)} />
                                <h1>{node.frontmatter.author}</h1>
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
          author
        }
      }
    }
  }
}
`

export default IndexPage

export const Head = () => <title>Home Page</title>
