import React, { useEffect } from 'react';

import { useStaticQuery, graphql } from 'gatsby';

import { Helmet } from 'react-helmet';

import '../icons/natura11y-icons.css';

import '../natura11y/modules/accents';
import '../natura11y/modules/accents';
import '../natura11y/modules/article';
import '../natura11y/modules/aspect-ratios';
import '../natura11y/modules/backdrops';
import '../natura11y/modules/borders';
import '../natura11y/modules/breakpoints';
import '../natura11y/modules/cards';
import '../natura11y/modules/color';
import '../natura11y/modules/containers';
import '../natura11y/modules/display';
import '../natura11y/modules/flex';
import '../natura11y/modules/grid';
import '../natura11y/modules/icons';
import '../natura11y/modules/links';
import '../natura11y/modules/opacity';
import '../natura11y/modules/overflow';
import '../natura11y/modules/position';
import '../natura11y/modules/shadows';
import '../natura11y/modules/sizing';
import '../natura11y/modules/spacing';
import '../natura11y/modules/typography';
import '../natura11y/modules/z-index/index';

import Accessibility from '../natura11y/modules/accessibility';
import Accordion from '../natura11y/modules/accordion';
import Alerts from '../natura11y/modules/alerts';
import Buttons from '../natura11y/modules/buttons';
import Collapse from '../natura11y/modules/collapse';
import Document from '../natura11y/modules/document';
import Forms from '../natura11y/modules/forms';
import Modal from '../natura11y/modules/modal';
import Navigation from '../natura11y/modules/navigation';
import Tabs from '../natura11y/modules/tabs';
import Tables from '../natura11y/modules/tables';

// import '../natura11y/modules/theme';


const Layout = ({ children }) => {

  useEffect(() => {

    new Accessibility();
    new Accordion();
    new Alerts();
    new Buttons();
    new Collapse();
    new Document();
    new Forms();
    new Modal();
    new Navigation();
    new Tabs();
    new Tables();

  }, []);

  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          title
          version
        }
      }
    }
  `);

  const title = data.site.siteMetadata.title;
  const version = data.site.siteMetadata.version;

  return (
    <div className="Layout">
      
      <Helmet htmlAttributes={{
        lang: 'en',
      }}>
        <title>{title}</title>
      </Helmet>

      <main className="content" id="skip-header-target">

      {children}

      </main>
      
    </div>
  );
}

export default Layout;