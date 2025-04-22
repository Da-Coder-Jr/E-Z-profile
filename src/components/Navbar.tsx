
import { useState, useEffect } from "react";
import { profileConfig } from "@/config/profileConfig";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const { name } = profileConfig;
  const displayName = name === "YOUR_NAME" ? "John Doe" : name;

  // Update scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define navigation links
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  // Filter out sections that are disabled in config
  const filteredNavLinks = navLinks.filter(link => {
    const sectionId = link.href.replace("#", "");
    if (sectionId === "skills") return profileConfig.skills && profileConfig.skills.length > 0 && profileConfig.skills[0].name !== "N/A";
    if (sectionId === "experience") return profileConfig.experience && profileConfig.experience.length > 0 && profileConfig.experience[0].title !== "N/A";
    if (sectionId === "education") return profileConfig.education && profileConfig.education.length > 0 && profileConfig.education[0].degree !== "N/A";
    if (sectionId === "projects") return profileConfig.projects && profileConfig.projects.length > 0 && profileConfig.projects[0].title !== "N/A";
    if (sectionId === "about") return profileConfig.bio !== "N/A" && profileConfig.bio !== "";
    if (sectionId === "contact") {
      const { email, phone, location, socials } = profileConfig;
      return !(
        (email === "N/A" || email === "") && 
        (phone === "N/A" || phone === "") && 
        (location === "N/A" || location === "") &&
        Object.values(socials).every(value => value === "N/A" || value === "")
      );
    }
    return true;
  });

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "py-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md" 
            : "py-5 bg-transparent"
        }`}
      >
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex items-center justify-between">
            <a href="#" className={`text-xl font-bold ${isScrolled ? "text-gray-800 dark:text-white" : "text-gray-800 dark:text-white"}`}>
              {displayName}
            </a>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {filteredNavLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`transition-colors duration-200 ${
                    isScrolled 
                      ? "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400" 
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-800 dark:text-white" />
              ) : (
                <Menu className="h-6 w-6 text-gray-800 dark:text-white" />
              )}
            </Button>
          </div>
        </div>
      </header>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-gray-900 pt-20">
          <nav className="container px-4 py-8 mx-auto">
            <div className="flex flex-col space-y-4">
              {filteredNavLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-lg font-medium text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
