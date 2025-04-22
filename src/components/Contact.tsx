
import { profileConfig } from "@/config/profileConfig";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Facebook 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { email, phone, location, socials } = profileConfig;

  // Check if contact section should be displayed
  if (
    (email === "N/A" || email === "") && 
    (phone === "N/A" || phone === "") && 
    (location === "N/A" || location === "") &&
    Object.values(socials).every(value => value === "N/A" || value === "")
  ) {
    return null;
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
            <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
            Contact Me
          </h2>
          <div className="mt-4 w-20 h-1 bg-blue-600 dark:bg-blue-400 rounded"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {email !== "N/A" && email !== "" && (
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 mr-4">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 dark:text-white">Email</h3>
                    <a href={`mailto:${email}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                      {email}
                    </a>
                  </div>
                </div>
              )}
              
              {phone !== "N/A" && phone !== "" && (
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 mr-4">
                    <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 dark:text-white">Phone</h3>
                    <a href={`tel:${phone.replace(/\s+/g, '')}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                      {phone}
                    </a>
                  </div>
                </div>
              )}
              
              {location !== "N/A" && location !== "" && (
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 mr-4">
                    <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 dark:text-white">Location</h3>
                    <p className="text-gray-700 dark:text-gray-300">{location}</p>
                  </div>
                </div>
              )}
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Connect With Me</h3>
              <div className="flex flex-wrap gap-3">
                {socials.github !== "N/A" && socials.github !== "" && (
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-12 w-12 rounded-full"
                    asChild
                  >
                    <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                )}
                
                {socials.linkedin !== "N/A" && socials.linkedin !== "" && (
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-12 w-12 rounded-full"
                    asChild
                  >
                    <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                )}
                
                {socials.twitter !== "N/A" && socials.twitter !== "" && (
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-12 w-12 rounded-full"
                    asChild
                  >
                    <a href={socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </Button>
                )}
                
                {socials.instagram !== "N/A" && socials.instagram !== "" && (
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-12 w-12 rounded-full"
                    asChild
                  >
                    <a href={socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <Instagram className="h-5 w-5" />
                    </a>
                  </Button>
                )}
                
                {socials.facebook !== "N/A" && socials.facebook !== "" && (
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="h-12 w-12 rounded-full"
                    asChild
                  >
                    <a href={socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      <Facebook className="h-5 w-5" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
