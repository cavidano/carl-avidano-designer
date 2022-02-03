import React, { useEffect } from 'react';

import Thumbnail from '../components/portfolio/Thumbnail';

import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';


const Portfolio = () => {
  return (
    <div className="height-100 padding-3">

      <div class="grid grid--column-4 gap-2 height-100">

          <Thumbnail
              primaryColor="#0D5155"
              imgURL="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/9fd6f1135821675.61f2a103849c0.jpg"
          />

          <Thumbnail
              primaryColor="#FFCB62"
              imgURL="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/b434be82361669.5d1b5129d5ed3.jpg"
          />

          <Thumbnail
              primaryColor="#116738"
              imgURL="https://mir-s3-cdn-cf.behance.net/project_modules/fs/c099b770857177.5c405fe671a4b.jpg"
          />

          <Thumbnail
              primaryColor="#2C9DBB"
              imgURL="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/534b3870858499.5bb322ace30be.jpg"
          />
            
      </div>

    </div>
  )
}

export default Portfolio;
