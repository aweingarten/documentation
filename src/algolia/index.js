const config = require('./config');

const pageQuery = `{
    pages: allMdx {
      edges {
        node {
          objectID: id
          fields {
            slug
          }
          headings {
            value
          }
          frontmatter {
            title
            description
          }
          excerpt(pruneLength: 50000)
        }
      }
    }
  }`;
  
const flatten = arr =>
  arr.map(({ node: { frontmatter, fields, ...rest } }) => ({
    ...frontmatter,
    ...fields,
    ...rest,
  }));

const settings = { attributesToSnippet: [`excerpt:20`] };

const indexName = config.search ? config.search.indexName : '';

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => flatten(data.pages.edges),
    indexName: `${indexName}`,
    settings,
  },
];

module.exports = queries;
