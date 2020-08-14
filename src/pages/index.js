import React from 'react';

import Posts from '../components/Posts';
import Layout from '../components/Layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Posts />
  </Layout>
);

export default IndexPage;
