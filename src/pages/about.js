import React, {Fragment } from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

const About = () => {
  return (
    <Fragment>

        <div className="backdrop backdrop--fixed min-height-100vh">

            <div className="backdrop__image">
                <StaticImage
                    className="opacity-10 display-none display-block--lg"
                    src="../images/self-square.jpg"
                    alt="Carl Avidano"
                />
            </div>

            <div className="backdrop__cover flex-column min-height-100vh">

                <Header />

                <div className="container narrow medium--lg flex-grow-1 padding-y-4">

                    <div className="border-top">

                        <div className="grid grid--column-2--lg gap-3">

                            <section className="padding-y-3--lg">

                                <div className="flex-row align-items-center">

                                    <div className="border-radius-circle margin-top-3 margin-right-3 display-none--lg" style={{'max-width': '160px'}}>
                                        <StaticImage
                                            className="opacity-80"
                                            src="../images/self-square.jpg"
                                            alt="Carl Avidano"
                                        />
                                    </div>

                                    <div className="contact">

                                        <p className="margin-bottom-1">
                                            <strong>
                                                New York City
                                            </strong> 
                                        </p>

                                        <p className="font-size-md">
                                            <span className="display-block">(718) 737-8545</span>
                                            <a href="#!">cavidano@gmail.com</a>  
                                        </p> 
                                    </div>
                                
                                </div>

                            </section>

                            <section className="padding-y-3--lg">

                                <h1>
                                    I'm a seasoned interaction designer.
                                </h1>

                                <p>
                                    I've been doing design for a long time. Lucky for me, there's always something new and interesting to learn.
                                </p>

                                <p>
                                    My design journey began in 2001 at a well-known Nebraska advertising agency. I moved to New York in 2010, to work for a small firm in Manhattan. Not long after, I decided to work independently (something I have always wanted to try).
                                </p>
                                <p>
                                    I worked only with social impact organizations for more than seven years. My most recent experience is with New York City government, where I developed my passion for improving digital accessibility and inclusion. 
                                </p>

                            </section>

                        </div>

                    </div>
                    
                </div>
                
                <Footer />
            
            </div>

        </div>

    </Fragment>
  );
}

export default About;