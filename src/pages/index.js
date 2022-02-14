import React, {Fragment } from 'react';

import { Link } from 'gatsby';

import Header from '../components/Header.js';

const Home = () => {
  return (
    <Fragment>

      <Header />

      <main className="home" id="skip-header-target">
            
        <section className="container medium align-self-center text-align-center">

          <h1 className="banner-headline font-weight-bold margin-bottom-4">
            I seek to inspire empathy and inclusion through accessible experience and interaction design.
          </h1>

          <Link class="button button--outline button--has-icon" to="/portfolio">
              <span class="button__text">See my work</span>
              <span class="icon icon-arrow-right"></span>
          </Link>

        </section>

      </main>

    </Fragment>
  )
}

export default Home;