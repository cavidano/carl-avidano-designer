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
                    className="opacity-20 display-none display-block--lg"
                    src="../images/self-square.jpg"
                    alt="Carl Avidano"
                />
            </div>

            <div className="backdrop__cover flex-column min-height-100vh">

                <Header />

                <div className="container narrow medium--lg flex-grow-1 padding-y-4">

                    <div className="border-top">

                        <div className="grid grid--column-2--lg gap-3">

                            <section className="padding-y-3">

                                <p className="margin-bottom-1">
                                    <strong>
                                        New York City
                                    </strong> 
                                </p>

                                <p className="font-size-md">
                                    <span className="display-block">(718) 737-8545</span>
                                    <a href="#!">cavidano@gmail.com</a>  
                                </p> 

                            </section>

                            <section className="padding-y-3">

                                <div className="margin-x-n3 display-none">
                                    <StaticImage
                                        className="opacity-20"
                                        src="../images/self-square.jpg"
                                        alt="Carl Avidano"
                                    />
                                </div>

                                <h1>
                                    At a glance
                                </h1>

                                <p>
                                    I am a Senior user experience designer living in New York. With two decades of professional design experience, my career began at an advertising agency in Nebraska in 2001. Sometime after moving to New York in 2010, I leaped into working independently. For seven years, I worked exclusively with social impact organizations. Most recently, I've been working for the city of New York's tech office. 
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