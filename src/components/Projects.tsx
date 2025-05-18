
import { useState } from "react";
import { ExternalLink, Link } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
};

const Projects = () => {
  // Sample projects data
  const projectsData: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform with shopping cart, user authentication, and payment processing integration.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 2,
      title: "Finance Dashboard",
      description: "Interactive dashboard that visualizes financial data with charts and provides insights for better decision making.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      tags: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, assignments, and progress tracking.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      tags: ["React", "Firebase", "Tailwind CSS", "Redux"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Custom portfolio website design for creatives to showcase their work with optimal visual impact.",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
      tags: ["HTML", "SCSS", "JavaScript", "GSAP"],
      demoLink: "#",
      codeLink: "#",
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
            Here are some of my recent projects that showcase my skills and approach to design and development.
          </p>
          <div className="w-24 h-1 bg-portfolio-blue mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
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
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 hover:bg-white p-2 rounded-full transition-all"
                    >
                      <Link size={18} className="text-portfolio-dark" />
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
