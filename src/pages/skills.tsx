import * as React from 'react';

import {skills} from '../assets/skills'
import Card from "../components/Card"
import PageLayout from "../templates/Page"
import AngularSVG from "../components/svg-assets/angular"
import ReactSVG from "../components/svg-assets/react"
import NodeSVG from "../components/svg-assets/node"
import SpringSVG from "../components/svg-assets/spring"
import { graphql } from "gatsby"

interface SkillsPagePropType {
  data: {
    site : {
      siteMetadata: any
    }
  }
}

const SkillsPage: React.FC<SkillsPagePropType> = ({data}) => {
  return(
    <PageLayout siteTitle={'skills'} data={data}>
      <div className="container">
        <Card title={skills.angular.title} description={skills.angular.description} renderComp={AngularSVG}/>
        <Card title={skills.react.title} description={skills.react.description} renderComp={ReactSVG}/>
        <Card title={skills.node.title} description={skills.node.description} renderComp={NodeSVG}/>
        <Card title={skills.java.title} description={skills.java.description} renderComp={SpringSVG}/>
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

export default SkillsPage;
