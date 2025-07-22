
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">
            My <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Professional certifications that validate my skills and knowledge.
          </p>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={cert.id} 
              className="bg-card border border-border rounded-xl p-4 md:p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3 md:mb-4">
                {cert.icon ? (
                  <img src={cert.icon} alt="" className="w-6 h-6 md:w-8 md:h-8 opacity-70" />
                ) : (
                  <Award className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                )}
              </div>
              <h3 className="font-display font-semibold text-base md:text-lg mb-2 text-foreground leading-tight">{cert.name}</h3>
              <p className="text-muted-foreground text-xs md:text-sm mb-1">{cert.issuer}</p>
              <p className="text-muted-foreground text-xs md:text-sm">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
