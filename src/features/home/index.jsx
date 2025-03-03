import HeroSection from "@/components/layout/heroSection";
import ServicesList from "@/components/layout/services";


const HomeModule = () => {
 

  return (
    <section className="min-h-[calc(100vh-105px)] ">
    <HeroSection/>
    <ServicesList/>
    </section>
  );
};

export default HomeModule;
