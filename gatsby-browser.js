import React from 'react';

import './src/natura11y/modules/accents';

import './src/natura11y/modules/accessibility';

import Accordion from './src/natura11y/modules/accordion';

import Alerts from './src/natura11y/modules/alerts';

import './src/natura11y/modules/article';

import './src/natura11y/modules/aspect-ratios';

import './src/natura11y/modules/backdrops';

import './src/natura11y/modules/borders';

import './src/natura11y/modules/breakpoints';

import Buttons from './src/natura11y/modules/buttons';

import './src/natura11y/modules/cards';

import Collapse from './src/natura11y/modules/collapse';

import './src/natura11y/modules/color';

import './src/natura11y/modules/containers';

import './src/natura11y/modules/display';

import './src/natura11y/modules/document';

import './src/natura11y/modules/flex';

import Forms from './src/natura11y/modules/forms';

import './src/natura11y/modules/grid';

import './src/natura11y/modules/icons';

import './src/natura11y/modules/links';

import Modal from './src/natura11y/modules/modal';

import Navigation from './src/natura11y/modules/navigation';

import './src/natura11y/modules/opacity';

import './src/natura11y/modules/overflow';

import './src/natura11y/modules/position';

import './src/natura11y/modules/shadows';

import './src/natura11y/modules/sizing';

import './src/natura11y/modules/spacing';

import Tabs from './src/natura11y/modules/tabs';

import Tables from './src/natura11y/modules/tables';

import './src/natura11y/modules/typography';

import './src/natura11y/modules/z-index';

import './src/natura11y/theme';

import './src/icons/natura11y-icons.css';

import Layout from './src/components/Layout';

export const onRouteUpdate = () => {
  
  const accordion = new Accordion();
  accordion.init();
  
  const alerts = new Alerts();
  alerts.init();
  
  const buttons = new Buttons();
  buttons.init();
  
  const collapse = new Collapse();
  collapse.init();
  
  const forms = new Forms();
  forms.init();

  const modal = new Modal();
  modal.init();

  const navigation = new Navigation();
  navigation.init();

  const tabs = new Tabs();
  tabs.init();

  const tables = new Tables();
  tables.init();

}

export const wrapRootElement = ({ element, props }) => {
  return (
    <Layout {...props}>
        {element}
    </Layout>
  );
}