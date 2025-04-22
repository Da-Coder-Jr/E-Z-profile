
import { profileConfig } from "@/config/profileConfig";
import { Heart } from "lucide-react";

const Footer = () => {
  const { name } = profileConfig;
  const displayName = name === "YOUR_NAME" ? "John Doe" : name;
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-gray-900 dark:bg-black text-white">
      <div className="container px-4 md:px-6 mx-auto text-center">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
          <p className="mb-4 md:mb-0">
            &copy; {currentYear} {displayName}. All rights reserved.
          </p>
          <div className="flex items-center">
            <span className="mr-2">Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
