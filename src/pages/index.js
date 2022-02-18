import React, { Fragment } from 'react';

import { Link } from 'gatsby';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

const Home = () => {
  return (
    <Fragment>

      <div className="min-height-100vh flex-column">

        <Header />

        <main
          className="display-flex flex-grow-1"
          id="skip-header-target"
          style={{'minHeight': '400px'}}>
              
          <section className="container medium align-self-center text-align-center padding-y-4">

            <h1 className="banner-headline font-weight-bold margin-bottom-4">
              I seek to inspire empathy and inclusion through accessible experience and interaction design.
            </h1>

            <Link className="button button--outline button--has-icon" to="/portfolio">
                <span className="button__text">See my work</span>
                <span className="icon icon-arrow-right"></span>
            </Link>

          </section>

        </main>
        
        <Footer />
       
      </div>

    </Fragment>
  );
}

export default Home;