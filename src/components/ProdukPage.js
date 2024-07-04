import React from "react";
import Layout from "./layout";
import { graphql} from "gatsby"; 

const ProdukPage = ({ data }) => {
    return(
        <Layout>
            <div className="grid grid-cols-2">
                {/* <div>
                    {
                        data.allMdx.nodes.map((node) => (
                            <article>
                                <span>{node.frontmatter.image}</span>
                                <h1>{node.frontmatter.author}</h1>
                            </article>
                        ))
                    }
                </div> */}
                <div>
                    <p>nama,deskripsi,ulasan</p>
                </div>
            </div>
        </Layout>
    )
}

// export const query = graphql `
// query MyQuery {
//   allMdx {
//     nodes {
//       frontmatter {
//         author
//         image
//       }
//     }
//   }
// }
// `

export default ProdukPage