import React from 'react';
import Hero from '../../components/Hero/Hero';
import ProductCategories from '../../components/ProductCategories/ProductCategories';
import ProductGrid from '../../components/ProductGrid/ProductGrid';

const Home = () => {
  return (
    <>
      <Hero />
      <ProductCategories />
      <ProductGrid />
    </>
  );
};

export default Home;
