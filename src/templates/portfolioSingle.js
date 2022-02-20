import React, { Fragment } from 'react';

import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import SEO from '../components/Seo.js';

import TextBlock from '../components/portfolio/TextBlock.js';
import IntroBlock from '../components/portfolio/IntroBlock.js';
import LiveProjectLink from '../components/portfolio/LiveProjectLink.js';
import FigureSingleBlock from '../components/portfolio/FigureSingleBlock.js';

const shortcodes = {
  StaticImage,
  GatsbyImage,
  TextBlock,
  IntroBlock,
  LiveProjectLink,
  FigureSingleBlock
};

const portfolioSingle = ({ data }) => {

  const { title } = data.singleProject.frontmatter;
  const { backgroundColor } = data.singleProject.frontmatter;
  const { textColor } = data.singleProject.frontmatter;
  const { body } = data.singleProject;

  const marqueeImage = getImage(data.singleProject.frontmatter.marqueeImage);

  return (
    <Fragment>

      <SEO title={title}  />

      <div className="theme-primary"
        style={{
            '--primary': `${backgroundColor}`,
            '--primary-text': `${textColor}`,
        }}>
      
        <Header />
  
        <div className="container medium text-align-center">

          <h1 className="banner-headline font-weight-normal margin-y-4">{title}</h1>

            <GatsbyImage
              image={marqueeImage}
              alt=""
            />

        </div>
      
      </div>
        
      <article className="padding-y-4">

        <MDXProvider components={shortcodes}>
          <MDXRenderer>
            {body}
          </MDXRenderer>
        </MDXProvider>

      </article>

      <Footer backToTop={true} />
      
    </Fragment>
  );
}

export default portfolioSingle;

export const query = graphql`
query queryPageData($slug: String) {
  singleProject: mdx(slug: { eq: $slug }) {
      slug
      body
      frontmatter {
          title
          backgroundColor
          textColor
          marqueeImage {
            childImageSharp {
              gatsbyImageData
            }
          }
      }
  }
}
`;