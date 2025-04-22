
import { profileConfig } from "@/config/profileConfig";
import { ArrowDown } from "lucide-react";

const Header = () => {
  const { name, title, photoUrl } = profileConfig;

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="text-center p-6 max-w-3xl mx-auto">
        {photoUrl !== "N/A" && (
          <div className="mb-8 flex justify-center">
            <div className="h-40 w-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src={photoUrl} 
                alt={`${name}'s photo`} 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        )}
        
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-800 dark:text-white">
          {name === "YOUR_NAME" ? "John Doe" : name}
        </h1>
        
        {title !== "N/A" && (
          <h2 className="text-2xl md:text-3xl mb-8 text-blue-600 dark:text-blue-400 font-medium">
            {title === "YOUR_TITLE" ? "Frontend Developer" : title}
          </h2>
        )}
        
        <div className="mt-12 animate-bounce">
          <a 
            href="#about" 
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="Scroll down"
          >
            <ArrowDown className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
