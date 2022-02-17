import React from 'react';

const Footer = (props) => {

  const { backToTop } = props;
  
  return (
    <footer className="container narrow font-size-sm text-align-center overflow-hidden">

      {backToTop && (

      <a class="button button--has-icon" href="#" data-scroll="top">
          <span class="icon icon-double-chevron-up"></span>
          <span class="button__text">Back to top</span>
      </a>
   
      )}
  
      <p className='padding-1 border-radius margin-y-2'>
        &#169; 2022 - Carl Avidano. All Rights Reserved.
      </p>

    </footer>
  );
}

Footer.defaultProps = {
  backToTop: false
}

export default Footer;