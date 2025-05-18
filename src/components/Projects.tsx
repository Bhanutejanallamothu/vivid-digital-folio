
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink: string;
  demoLink: string;
};

const Projects = () => {
  // Projects data
  const projectsData: Project[] = [
    {
      id: 1,
      title: "News Aggregator",
      description: "A full-stack app that aggregates news using APIs. Designed entire frontend architecture, implemented responsive UI and state management using Redux and React.",
      image: "https://images.unsplash.com/photo-1495020689067-958852a7765e",
      tags: ["React.js", "Redux", "API Integration", "Responsive Design"],
      githubLink: "https://github.com/Bhanutejanallamothu/newsaggregator-.git",
      demoLink: "#",
    },
    {
      id: 2,
      title: "Gov-Connect",
      description: "A platform built to connect citizens to government schemes. Created a seamless frontend experience using React, along with dynamic form handling and API integration.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
      tags: ["React.js", "API Integration", "Form Handling", "UI/UX"],
      githubLink: "https://github.com/Bhanutejanallamothu/Gov-Connect.git",
      demoLink: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing skills and projects. Built with React, Tailwind CSS, and modern animation techniques for a smooth user experience.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      tags: ["React.js", "Tailwind CSS", "Responsive Design"],
      githubLink: "#",
      demoLink: "#",
    },
  ];

  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">
            My <span className="text-portfolio-blue">Projects</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in frontend development and more.
          </p>
          <div className="w-24 h-1 bg-portfolio-blue mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projectsData.map((project, index) => (
            <div 
              key={project.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full flex justify-end gap-3">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 hover:bg-white p-2 rounded-full transition-all"
                    >
                      <ExternalLink size={18} className="text-portfolio-dark" />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 hover:bg-white p-2 rounded-full transition-all"
                    >
                      <Github size={18} className="text-portfolio-dark" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-3 text-portfolio-dark">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-medium px-2 py-1 bg-gray-100 rounded-full text-gray-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#contact" className="button-secondary">
            Interested in working together?
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
