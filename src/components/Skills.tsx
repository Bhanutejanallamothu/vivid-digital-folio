
import { useEffect } from "react";
import { Progress } from "@/components/ui/progress";

type Skill = {
  name: string;
  level: number;
  category: "frontend" | "backend" | "design" | "tools";
};

const Skills = () => {
  // Sample skills data
  const skillsData: Skill[] = [
    { name: "HTML & CSS", level: 95, category: "frontend" },
    { name: "JavaScript", level: 90, category: "frontend" },
    { name: "React", level: 88, category: "frontend" },
    { name: "TypeScript", level: 82, category: "frontend" },
    { name: "Node.js", level: 75, category: "backend" },
    { name: "Express", level: 80, category: "backend" },
    { name: "MongoDB", level: 75, category: "backend" },
    { name: "UI Design", level: 85, category: "design" },
    { name: "Figma", level: 90, category: "design" },
    { name: "Git", level: 85, category: "tools" },
    { name: "Docker", level: 70, category: "tools" },
    { name: "AWS", level: 65, category: "tools" },
  ];

  const categories = [
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "design", name: "Design" },
    { id: "tools", name: "Tools" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-progress");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".skill-progress").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">
            My <span className="text-portfolio-blue">Skills</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
          <div className="w-24 h-1 bg-portfolio-blue mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {categories.map((category) => (
            <div key={category.id} className="animate-fade-in-up">
              <h3 className="heading-md mb-6 text-portfolio-dark">{category.name}</h3>
              <div className="space-y-5">
                {skillsData
                  .filter((skill) => skill.category === category.id)
                  .map((skill, index) => (
                    <div key={index} className="skill-progress">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
