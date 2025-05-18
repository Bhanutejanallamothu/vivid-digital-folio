
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-portfolio-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-display font-bold">
              Bhanu<span className="text-portfolio-blue">Teja</span>
            </h2>
            <p className="text-gray-400 mt-2">
              Frontend Developer & CS Student
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="bg-portfolio-blue/20 hover:bg-portfolio-blue/30 text-white p-3 rounded-full transition-colors mb-4"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Nallamothu BhanuTeja. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
