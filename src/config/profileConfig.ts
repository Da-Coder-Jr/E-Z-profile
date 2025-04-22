
// Profile Configuration
// Fill in your information or put "N/A" to disable a section

export const profileConfig = {
  // Basic Info
  name: "YOUR_NAME",
  title: "YOUR_TITLE", // e.g. "Frontend Developer"
  photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  bio: "YOUR_BIO_HERE. Write a short description about yourself, your skills and what you do. This will appear in the About section.",
  
  // Contact Information
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567", // Set to "N/A" to hide
  location: "City, Country",
  
  // Social Links (set to "N/A" to hide)
  socials: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    instagram: "N/A", // Example of disabled social link
    facebook: "N/A"
  },
  
  // Skills (set to [] to hide section)
  skills: [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "Node.js", level: 70 },
    { name: "UI/UX Design", level: 65 }
  ],
  
  // Experience (set to [] to hide section)
  experience: [
    {
      title: "Senior Frontend Developer",
      company: "Example Tech Inc.",
      period: "2020 - Present",
      description: "Lead frontend development for various client projects. Implemented modern React applications with TypeScript and state management."
    },
    {
      title: "Frontend Developer",
      company: "Web Solutions Ltd.",
      period: "2017 - 2020",
      description: "Developed responsive websites and applications for clients in various industries. Worked with React, Vue, and vanilla JavaScript."
    },
    {
      title: "Junior Web Developer",
      company: "Digital Agency",
      period: "2015 - 2017",
      description: "Created and maintained websites for small businesses using WordPress and custom HTML/CSS/JS solutions."
    }
  ],
  
  // Education (set to [] to hide section)
  education: [
    {
      degree: "Master's Degree",
      field: "Computer Science",
      institution: "University Example",
      period: "2013 - 2015"
    },
    {
      degree: "Bachelor's Degree",
      field: "Web Development",
      institution: "Tech Institute",
      period: "2010 - 2013"
    }
  ],
  
  // Projects (set to [] to hide section)
  projects: [
    {
      title: "E-commerce Platform",
      description: "A fully functional online store with product catalog, cart, and checkout functionality.",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400",
      link: "https://example.com/project1",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Task Management App",
      description: "A productivity application for managing tasks, projects and team collaboration.",
      imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=400",
      link: "https://example.com/project2",
      technologies: ["React", "Redux", "Firebase"]
    },
    {
      title: "Portfolio Website",
      description: "A customizable personal portfolio website template with multiple themes.",
      imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=400",
      link: "https://example.com/project3",
      technologies: ["HTML/CSS", "JavaScript", "GSAP"]
    }
  ],
  
  // Theme Configuration
  theme: {
    primaryColor: "#3B82F6", // Blue
    secondaryColor: "#10B981", // Green
    accentColor: "#8B5CF6", // Purple
    darkMode: false // Set to true for dark mode by default
  }
};
