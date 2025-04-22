
import { profileConfig } from "@/config/profileConfig";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const Education = () => {
  const { education } = profileConfig;

  if (!education || education.length === 0 || education[0].degree === "N/A") return null;

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 mb-4">
            <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
            Education
          </h2>
          <div className="mt-4 w-20 h-1 bg-blue-600 dark:bg-blue-400 rounded"></div>
        </div>

        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <Card key={index} className="border-0 shadow-lg bg-white dark:bg-gray-800">
              <CardContent className="p-6">
                <div className="flex flex-col gap-1">
                  <h4 className="text-xl font-bold text-gray-800 dark:text-white">{edu.degree}</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.field}</p>
                  <p className="text-gray-700 dark:text-gray-300">{edu.institution}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
