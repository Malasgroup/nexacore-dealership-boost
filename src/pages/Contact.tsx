
import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  const [isVisible, setIsVisible] = useState({
    form: false,
    info: false,
    map: false,
  });

  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '-50px'
    };

    const createObserver = (
      ref: React.RefObject<HTMLDivElement>,
      key: keyof typeof isVisible
    ) => {
      if (!ref.current) return;
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [key]: true }));
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);
      
      observer.observe(ref.current);
      observers.push(observer);
    };

    createObserver(formRef, "form");
    createObserver(infoRef, "info");
    createObserver(mapRef, "map");

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-black text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Contact Us
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90 animate-slide-up">
            Get in touch with our dealership marketing experts and discover how we can help your business grow.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white" ref={formRef}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className={isVisible.form ? "animate-slide-in-left" : "opacity-0"}>
              <h2 className="text-3xl font-bold mb-6 heading-underline">
                Send Us A Message
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Have questions about our services? Ready to start your free trial? Fill out the form below and one of our dealership specialists will get back to you within 24 hours.
              </p>
              
              <ContactForm />
            </div>
            
            <div className={`space-y-8 ${isVisible.form ? "animate-slide-in-right" : "opacity-0"}`} ref={infoRef}>
              <div>
                <h2 className="text-3xl font-bold mb-6 heading-underline">
                  Contact Information
                </h2>
                <p className="text-xl text-gray-700 mb-8">
                  You can also reach out to us directly using the following information:
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <Mail className="w-6 h-6 text-orange-500" />,
                    title: "Email Us",
                    info: "info@nexacoreagency.com",
                    description: "For general inquiries and information",
                  },
                  {
                    icon: <Phone className="w-6 h-6 text-orange-500" />,
                    title: "Call Us",
                    info: "+1 (555) 123-4567",
                    description: "Monday to Friday, 9am - 5pm EST",
                  },
                  {
                    icon: <MapPin className="w-6 h-6 text-orange-500" />,
                    title: "Visit Us",
                    info: "Nexacore Headquarters",
                    description: "123 Marketing Ave, New York, NY 10001",
                  },
                  {
                    icon: <Clock className="w-6 h-6 text-orange-500" />,
                    title: "Business Hours",
                    info: "Monday - Friday: 9am - 5pm EST",
                    description: "Saturday - Sunday: Closed",
                  },
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex items-start p-6 bg-gray-50 rounded-lg shadow-md ${
                      isVisible.info ? "animate-fade-in" : "opacity-0"
                    }`} 
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{item.title}</h3>
                      <p className="text-orange-500 font-medium">{item.info}</p>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-100" ref={mapRef}>
        <div className="container mx-auto px-4 md:px-6">
          <div className={isVisible.map ? "animate-fade-in" : "opacity-0"}>
            <h2 className="text-3xl font-bold mb-8 text-center heading-underline">
              Our Location
            </h2>
            <div className="h-96 w-full rounded-lg overflow-hidden shadow-lg">
              {/* Placeholder for a map - replace with actual map integration */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500 text-xl">Interactive Map Would Be Displayed Here</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Trial CTA */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Try Our Services For Free
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We're offering a 1-week free trial of our dealership marketing services. No obligations, no commitments - just results.
          </p>
          <div className="flex justify-center">
            <button className="btn-secondary text-xl">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
