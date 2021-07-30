import * as React from 'react';
import PageLayout from "./Page"
import {graphql} from 'gatsby'
import { Data } from "../types/gatsby-transformer-remark"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

deckDeckGoHighlightElement();

const BlogPostLayout: React.FC<Data<any>> = ({data}) => {
  return (
    <PageLayout siteTitle={data.markdownRemark.frontmatter.title} data={data}>
      <article className="container blog-container animation-container">
        <header className="blog-header">
          <h1 className="blog-heading">{data.markdownRemark.frontmatter.title}</h1>
          <div className="post-full-byline blog-meta-container">
            <section className="post-full-byline-content">
              <section className="post-full-byline-meta">
                <div className="byline-meta-content">
                  <time className="byline-meta-date" dateTime={data.markdownRemark.frontmatter.date}>{data.markdownRemark.frontmatter.date}</time>
                  <span className="byline-reading-time"><span className="bull">•</span> 2 min read</span></div>
              </section>
            </section>
          </div>
        </header>
        <figure className="blog-figure">
          <img className="blog-image" src={data.markdownRemark.frontmatter.titleImage.childImageSharp.original.src} alt="blog title image" />
          <div className="image-credit">
            <p>Photo By <a href={data.markdownRemark.frontmatter.creditLink}>{data.markdownRemark.frontmatter.creditName}</a></p>
          </div>
        </figure>
        <section className="blog-main-section">
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}/>
        </section>
      </article>
    </PageLayout>
  )
}

export default BlogPostLayout;

export const query = graphql`
    query ($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
            html
            frontmatter {
                title
                date
                tags
                creditLink
                creditName
                titleImage {
                    childImageSharp {
                        original {
                            src
                        }
                    }
                }
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
