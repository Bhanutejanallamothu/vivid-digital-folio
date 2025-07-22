
import { useEffect } from "react";
import { Progress } from "@/components/ui/progress";

type Skill = {
  name: string;
  level: number;
  category: "frontend" | "backend" | "tools" | "other";
};

const Skills = () => {
  // Skills data based on your requirements
  const skillsData: Skill[] = [
    { name: "React.js", level: 90, category: "frontend" },
    { name: "JavaScript", level: 85, category: "frontend" },
    { name: "TypeScript", level: 80, category: "frontend" },
    { name: "Tailwind CSS", level: 85, category: "frontend" },
    { name: "Redux", level: 75, category: "frontend" },
    { name: "Material UI", level: 80, category: "frontend" },
    { name: "Java", level: 75, category: "backend" },
    { name: "Spring Boot", level: 70, category: "backend" },
    { name: "SQL", level: 80, category: "backend" },
    { name: "DBMS", level: 75, category: "backend" },
    { name: "Git", level: 85, category: "tools" },
    { name: "REST APIs", level: 80, category: "tools" },
    { name: "Postman", level: 75, category: "tools" },
    { name: "Problem Solving", level: 90, category: "other" },
    { name: "Agile Methodology", level: 80, category: "other" },
  ];

  const categories = [
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "tools", name: "Tools" },
    { id: "other", name: "Other Skills" },
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
    <section id="skills" className="section-padding bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {categories.map((category) => (
            <div key={category.id} className="animate-fade-in-up">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-semibold mb-4 md:mb-6 text-foreground">{category.name}</h3>
              <div className="space-y-4 md:space-y-5">
                {skillsData
                  .filter((skill) => skill.category === category.id)
                  .map((skill, index) => (
                    <div key={index} className="skill-progress">
                      <div className="mb-2 flex justify-between items-center">
                        <span className="text-sm sm:text-base font-medium text-foreground">{skill.name}</span>
                        <span className="text-xs sm:text-sm text-muted-foreground">{skill.level}%</span>
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
