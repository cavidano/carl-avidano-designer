import React, { Fragment } from 'react';

import { graphql } from 'gatsby';

import { MDXRenderer } from 'gatsby-plugin-mdx';

import Header from '../components/Header.js';

const Resume = ({ data }) => {

    const experience = data.allExperienceYaml.nodes;
    
    return (
        <Fragment>
            <Header />

            <div className="container medium">

                <h2 className="h5">Employment</h2>

                {experience.map((job, index) => {

                    let company = job.company;
                    let title = job.title;
                    let dates = job.dates;
                    let description = job.description

                    return (
                        <div key={`${job}_${index}`} className="grid grid--column-2 border-top padding-y-3">

                            <div>
                                <p className="margin-bottom-2">
                                    <strong className="display-block">
                                        {company}
                                    </strong>
                                    <span className="display-block font-size-md">
                                        {title}
                                    </span>
                                </p>

                                <p className="font-size-sm opacity-70">
                                    {dates}
                                </p>
                            </div>

                            <MDXRenderer>
                                {description.body}
                            </MDXRenderer> 

                        </div>
                    );
                })}

            </div>
        </Fragment>
    )
}

export default Resume;

export const query = graphql`
query queryResume {
    allExperienceYaml {
      nodes {
        description {
          body
        }
        company
        dates
        title
      }
    }
  }
`