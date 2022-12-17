import React from "react";
import { FeaturedProducts, Hero, Services, Contact } from "../components";
import heroBcg from "../assets/hero-bcg.jpeg";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};

export default HomePage;
