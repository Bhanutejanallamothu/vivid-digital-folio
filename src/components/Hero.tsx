
import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-blue/5 via-portfolio-purple/5 to-portfolio-indigo/5"></div>
      
      {/* Animated Gradient Circles */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-portfolio-blue/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-portfolio-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-portfolio-indigo/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-xl md:text-2xl font-medium text-gray-600 mb-3">
            Hello, I'm
          </h2>
          <h1 className="heading-xl mb-6">
            <span className="text-gradient">Your Name</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto mb-8">
            A passionate designer & developer creating beautiful digital experiences
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="#projects" className="button-primary w-full sm:w-auto">
              View My Work
            </a>
            <a href="#contact" className="button-secondary w-full sm:w-auto">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-gray-500 hover:text-portfolio-blue transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
