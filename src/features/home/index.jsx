import HeroSection from "@/features/home/heroSection";
import ServicesList from "@/features/home/services";

const HomeModule = () => {
  return (
    <section className="min-h-[calc(100vh-105px)] ">
    <HeroSection/>
    <ServicesList/>
    </section>
  );
};

export default HomeModule;
