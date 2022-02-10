import React, {Fragment, useEffect } from 'react';

import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';

import Header from '../components/Header.js';

const Home = () => {
  return (
    <Fragment>

      <Header />

      <main className="home" id="skip-header-target">
            
        <section className="container medium align-self-center text-align-center">

          <h1 className="banner-headline">
            I seek to inspire empathy and inclusion through accessible experience and interaction design.
          </h1>

          <a class="button button--outline margin-y-4" href="#1">
            See my work
          </a>

        </section>

      </main>

    </Fragment>
  )
}

export default Home;