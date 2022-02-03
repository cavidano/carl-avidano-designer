import React, { useEffect } from 'react';

import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      
      <div className="container wide align-self-center text-align-center">

        <h1 className="banner-headline">
          I seek to inspire empathy and inclusion through accessible experience and interaction design.
        </h1>

        <a class="button button--outline font-size-lg margin-y-4" href="#1">
          Fucking Hire Me Already
        </a>

      </div>

    </Layout>
  )
}

export default Home;
