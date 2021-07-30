import * as React from 'react';
import PageTemplate from '../templates/Page'
import './home.css'
import WebDeveloperSVG from "../components/svg-assets/web-developer-svg"
import { graphql } from "gatsby"

interface HomePagePropType {
  data: {
    site : {
      siteMetadata: any
    }
  }
}

const HomePage: React.FC<HomePagePropType> = ({data}) => {
  return(
    <PageTemplate siteTitle={'Home | Jaymin Patel'} data={data}>
      <section className="mt-3 section">
        <div className="grid grid-cols-12">
          <div className="index-grid-text-container animation-container">
            <h1 className='main-name-title main-title'>
              Hi There,
              <br/>
              I'm Jaymin and I'm a
              <br/>
              A full stack web developer.
            </h1>
            <p className='home-info-p'>
              I'm a full-time freelancer and I build things for web. I love to create web solution which people use.
              And I believe in easy to understand and easy to maintain solutions.
            </p>
          </div>
          <div className="index-grid-svg-container animation-container">
            <WebDeveloperSVG />
          </div>
        </div>
      </section>
    </PageTemplate>
  )
}

export const query = graphql`
    query {
        site {
            siteMetadata{
                email
                linkedin
                twitter
                github
            }
        }
    }`

export default HomePage;
