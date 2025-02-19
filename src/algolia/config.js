const config = {
  search: {
    enabled: true,
    indexName: 'legacy-pantheon-docs',
    algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
    algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
    algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
  }
}

module.exports = config;
