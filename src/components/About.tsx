
import { User, Star, Award } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">
            About <span className="text-portfolio-blue">Me</span>
          </h2>
          <div className="w-24 h-1 bg-portfolio-blue mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section with Frame */}
          <div className="relative animate-fade-in-up">
            <div className="relative max-w-md mx-auto">
              {/* Decorative frame elements */}
              <div className="absolute inset-0 border-8 border-portfolio-blue rounded-2xl transform rotate-3 -z-10"></div>
              <div className="absolute inset-0 border-8 border-portfolio-purple rounded-2xl transform -rotate-2 -z-10"></div>
              
              {/* Profile image */}
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="Nallamothu BhanuTeja"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-portfolio-blue rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-portfolio-purple rounded-full -z-10"></div>
          </div>

          {/* Content Section */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h3 className="heading-md mb-4 text-portfolio-dark">
              Frontend Developer & CS Student
            </h3>
            <p className="text-gray-600 mb-6">
              Dedicated and driven B.Tech Computer Science student with a passion for frontend 
              development and building user-focused web apps using React.js, Tailwind CSS, and TypeScript.
            </p>
            <p className="text-gray-600 mb-8">
              Strong understanding of responsive design, REST APIs, and modern web technologies. 
              Experienced in project development, UI/UX design, and collaborative software engineering.
            </p>

            {/* Key Points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <User size={24} className="text-portfolio-blue mr-3" />
                <div>
                  <h4 className="font-semibold">Education</h4>
                  <p className="text-sm text-gray-500">B.Tech CSE</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <Star size={24} className="text-portfolio-blue mr-3" />
                <div>
                  <h4 className="font-semibold">Projects</h4>
                  <p className="text-sm text-gray-500">Full-Stack Apps</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <Award size={24} className="text-portfolio-blue mr-3" />
                <div>
                  <h4 className="font-semibold">Certifications</h4>
                  <p className="text-sm text-gray-500">Multiple Fields</p>
                </div>
              </div>
            </div>

            <a href="#contact" className="button-primary">
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
