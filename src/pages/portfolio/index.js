import React, { Fragment, useEffect } from 'react';


import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Header from '../../components/Header.js';
import Preview from '../../components/portfolio/Preview';

const Portfolio = () => {

  return (

    <Fragment>

      <Header />

      <main className="height-100 padding-3" id="skip-header-target">

        <section className="container narrow medium--md wide--lg">

          <h1 className="screen-reader-only">Select Projects</h1>

          <div class="grid grid--column-2--md grid--column-4--lg gap-2">

              <Preview
                  primaryColor="#0D5155"
                  imgURL="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/9fd6f1135821675.61f2a103849c0.jpg"
                  slug="natura11y-inclusive-framework"
              />

              <Preview
                  primaryColor="#FFCB62"
                  imgURL="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/b434be82361669.5d1b5129d5ed3.jpg"
                  slug="cheetah-conservation-fund"
              />

              <Preview
                  primaryColor="#116738"
                  imgURL="https://mir-s3-cdn-cf.behance.net/project_modules/fs/c099b770857177.5c405fe671a4b.jpg"
              />

              <Preview
                  primaryColor="#2C9DBB"
                  imgURL="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/534b3870858499.5bb322ace30be.jpg"
              />
                
          </div>

        </section>

      </main>

    </Fragment>
    
  )
}

export default Portfolio;