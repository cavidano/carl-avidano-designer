const path = require('path');

exports.createPages = async ({ graphql, actions }) => {

  const { data } = await graphql(`
    query Docs {
      allMdx {
        nodes {
          frontmatter {
            title
          }
          slug
        }
      }
    }
  `);

  data.allMdx.nodes.forEach(node => {
    actions.createPage({
      path: '/portfolio/' + node.slug,
      component: path.resolve('./src/templates/portfolioSingle.js'),
      context: { 
        slug: node.slug
       },
    });
  });
}