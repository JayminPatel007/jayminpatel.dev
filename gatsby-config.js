require("dotenv").config({
	path: '.env',
})

module.exports = {
  siteMetadata: {
    title: `Jaymin Patel Site`,
    description: `Personal website for Jaymin Patel. I am a full stack developer.`,
    author: `@jayminpatel`,
    siteUrl: `http://jayminpatel.dev/`,
		email: 'hey@jayminpatel.dev',
		twitter: 'https://twitter.com/jayminpatel5',
		linkedin: 'https://www.linkedin.com/in/jaymin-patel-37a027145/',
		github: 'https://github.com/JayminPatel007',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `src`,
				path: `${__dirname}/src/`,
			},
		},
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/my-new-logo.png`, // This path is relative to the root of the site.
      },
    },

    `gatsby-plugin-gatsby-cloud`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-highlight-code`,
						options: {
							terminal: "carbon",
							theme: "night-owl",
						},
					},
				],
			},
		}
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
