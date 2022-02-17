import React, {Fragment } from 'react';

import { StaticImage } from 'gatsby-plugin-image';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

const About = () => {
  return (
    <Fragment>

        <div class="backdrop backdrop--fixed min-height-100vh">

            <div class="backdrop__image">
                <StaticImage
                    className="opacity-20"
                    src="../images/self-square.jpg"
                    alt=""
                />
            </div>

            <div class="backdrop__cover flex-column min-height-100vh">

                <Header />

                <div class="container narrow medium--lg flex-grow-1">

                    <div class="border-top">

                        <div class="grid grid--column-2--lg gap-3">

                            <section class="padding-y-3">

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

                            <section class="padding-y-3">

                                <h2>
                                    Accessibility is part and parcel of effective design.
                                </h2>

                                <p>
                                    I'm still learning about what it takes to be digitally accessible. There's so much to learn! Rest assured that whatever I work on for you, I'll do my best to make it as accessible as possible.
                                </p>

                                <h3>
                                    Background at a glance
                                </h3>

                                <p>
                                    I have two decades of professional digital design experience. My career began at an advertising agency in Nebraska in 2001. Sometime after moving to New York in 2011, I leaped into working independently. For seven years, I worked exclusively with social impact organizations. Most recently, I've been working for the city of New York's tech office. 
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