const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;
	if (node.internal.type === "MarkdownRemark") {
		const slug = createFilePath({node, getNode, basePath: 'posts'});
		createNodeField({
			node,
			name: 'slug',
			value: slug,
		})
	}
}

exports.createPages = ({graphql, actions}) => {
	const {createPage} = actions;
	return graphql(`{
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      fields {
        slug
      }
    }
  }
}
`).then(result => {
	result.data.allMarkdownRemark.nodes.forEach(node => {
		createPage({
			path: node.fields.slug,
			component: path.resolve('./src/templates/Blogpost-template.tsx'),
			context: {
				slug: node.fields.slug
			}
		})
	})
	})
}
