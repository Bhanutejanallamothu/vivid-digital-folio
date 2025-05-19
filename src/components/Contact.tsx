
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create form data to send via mailto
      const mailtoLink = `mailto:nallamothubhanuteja110@gmail.com?subject=${encodeURIComponent(
        formData.subject || "Contact from Portfolio Website"
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Show success message
      toast({
        title: "Email client opened!",
        description: "Please send the email from your mail client to complete the process.",
      });
      
      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an issue opening your email client. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">
            Get In <span className="text-portfolio-blue">Touch</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
          <div className="w-24 h-1 bg-portfolio-blue mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 animate-fade-in-up">
            <div className="bg-white rounded-xl shadow-md p-8 h-full">
              <h3 className="heading-md mb-6 text-portfolio-dark">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 bg-portfolio-blue/10 p-3 rounded-full">
                    <Mail size={20} className="text-portfolio-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <a href="mailto:nallamothubhanuteja110@gmail.com" className="text-gray-600 hover:text-portfolio-blue transition-colors">
                      nallamothubhanuteja110@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4 bg-portfolio-blue/10 p-3 rounded-full">
                    <Phone size={20} className="text-portfolio-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Phone</h4>
                    <a href="tel:+919392465787" className="text-gray-600 hover:text-portfolio-blue transition-colors">
                      +91 93924 65787
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4 bg-portfolio-blue/10 p-3 rounded-full">
                    <MapPin size={20} className="text-portfolio-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Location</h4>
                    <p className="text-gray-600">
                      Khammam Rural, Telangana
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="font-semibold text-lg mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://linkedin.com/in/bhanuteja-nallamothu-4" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-portfolio-blue transition-colors flex items-center justify-center text-gray-600 hover:text-white"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path></svg>
                  </a>
                  <a 
                    href="https://github.com/Bhanutejanallamothu" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-portfolio-blue transition-colors flex items-center justify-center text-gray-600 hover:text-white"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="heading-md mb-6 text-portfolio-dark">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-portfolio-blue/50 focus:border-portfolio-blue/50"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-portfolio-blue/50 focus:border-portfolio-blue/50"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-portfolio-blue/50 focus:border-portfolio-blue/50"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-portfolio-blue/50 focus:border-portfolio-blue/50"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="button-primary flex items-center justify-center w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send size={16} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
