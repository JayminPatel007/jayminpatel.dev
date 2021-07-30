import * as React from 'react';
import Header from "../components/header"
import Footer from "../components/footer"
import Seo from "../components/Seo"

interface PageLayoutPropType {
	siteTitle: string;
	data: {
		site : {
			siteMetadata: any
		}
	}
}

const PageLayout: React.FC<PageLayoutPropType> = ({siteTitle, children, data}) => {
	return (
		<div className="template-container">
			<Seo title={siteTitle}  meta={[]}/>
			<Header siteTitle={siteTitle} data={data}/>
			<main className="template-main">
				{children}
			</main>
			<Footer data={data}/>
		</div>
	)
}

export default PageLayout;
