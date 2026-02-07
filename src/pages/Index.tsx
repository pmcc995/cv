import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import AboutSection from "@/components/sections/AboutSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <SkillsSection />
      <AboutSection />
    </Layout>
  );
};

export default Index;
