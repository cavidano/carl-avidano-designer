import React from 'react';

import { Link } from 'gatsby';

const Header = () => {
  return (
    <header className="padding-3 text-align-center">

        <Link to="/">
            <p className='h5 margin-bottom-0'>Carl Avidano</p>
            <p className='font-size-md'>Senior UX Designer</p>
        </Link>

        <nav className='margin-top-3'>

            <ul className="nav nav--horizontal justify-content-center font-size-md text-transform-uppercase">
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="#1">Resume</Link>
                </li>
                <li>
                    <Link to="#1">Contact</Link>
                </li>
            </ul>

        </nav>

    </header>
  );
}

export default Header;
