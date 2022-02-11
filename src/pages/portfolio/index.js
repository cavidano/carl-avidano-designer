import React, { Fragment } from 'react';

import { Link, graphql } from 'gatsby';

import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Header from '../../components/Header.js';

const Portfolio = ({ data }) => {

  const projects = data.allProjects.nodes;

  const myProjects = projects.map((project) => (

    <Link
      class="backdrop aspect-ratio-1x1 theme-primary border-radius square"
      to={`/portfolio/${project.slug}`}
      key={project.id}
      style={{
        '--primary': `${project.frontmatter.backgroundColor}`,
        '--primary-text': `${project.frontmatter.textColor}`
      }}>

      <div class="backdrop__image gradient-veneer-bottom">
        <GatsbyImage
          image={getImage(project.frontmatter.previewImage)}
          alt=""
        />
      </div>

      <div class="backdrop__cover justify-content-end">

          <div class="container width-100 margin-y-2">
              <p class="h6">
              {project.frontmatter.title}
              </p>
          </div>

      </div>

    </Link>
  ));

  return (

    <Fragment>

      <Header />

      <main className="height-100 padding-3" id="skip-header-target">

        <section className="container narrow medium">

          <h1 className="screen-reader-only">Select Projects</h1>

          <div class="grid grid--column-2--md grid--column-3--lg gap-3 margin-y-4">

          {myProjects}
                
          </div>

        </section>

      </main>

    </Fragment>
    
  )
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