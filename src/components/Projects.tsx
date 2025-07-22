import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  previewUrl: string;
  tags: string[];
  githubLink: string;
  demoLink: string;
};

const Projects = () => {
  const projectsData: Project[] = [
    {
      id: 1,
      title: "News Aggregator",
      description: "A full-stack app that aggregates news using APIs. Designed entire frontend architecture, implemented responsive UI and state management using Redux and React.",
      previewUrl: "https://preview--vivid-digital-folio.lovable.app/",
      tags: ["React.js", "Redux", "API Integration", "Responsive Design"],
      githubLink: "https://github.com/Bhanutejanallamothu/newsaggregator-.git",
      demoLink: "https://bhanutejanallamothu.github.io/newsaggregator-/",
    },
    {
      id: 2,
      title: "Gov-Connect",
      description: "A platform built to connect citizens to government schemes. Created a seamless frontend experience using React, along with dynamic form handling and API integration.",
      previewUrl: "https://preview--vivid-digital-folio.lovable.app/",
      tags: ["React.js", "API Integration", "Form Handling", "UI/UX"],
      githubLink: "https://github.com/Bhanutejanallamothu/Gov-Connect.git",
      demoLink: "https://bhanutejanallamothu.github.io/Gov-Connect/",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing skills and projects. Built with React, Tailwind CSS, and modern animation techniques for a smooth user experience.",
      previewUrl: "https://preview--vivid-digital-folio.lovable.app/",
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
              <div className="relative aspect-video overflow-hidden bg-gray-100">
                <iframe
                  src={project.previewUrl}
                  title={`${project.title} Preview`}
                  className="w-full h-full border-0 transition-transform duration-500 group-hover:scale-105 hide-scroll"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end pointer-events-none">
                  <div className="p-4 w-full flex justify-end gap-3">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 hover:bg-white p-2 rounded-full transition-all pointer-events-auto"
                    >
                      <ExternalLink size={18} className="text-portfolio-dark" />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 hover:bg-white p-2 rounded-full transition-all pointer-events-auto"
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
