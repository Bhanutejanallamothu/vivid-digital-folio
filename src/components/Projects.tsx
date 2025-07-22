
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
            Bhanuteja's <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Here are some of my recent projects that showcase my skills in frontend development and more.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={project.id}
              className="group underwater-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up border-0"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-muted/50 to-muted">
                <iframe
                  src={project.previewUrl}
                  title={`${project.title} Preview`}
                  className="w-full h-full border-0 transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin allow-forms"
                  scrolling="no"
                  style={{
                    overflow: 'hidden',
                    msOverflowStyle: 'none',
                    scrollbarWidth: 'none'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                  <div className="p-4 w-full flex justify-end gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {project.demoLink !== "#" && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/95 backdrop-blur-sm hover:bg-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                        aria-label="View live demo"
                      >
                        <ExternalLink size={20} className="text-portfolio-dark" />
                      </a>
                    )}
                    {project.githubLink !== "#" && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/95 backdrop-blur-sm hover:bg-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
                        aria-label="View source code"
                      >
                        <Github size={20} className="text-portfolio-dark" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6 lg:p-8 space-y-4">
                <h3 className="text-xl lg:text-2xl font-display font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-xs lg:text-sm font-medium px-3 py-1.5 bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="#contact" 
            className="button-primary inline-flex items-center gap-2 text-lg px-8 py-4 hover:shadow-xl transition-all duration-300"
          >
            Interested in working together?
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
