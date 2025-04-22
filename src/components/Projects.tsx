
import { profileConfig } from "@/config/profileConfig";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GalleryHorizontal, ExternalLink } from "lucide-react";

const Projects = () => {
  const { projects } = profileConfig;

  if (!projects || projects.length === 0 || projects[0].title === "N/A") return null;

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
            <GalleryHorizontal className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
            Projects
          </h2>
          <div className="mt-4 w-20 h-1 bg-blue-600 dark:bg-blue-400 rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-0 shadow-lg bg-white dark:bg-gray-800 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader className="px-6 pt-6 pb-0">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{project.title}</h3>
              </CardHeader>
              <CardContent className="px-6 py-4">
                <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
              </CardContent>
              <CardFooter className="px-6 pt-0 pb-6 flex flex-col items-start">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-300 border-blue-200 dark:border-blue-700">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                >
                  View Project <ExternalLink className="ml-1 h-4 w-4" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
