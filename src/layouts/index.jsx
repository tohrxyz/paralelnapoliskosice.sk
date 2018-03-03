import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { Header } from './Header';
import { Footer } from './Footer';
import '../styles/global.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Paralelná Polis Košice"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div>{children()}</div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
