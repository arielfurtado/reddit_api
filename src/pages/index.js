import React, { useState, useEffect, useCallback } from 'react';

import Posts from '../components/Posts';
import LoadMore from '../components/LoadMore';
import Header from '../components/Header';
import Layout from '../components/Layout';
import SEO from '../components/seo';

import HttpService from '../service/http';

const IndexPage = () => {
 const [content, GetContent] = useState({ next: true });
 const [loaded, setLoaded] = useState(false);
 const [loading, setLoading] = useState(true);
 const [typePost, setTypePost] = useState('hot');
 const [postLimit, setPostLimit] = useState({ hot: 10, new: 10, rising: 10 });

 const HandleLimit = (type) => {
  setLoading(true);
  if (postLimit[type] <= 100) {
   setPostLimit((prevState) => ({ ...prevState, [type]: postLimit[type] + 10 }));
  }
 };

 const getData = useCallback(
  async (type) => {
   const data = await HttpService.get(type, postLimit[type]);
   const { posts, next } = data;
   GetContent((prevState) => ({ ...prevState, posts, next }));
   setLoaded(true);
   setLoading(false);
  },
  [postLimit]
 );

 const handlePost = (type) => {
  if (type !== typePost) {
   setTypePost(type);
   getData(type);
  }
 };

 useEffect(() => {
  async function loadData() {
   await getData(typePost);
  }
  if (content.next) loadData();
 }, [postLimit, getData, typePost, content.next]);

 return (
  <Layout>
   <SEO title="Home" />
   <Header activeItem={typePost} handle={(type) => handlePost(type)} />
   {loaded && (
    <>
     <Posts posts={content.posts} />
    </>
   )}
   {postLimit[typePost] <= 100 && <LoadMore loadMore={() => HandleLimit(typePost)} loading={loading} />}
  </Layout>
 );
};

export default IndexPage;
