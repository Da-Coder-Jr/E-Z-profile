
import { useEffect } from "react";
import { profileConfig } from "@/config/profileConfig";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const Index = () => {
  // Set document title
  useEffect(() => {
    document.title = profileConfig.name === "YOUR_NAME" 
      ? "John Doe | Personal Portfolio" 
      : `${profileConfig.name} | Personal Portfolio`;
  }, []);

  // Apply primary color from config
  useEffect(() => {
    const rootStyles = document.documentElement.style;
    const { primaryColor, secondaryColor, accentColor } = profileConfig.theme || {};
    
    if (primaryColor) {
      rootStyles.setProperty('--primary-color', primaryColor);
      // Update CSS variables used in the template
      document.documentElement.style.setProperty('--primary-color', primaryColor);
    }
    
    if (secondaryColor) {
      document.documentElement.style.setProperty('--secondary-color', secondaryColor);
    }
    
    if (accentColor) {
      document.documentElement.style.setProperty('--accent-color', accentColor);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <Footer />
      <ThemeSwitcher />
    </div>
  );
};

export default Index;
