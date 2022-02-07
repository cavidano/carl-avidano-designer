import React from 'react';

import { Link } from 'gatsby';

const Header = () => {

  const activeStyle = {
    'fontWeight': 'var(--body-font-weight-bold)'
  }

  return (
    <header className="padding-3 text-align-center">

        <Link className="display-inline-block" to="/">
            <p className='h5 margin-bottom-0'>Carl Avidano</p>
            <p className='font-size-md'>Senior UX Designer</p>
        </Link>

        <nav className='margin-top-3'>

            <ul className="nav nav--horizontal justify-content-center font-size-md text-transform-uppercase">
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
                <li>
                    <Link to="#1"
                        to="#1"
                        activeStyle={activeStyle}
                        partiallyActive={true}>
                        Contact
                    </Link>
                </li>
            </ul>

        </nav>

    </header>
  );
}

export default Header;
