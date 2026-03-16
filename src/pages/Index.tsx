import HeroSection from "@/components/HeroSection";
import ServicesPreview from "@/components/ServicesPreview";
import AboutPreview from "@/components/AboutPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import TasteOfTemple from "./TastOfTemple";
import WhatWeOffer from "@/components/WhatWeOffer";
import Login from "./Login";
import ClientTemplate from "../pages/ClientTemplate";
import ImageSlider from "./ImageSlider";
const Index = () => {
  return (
    <>
      <Login/>
      <HeroSection />
      {/* <ImageSlider/> */}
      
      <WhatWeOffer/>
      {/* <ServicesPreview /> //top Notched */}
      {/* <AboutPreview /> */}
      <WhyChooseUs />
      <TasteOfTemple/>
      <Testimonials />

      <CTASection />
    </>
  );
};

export default Index;
