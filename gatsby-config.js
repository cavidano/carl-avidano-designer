module.exports = {
  siteMetadata: {
    name: "Carl Avidano",
    title: "Senior UX Designer",
    titleTemplate: `%s • Carl Avidano • Senior UX Designer`,
    description:
      "Carl Avidano is a New York-based digital designer. Here you'll find Carl's design portfolio and resume.",
    url: "https://design.carlavidano.com",
    image: "/snape.jpg", // Path to the image placed in the 'static' folder, in the project's root directory.
    twitterUsername: "@occlumency",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-remark-images`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `blurred`,
          quality: 95
        }
      }
    },
    {
      resolve: 'gatsby-transformer-yaml-full',
      options: {
        plugins: [`mdx-yaml-full`]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/src/content/portfolio/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          `gatsby-remark-unwrap-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              maxWidth: 2600,
              quality: 95
            },
          }
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/resume/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    }
  ]
}