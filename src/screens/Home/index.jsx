import React from 'react';

import TopBar from '../../components/TopBar';
import Banner from '../../components/Banner';
import ListProducts from '../../containers/ListProducts';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <>
      <TopBar />
      <Banner />
      <ListProducts />
      <Footer />
    </>
  );
};