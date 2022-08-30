import React, { Fragment } from 'react';

import { Link, graphql } from 'gatsby';

import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';

import Seo from '../../components/Seo.js';

const Portfolio = ({ data }) => {

  const customSEO = {
    title: 'Portfolio',
    description: 'Carl Avidano\'s featured design work.'
  }

  const projects = data.allProjects.nodes;

  const myProjects = projects.map((project, index) => (

    <Link
      className="backdrop theme-primary aspect-ratio-1x1 border-radius overflow-hidden scale"
      to={`/portfolio/${project.slug}`}
      key={`${project.id}_${index}`}
      style={{
        '--primary': `${project.frontmatter.backgroundColor}`,
        '--primary-text': `${project.frontmatter.textColor}`
      }}>

      <div className="backdrop__image gradient-veneer-bottom">
        <GatsbyImage
          image={getImage(project.frontmatter.previewImage)}
          alt=""
        />
      </div>

      <div className="backdrop__cover justify-content-start align-content-end">

          <div className="container width-100 margin-y-2">
              <p className="h6">
              {project.frontmatter.title}
              </p>
          </div>

      </div>

    </Link>
  ));

  return (

    <Fragment>

      <Seo
        title={customSEO.title}
        description={customSEO.description}
      />

      <Header />

      <main className="min-height-100" id="skip-header-target">

        <section className="container narrow medium">

          <h1 className="screen-reader-only">Featured Projects</h1>

          <div className="grid grid--column-2--md grid--column-3--lg gap-3 padding-y-4">

          {myProjects}
                
          </div>

        </section>

      </main>
      
      <Footer backToTop={true} />

    </Fragment>
    
  );
}

export default Portfolio;

export const query = graphql`
query myQueryallMdx {
  allProjects: allMdx(
    sort: {fields: frontmatter___sortOrder, order: ASC}
  ) {
    nodes {
      frontmatter {
        title
        backgroundColor
        textColor
        previewImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      slug
    }
  }
}
`;