
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profileConfig } from "@/config/profileConfig";

const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(profileConfig.theme?.darkMode || false);
  
  useEffect(() => {
    // Apply the theme on component mount
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);
  
  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  
  return (
    <Button
      variant="outline"
      size="icon"
      className="fixed z-50 bottom-4 right-4 h-10 w-10 rounded-full shadow-lg bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-500" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] text-blue-700" />
      )}
    </Button>
  );
};

export default ThemeSwitcher;
