const path = require('path')

exports.createPages = async ({ graphql, actions}) => {

    const { data } = await graphql(`
        query MyQuery {
        allMdx {
            nodes {
            frontmatter {
                slug
            }
            }
        }
        }
    `)

    data.allMdx.nodes.forEach(node => {
        actions.createPage({
            path: '/produk/' + node.frontmatter.slug,
            component: path.resolve('./src/templates/ProdukPage.js'),
            context: { slug: node.frontmatter.slug }
        })
    })
}