import React, { useMemo, useState } from "react";
import Hero from "../components/Hero/Hero";
import AboutUs from "./AboutUs/Aboutus";
import ProductCategories from "../components/ProductCategories/ProductCategories";
import ProductGrid from "../components/ProductGrid/ProductGrid";
import { products } from "../data/products";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const featuredProducts = useMemo(() => products.slice(0, 4), []);

  return (
    <>
      <Hero />
      <AboutUs />
      <ProductCategories
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <ProductGrid
        selectedCategory={selectedCategory}
        featuredProducts={featuredProducts}
      />
    </>
  );
};

export default Home;
