import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function ProdukPage ({ data }){
    const { body } = data.mdx
    const {title, keyword1} = data.mdx.frontmatter
    const image01 = getImage(data.mdx.frontmatter.image1)
    return(
        <div>
          <div className="bg-[#4FC3F7] flex w-full py-5">
            <div className="ms-8 w-4/6">
              <Link to="/produk" className="text-xl font-bold text-color">Kembali</Link>
            </div>
            <ul className="flex font-medium space-x-9 w-2/6 me-8">
                <li>
                    <Link to="/" className="text-xl font-bold text-color">Home</Link>
                </li>
                <li>
                    <Link to="/produk" className="text-xl font-bold text-color">Products</Link>
                </li>
                <li>
                    <Link to="/about" className="text-xl font-bold text-color">About Us</Link>
                </li>
                <li>
                    <Link to="/contact" className="text-xl font-bold text-color">Contact</Link>
                </li>
            </ul>
        </div>
            <div className="grid grid-cols-2">
                <div>
                    <GatsbyImage image={image01} alt={keyword1} />
                </div>
                <div>
                    <h1>{title}</h1>
                    <div>
                        {body}
                    </div>
                </div>
            </div>
        </div>
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
              gatsbyImageData
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