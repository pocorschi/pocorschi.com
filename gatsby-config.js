module.exports = {
  siteMetadata: {
    title: 'pocorschi ',
    description: '',
    keywords: 'gatsbyjs, gatsby, javascript, sample, something',
    siteUrl: 'https://pocorschi.com',
    author: {
      name: 'Mihai Pocorschi',
      url: 'https://twitter.com/pocorschi',
      email: 'iam@pocorschi.com'
    }
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        verbose: true,
        legacy: false,
        display: 'swap',
        fonts: [
          {
            family: 'Open Sans',
            variable: false,
            weights: ['400', '700']
          },
          {
            family: 'Josefin Sans',
            variable: true,
            weights: ['200..900']
          },
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com'
      }
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components'
  ]
}
