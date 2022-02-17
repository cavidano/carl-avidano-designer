import React from 'react';

const Footer = () => {
  return (
    <footer className="container narrow font-size-sm overflow-hidden">

        <ul class="nav nav--horizontal justify-content-center">
            <li>
                <a href="#1">Portfolio</a>
            </li>
            <li>
                <a href="#1">Resume</a>
            </li>
            <li>
                <a href="#1">About</a>
            </li>
        </ul>

        <p className='padding-1 border-radius text-align-center margin-y-2'>
          &#169; 2022 - Carl Avidano. All Rights Reserved.
        </p>

    </footer>
  );
}

export default Footer;