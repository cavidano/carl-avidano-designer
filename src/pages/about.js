import React, {Fragment } from 'react';

import { Link } from 'gatsby';

import { StaticImage } from 'gatsby-plugin-image';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

const About = () => {
  return (
    <Fragment>

        <div class="backdrop backdrop--fixed justify-content-start theme-dark height-100vh">

            <div class="backdrop__image gradient-veneer-top margin-x-auto">
                <StaticImage
                    className="opacity-30"
                    src="../images/self-square.jpg"
                    alt=""
                />
            </div>

            <div class="backdrop__cover">

                <Header />

                <div class="container narrow medium--lg margin-y-4">

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

                                <h2 class="font-weight-normal">
                                Me, at a glance
                                </h2>

                                <p>
                                    I am an interaction designer and front-end engineer. I started my professional journey back when people could smoke in the office.  lies primarily in creating and implementing designs for large-scale CMS and e-commerce websites with complex product catalogs and content features.
                                </p>

                                <p>
                                    When I'm at home and not on the computer, I'm drawing or painting.
                                </p>

                            </section>

                        </div>

                    </div>
                    
                </div>

            </div>

        </div>

    </Fragment>
  );
}

export default About;