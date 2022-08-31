import React, { Fragment, useState } from 'react';

import { Helmet } from 'react-helmet';

const Layout = ({ children }) => {

  const [themeMode, setThemeMode] = useState('dark');

  const handleThemeModeClick = () => {
    if(themeMode === 'light') {
      setThemeMode('dark');
    } else if(themeMode === 'dark') {
      setThemeMode('light');
    }
  }

  return (
    <Fragment>

      <Helmet htmlAttributes={{ lang: 'en' }}>
        <link rel="stylesheet" href="https://use.typekit.net/tij3tin.css"></link>
      </Helmet>

      <div className="theme-canvas" data-mode={themeMode} id="top-of-page">

        <div className="mode-toggle-button-container">
          <button
            className="button theme-canvas button--icon-only"
            onClick={handleThemeModeClick}>
              <span className="icon icon-mode-light-dark" aria-hidden="true"></span>
          </button>
        </div>

        {children}

      </div>

    </Fragment>
  );
}

export default Layout;