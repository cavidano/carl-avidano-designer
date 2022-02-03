import React, { Fragment } from 'react';

import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Header from '../components/Header.js';
import TextBlock from '../components/portfolio/TextBlock.js';

import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';

const shortcodes = {
  StaticImage,
  GatsbyImage,
  TextBlock
};

const portfolioSingle = ({ data }) => {

  const { title } = data.singleProject.frontmatter;
  const { backgroundColor } = data.singleProject.frontmatter;
  const { textColor } = data.singleProject.frontmatter;
  const { body } = data.singleProject;
    
  // const projects = data.allProjects.nodes;
  const marqueeImage = getImage(data.singleProject.frontmatter.marqueeImage);

  return (
    <Fragment>

      <div className="project-intro theme-primary"
        style={{
            '--primary': `${backgroundColor}`,
            '--primary-text': `${textColor}`,
        }}>
      
        <Header />
      
        <div className="container medium text-align-center">

          <h1 class="margin-bottom-4">{title}</h1>

            <GatsbyImage
              image={marqueeImage}
              alt=""
            />

        </div>
      
      </div>

        
      <div className="container margin-y-4">


        <MDXProvider components={shortcodes}>
          <MDXRenderer>
            {body}
          </MDXRenderer>
        </MDXProvider>

      </div>
    
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