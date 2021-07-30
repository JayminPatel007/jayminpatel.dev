import * as React from 'react';
import { graphql, Link } from "gatsby"

interface FooterPropType {
  data: {
    site : {
      siteMetadata: any
    }
  }
}

const Footer: React.FC<FooterPropType> = ({data: {site: {siteMetadata}}}) => {
  return(
    <footer className="footer">
      <div className="footer-container">
        <section className="footer-section"><a aria-current="page" className="" href="/">Jaymin Patel</a> © 2021
        </section>
        <nav className="footer-nav">
          <Link className="" to="/blog">Latest Posts</Link>
          <a href={siteMetadata.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href={siteMetadata.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={siteMetadata.github} target="_blank" rel="noopener noreferrer">Github</a>
          <a href={'mailto:' + siteMetadata.email}>Mail</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer;
