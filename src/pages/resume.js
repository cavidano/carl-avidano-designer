import React, { Fragment } from 'react';

import { graphql } from 'gatsby';

import { MDXRenderer } from 'gatsby-plugin-mdx';

import Header from '../components/Header.js';

const Resume = ({ data }) => {

    const employment = data.allEmploymentYaml.nodes;

    const jobList = employment.map((job, index) => {

        let company = job.company;
        let title = job.title;
        let dates = job.dates;
        let description = job.description

        return (
            <div className="border-top padding-y-3">
                
                <div key={`${job}_${index}`} className="grid grid--column-8--lg gap-3">

                    <div className="grid__colspan-3">
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

                    <div className="grid__colspan-5">

                    <MDXRenderer>
                        {description.body}
                    </MDXRenderer> 

                    </div>


                </div>
            
            </div>
        );
    });
    
    return (
        <Fragment>
            <Header />

            <div className="container narrow medium--lg padding-y-3">

                <h2 className="h6 text-transform-uppercase">Employment</h2>

                {jobList}

            </div>
        </Fragment>
    );
}

export default Resume;

export const query = graphql`
query queryResume {
    allEmploymentYaml {
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