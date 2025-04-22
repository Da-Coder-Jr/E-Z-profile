
import { profileConfig } from "@/config/profileConfig";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

const About = () => {
  const { bio } = profileConfig;

  if (bio === "N/A") return null;

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
            <User className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">About Me</h2>
          <div className="mt-4 w-20 h-1 bg-blue-600 dark:bg-blue-400 rounded"></div>
        </div>
        
        <Card className="border-0 shadow-lg bg-white dark:bg-gray-800 max-w-3xl mx-auto">
          <CardContent className="p-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {bio === "YOUR_BIO_HERE. Write a short description about yourself, your skills and what you do. This will appear in the About section." ? 
                "Hello! I'm a passionate developer with experience in creating modern web applications. I specialize in frontend technologies and love building intuitive user interfaces that provide great user experience. I'm constantly learning new technologies and improving my skills to deliver high-quality solutions." : 
                bio}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
