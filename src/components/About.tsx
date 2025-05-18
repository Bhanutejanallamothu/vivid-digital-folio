
import { User, Star, Award } from "lucide-react";

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
          {/* Image Section */}
          <div className="relative animate-fade-in-up">
            <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Professional Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-portfolio-blue rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-portfolio-purple rounded-full -z-10"></div>
          </div>

          {/* Content Section */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h3 className="heading-md mb-4 text-portfolio-dark">
              Frontend Developer & UI/UX Designer
            </h3>
            <p className="text-gray-600 mb-6">
              I'm a passionate web developer and designer with over 5 years of experience creating
              modern, responsive websites and applications. I combine technical expertise with 
              creative design to build engaging digital experiences that users love.
            </p>
            <p className="text-gray-600 mb-8">
              My goal is to craft clean, efficient code and intuitive interfaces that solve real
              problems. I'm constantly learning new technologies and techniques to stay at the 
              forefront of web development.
            </p>

            {/* Key Points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <User size={24} className="text-portfolio-blue mr-3" />
                <div>
                  <h4 className="font-semibold">Experience</h4>
                  <p className="text-sm text-gray-500">5+ Years</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <Star size={24} className="text-portfolio-blue mr-3" />
                <div>
                  <h4 className="font-semibold">Projects</h4>
                  <p className="text-sm text-gray-500">50+ Completed</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <Award size={24} className="text-portfolio-blue mr-3" />
                <div>
                  <h4 className="font-semibold">Awards</h4>
                  <p className="text-sm text-gray-500">10+ Received</p>
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
