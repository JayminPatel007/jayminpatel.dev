import * as React from 'react';
import PageLayout from "../templates/Page"
import { graphql, Link } from "gatsby"
import { AllMarkDownRemark, Data, MarkDownRemark } from "../types/gatsby-transformer-remark"

interface SiteMetadata {
  data: {
    site : {
      siteMetadata: any
    };
    allMarkdownRemark: AllMarkDownRemark;
  }
}

const BlogPage: React.FC<SiteMetadata> = ({data}) => {
  console.log(data.allMarkdownRemark);
  const blogs = data.allMarkdownRemark.nodes;

  const renderBlog = (blog: MarkDownRemark) => {
    return (
      <div className='card-container'>
        <Link to={blog.fields.slug}>
          <div className="card animation-container">
            <div className="card-content">
              <div className="card-title">
                {blog.frontmatter?.title}
              </div>
              <div className="card-description">
                {blog.excerpt}
              </div>
            </div>
            <div className="card-image">
              <img src={blog.frontmatter?.titleImage.childImageSharp.original.src} alt="blog title image"/>
            </div>
          </div>
        </Link>
      </div>
    );
  }
  return(
    <PageLayout siteTitle="blog" data={data}>
      <div className="container">
        <div className="blog-main-title-content">
          <h1 className="blog-main-title">Blog</h1>
          <h4 className="blog-main-title-description">Code Notes, tutorials, snippets, my experience ...</h4>
        </div>
        <hr />
        {
          blogs?.map((blog) => renderBlog(blog))
        }
      </div>
    </PageLayout>
  )
}

export const query = graphql`{
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        nodes {
            fields {
                slug
            }
            frontmatter {
                tags
                title
                date
                titleImage {
                    childImageSharp {
                        original {
                            src
                        }
                    }
                }
            }
            excerpt
        }
    }
    site {
        siteMetadata{
            email
            linkedin
            twitter
            github
        }
    }
}
`

export default BlogPage;
