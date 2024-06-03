import React from "react";
import fs from 'fs';
import path from 'path';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Advantages from "@/components/Advantages";
import Testimonial from "@/components/Testimonial";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

const fetchData = async () => {
  const filePath = path.join(process.cwd(), 'constants', 'data.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(jsonData);
  return data;
};

const Home = async () => {

  const data = await fetchData();

  return (
    <section className="w-[80%] mt-10 mx-auto flex flex-col items-center">
      <Navbar />
      <Hero data={data.hero}/>
      <Features />
      <Advantages />
      <Testimonial />
      <Faq />
      <Cta />
      <Footer />
    </section>
  );
}

export default Home