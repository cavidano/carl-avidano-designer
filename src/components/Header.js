import React from 'react';

import { Link } from 'gatsby';

const Header = () => {

  const activeStyle = {
    'fontWeight': 'var(--body-font-weight-bold)',
    'textDecoration': 'underline'
  }

  return (
    <header className="padding-3 text-align-center" id="global-header">

        <Link className="display-inline-block margin-bottom-3" to="/">
            <p className='h5 margin-bottom-0'>Carl Avidano</p>
            <p className='font-size-md'>Senior UX Designer</p>
        </Link>

        <nav className="display-flex justify-content-center">

            <ul className="nav nav--divider nav--horizontal border border-radius font-size-md text-transform-uppercase">
                <li>
                    <Link
                        to="/portfolio"
                        activeStyle={activeStyle}
                        partiallyActive={true}>
                            Portfolio
                    </Link>
                </li>
                <li>
                    <Link to="#1"
                        to="/resume"
                        activeStyle={activeStyle}
                        partiallyActive={true}>
                            Resume
                    </Link>
                </li>
            </ul>

        </nav>

    </header>
  );
}

export default Header;
