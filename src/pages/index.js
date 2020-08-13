import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Header from '../components/Header';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <h1>Hi people</h1>
  </Layout>
);

export default IndexPage;
