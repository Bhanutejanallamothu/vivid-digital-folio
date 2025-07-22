
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
      
      {/* Animated Gradient Circles */}
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 left-1/4 sm:left-1/3 w-40 h-40 sm:w-64 sm:h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
      
      <div className="container mx-auto z-10 text-center max-w-4xl">
        <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-muted-foreground mb-2 md:mb-3">
            Hello, I'm
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-4 md:mb-6">
            <span className="text-gradient">Nallamothu BhanuTeja</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-8 leading-relaxed">
            A passionate frontend developer creating beautiful digital experiences with React
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4">
            <a href="#projects" className="button-primary w-full sm:w-auto text-center">
              View My Work
            </a>
            <a href="#contact" className="button-secondary w-full sm:w-auto text-center">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs sm:text-sm mb-2">Scroll Down</span>
          <ArrowDown size={16} className="sm:w-5 sm:h-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
