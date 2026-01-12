'use client'
import Image from "next/image";
import { HeroSection } from "./components/template/hero";
import { FeaturedProducts } from "./components/template/feature";
import { LifestyleSection } from "./components/template/lifestyle";
import CategorySection from "./components/template/category";
import { ExperienceSection } from "./components/template/experience";
import { ServicesSection } from "./components/template/service";
import TestimonialSection from "./components/template/testimonials";
import { InstagramSection } from "./components/template/instagram";
import { NewsletterSection } from "./components/template/newslater";
import { Footer } from "./components/template/footer";

export default function Home() {
  return (
    <div className=" min-h-screen pt-24 lg:px-12 bg-white">
      <HeroSection />
      <FeaturedProducts/>
      <LifestyleSection/>
      <CategorySection/>
      <ExperienceSection/>
      <ServicesSection/>
      <TestimonialSection/>
      <InstagramSection/>
      <NewsletterSection/>
      <Footer/>
   
    </div>
  );
}
