
import { Award } from "lucide-react";

type Certification = {
  id: number;
  name: string;
  issuer: string;
  date: string;
  icon: string;
};

const Certifications = () => {
  const certifications: Certification[] = [
    {
      id: 1,
      name: "React Certification",
      issuer: "HackerRank",
      date: "2023",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/react.svg", 
    },
    {
      id: 2,
      name: "SQL Certification",
      issuer: "HackerRank",
      date: "2023",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/mysql.svg", 
    },
    {
      id: 3,
      name: "Design and Analysis of Algorithms",
      issuer: "NPTEL",
      date: "2023",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/coursera.svg", 
    },
    {
      id: 4,
      name: "Linguaskill - English Proficiency",
      issuer: "Cambridge",
      date: "2022",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/cambridge.svg", 
    },
  ];

  return (
    <section id="certifications" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">
            My <span className="text-portfolio-blue">Certifications</span>
          </h2>
          <p className="text-foreground max-w-2xl mx-auto">
            Professional certifications that validate my skills and knowledge.
          </p>
          <div className="w-24 h-1 bg-portfolio-blue mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={cert.id} 
              className="bg-card rounded-xl p-6 shadow-md flex flex-col items-center text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-portfolio-blue/10 rounded-full flex items-center justify-center mb-4">
                {cert.icon ? (
                  <img src={cert.icon} alt="" className="w-8 h-8 opacity-70" />
                ) : (
                  <Award className="w-8 h-8 text-portfolio-blue" />
                )}
              </div>
              <h3 className="font-display font-semibold text-lg mb-2 text-foreground">{cert.name}</h3>
              <p className="text-muted-foreground text-sm mb-1">{cert.issuer}</p>
              <p className="text-muted-foreground text-sm">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
