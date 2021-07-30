import * as React from 'react';
import { graphql, Link } from "gatsby"

import PageLayout from "../templates/Page"

interface AboutPagePropType {
  data: {
    site : {
      siteMetadata: any
    }
  }
}

const AboutPage: React.FC<AboutPagePropType> = ({data}) => {
  return(
    <PageLayout siteTitle={'about'} data={data}>
      <div className="half-container-animation">
        <div className='half-container animation-container card block'>
          <div className='about-title main-name-title main-title'>
            <h1>About</h1>
          </div>
          <div className='about-description'>
            <p>
              Hi there! My name is Jaymin Patel. I am a Full Stack Web Developer.
              Currently I am self-employed, working as full-time freelancer.
            </p>
            <br/>
            <p>
              I have Engineering Degree in CS Major. At collage My main focus was on
              Machine Learning especially Deep Learning. But I always liked building things.
              In projects I have worked until now, I got a good understanding that solving
              complex problem using Simple Solutions is an Art. And I am constantly trying to
              master it.
            </p>
            <br/>
            <p>
              I am firm believer in development disciplines like TDD. I am also learning DevOps
              and how to setup CI/CD. In free time I learn about System Design and Architecture.
            </p>
            <br/>
            <h3>My Goals in 2021</h3>
            <br />
            <ul>
              <li className="completed">Create Microservices app with Asynchronous communication b/w Services</li>
              <li className="completed">Learn Nest.js</li>
              <li className="completed">Create My Web-Site</li>
              <li className="pending">Learn Docker</li>
              <li className="pending">Learn Kubernetes</li>
              <li className="pending">Learn Jenkins</li>
            </ul>
            <br/>
            <h3>Currently Reading Books</h3>
            <br />
            <ul>
              <li className="reading-book">Code Complete</li>
              <li className="reading-book">Laws of Human Nature</li>
            </ul>
            <br/>
            <p>I hope You liked my site. For any queries please <Link className="underline" to="/contact">contact me</Link>.</p>
          </div>
        </div>
      </div>
    </PageLayout>
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
    }
`

export default AboutPage;
