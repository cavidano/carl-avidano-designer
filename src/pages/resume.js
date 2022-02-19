import React, { Fragment } from 'react';

import { graphql } from 'gatsby';

import { MDXRenderer } from 'gatsby-plugin-mdx';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

const Resume = ({ data }) => {

    const employment = data.allEmploymentYaml.nodes;

    const jobList = employment.map((job, index) => {

        let company = job.company;
        let title = job.title;
        let dates = job.dates;
        let description = job.description

        return (
            <div className="padding-y-3" key={`${job}_${index}`}>
                
                <div className="grid justify-content-end grid--column-4--lg gap-3">

                    {index === 0 ? (

                    <h2 className="h6 grid__colspan-1--lg">
                        Employment
                    </h2>

                    ) : (
                        <span className='grid__colspan-1--lg'></span>
                    )}

                    <div className="grid__colspan-1--lg font-size-md">
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

                    <div className="grid__colspan-2--lg">

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

            <main className="container narrow medium--lg margin-y-4">

                <section className="border-top">

                    {jobList}

                </section>
                
                <section className="border-top padding-y-3">

                    <div className="grid grid--column-4--lg gap-3">

                        <h2 className="h6 grid__colspan-1--lg">
                            Education
                        </h2>

                        <div className="grid__colspan-1--lg font-size-md">
                            <p className="margin-bottom-2">
                                <strong className="display-block">
                                    The Creative Center
                                </strong>
                                <span className="display-block font-size-md">
                                    College of Art and Design
                                </span>
                            </p>

                        </div>

                        <div className="grid__colspan-2--lg">

                            <p>
                                Graduated with an Associate of Occupational Studies Degree in Graphic Design and Illustration.
                            </p>

                        </div>

                    </div>

                </section>

                <section className="border-top padding-y-3">

                    <div className="grid grid--column-4--lg gap-3">

                        <h2 className="h6 grid__colspan-1--lg">
                            Skills
                        </h2>
                        
                        <div className="grid__colspan-1 font-size-md">

                            <ul className="bulleted">
                                <li>
                                    Content Strategy
                                </li>
                                <li>
                                    UX/Interaction Design
                                </li>
                                <li>
                                    Front-end Development
                                </li>
                                <li>
                                    Design Systems
                                </li>
                            </ul>
                            
                        </div>

                        <div className="grid__colspan-1 font-size-md">

                            <ul className="bulleted">
                                <li>
                                    Branding/Identity Design
                                </li>
                                <li>
                                    Graphic Design
                                </li>
                                <li>
                                    Typography
                                </li>
                                <li>
                                    Illustration/Fine Art
                                </li>
                            </ul>
                            
                        </div>

                        <div className="grid__colspan-1 font-size-md">

                            <ul className="bulleted">
                                <li>
                                    Communication/Writing  
                                </li>
                                <li>
                                    Teaching and Mentoring
                                </li>
                                <li>
                                    Agile Methodology
                                </li>
                            </ul>

                        </div>

                    </div>

                </section>

                <section className="border-top padding-y-3">
                <h2 className="screen-reader-only">
                    Download Resume (PDF)
                </h2>

                <div className="display-flex justify-content-end">

                    <a className="button button--has-icon button--outline font-size-md" href="/resume-carl-avidano.pdf" download>
                        <span className="icon icon-file-download"></span>
                        <span className="button__text">Download PDF</span>
                    </a>

                </div>

                </section>

            </main>
            
            <Footer backToTop={true} />

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