
import { profileConfig } from "@/config/profileConfig";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const { experience } = profileConfig;

  if (!experience || experience.length === 0 || experience[0].title === "N/A") return null;

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
            <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
            Experience
          </h2>
          <div className="mt-4 w-20 h-1 bg-blue-600 dark:bg-blue-400 rounded"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-400 before:via-blue-500 before:to-blue-600 before:dark:from-blue-700 before:dark:via-blue-600 before:dark:to-blue-400">
            {experience.map((job, index) => (
              <div key={index} className="relative flex items-start md:justify-center group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-blue-500 dark:border-blue-400 shadow shrink-0 md:order-1 md:group-even:translate-x-1/2 md:group-odd:-translate-x-1/2">
                  <span className="h-3 w-3 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                </div>
                
                <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] shadow-lg border-0 bg-white dark:bg-gray-800 md:order-none md:group-even:order-1">
                  <CardContent className="p-6">
                    <div className="flex flex-col gap-1">
                      <h4 className="text-xl font-bold text-gray-800 dark:text-white">{job.title}</h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">{job.company}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{job.period}</p>
                      <p className="text-gray-700 dark:text-gray-300">{job.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
