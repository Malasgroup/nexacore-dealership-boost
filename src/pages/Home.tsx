
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check, ChevronRight, ArrowRight } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import { 
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";

const Home = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState({
    services: false,
    benefits: false,
    testimonials: false,
    cta: false
  });
  
  // Array of hero background images for the slider
  const heroImages = [
    "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
  ];
  
  const [currentSlide, setCurrentSlide] = useState(0);

  const servicesRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

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

    createObserver(servicesRef, "services");
    createObserver(benefitsRef, "benefits");
    createObserver(testimonialsRef, "testimonials");
    createObserver(ctaRef, "cta");

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <>
      {/* Hero Section with Slider */}
      <section 
        className="relative min-h-screen flex items-center justify-center py-20"
      >
        {/* Background Slider */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Carousel className="w-full h-full" opts={{ loop: true }}>
            <CarouselContent className="h-full">
              {heroImages.map((image, index) => (
                <CarouselItem key={index} className="h-full w-full">
                  <div 
                    className="h-full w-full bg-black"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      transition: "opacity 1s ease-in-out",
                    }}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block">THE FASTEST</span>
                <span className="block heading-underline">GROWING</span>
                <span className="block">TECHNOLOGY FOR</span>
                <span className="block">DEALERSHIPS</span>
              </h1>
              <p className="text-xl md:text-2xl opacity-90">
                Premium marketing solutions designed specifically for automotive dealerships that drive traffic, leads, and sales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigate("/contact")}
                  className="btn-primary"
                >
                  Get Started
                </button>
                <button 
                  onClick={() => navigate("/about")}
                  className="btn-outline"
                >
                  Learn More
                </button>
              </div>
              <div className="flex items-center space-x-2 pt-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white bg-gray-800"
                      style={{
                        backgroundImage: `url(https://i.pravatar.cc/100?img=${30 + i})`,
                        backgroundSize: "cover",
                      }}
                    />
                  ))}
                </div>
                <p className="text-sm opacity-90">
                  Joined by <span className="font-bold">500+</span> dealerships worldwide
                </p>
              </div>
            </div>

            <div className="lg:mt-0 animate-slide-in-right">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50" ref={servicesRef}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block heading-underline">
              Our Marketing Services
            </h2>
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
              Comprehensive marketing solutions tailored specifically for automotive dealerships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Marketing",
                description: "Strategic online campaigns that drive qualified traffic to your dealership website and showroom.",
                icon: "🚀",
              },
              {
                title: "Lead Generation",
                description: "Targeted strategies to capture high-quality leads from customers ready to purchase vehicles.",
                icon: "🎯",
              },
              {
                title: "Social Media Management",
                description: "Engaging content and community management across the platforms your customers use daily.",
                icon: "📱",
              },
              {
                title: "SEO Optimization",
                description: "Increase your visibility in local searches and dominate the market in your area.",
                icon: "🔍",
              },
              {
                title: "Content Strategy",
                description: "Compelling vehicle descriptions, blog posts, and videos that convert browsers into buyers.",
                icon: "✍️",
              },
              {
                title: "Analytics & Reporting",
                description: "Transparent reporting on all campaigns with actionable insights for continuous improvement.",
                icon: "📊",
              },
            ].map((service, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-lg shadow-lg p-8 text-center card-hover ${
                  isVisible.services ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="text-4xl mb-4 block">{service.icon}</span>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <button className="mt-6 text-orange-500 font-medium inline-flex items-center group">
                  Learn more 
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white" ref={benefitsRef}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                alt="Dealership Marketing" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold heading-underline">
                Why Choose Nexacore For Your Dealership
              </h2>
              <p className="text-xl text-gray-600">
                We understand the unique challenges dealerships face in today's competitive market. Here's why hundreds of dealerships trust us:
              </p>
              
              <ul className="space-y-4">
                {[
                  "Industry expertise with proven results for dealerships",
                  "Customized strategies tailored to your dealership's specific goals",
                  "Transparent reporting with clear ROI metrics",
                  "Dedicated account manager with automotive expertise",
                  "One week free trial to demonstrate our value",
                  "International reach with localized marketing approaches",
                ].map((item, index) => (
                  <li 
                    key={index} 
                    className={`flex items-start ${
                      isVisible.benefits ? "animate-fade-in" : "opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <Check className="w-6 h-6 text-orange-500 mr-2 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                onClick={() => navigate("/about")}
                className="btn-primary mt-4"
              >
                Discover More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        className="py-20 bg-black text-white" 
        ref={testimonialsRef}
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold heading-underline">
              What Our Clients Say
            </h2>
            <p className="text-xl opacity-80 mt-6 max-w-3xl mx-auto">
              Hear from dealership owners who have transformed their marketing with Nexacore
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "John Smith",
                role: "Owner, Smith Motors",
                image: "https://i.pravatar.cc/100?img=32",
                quote: "Since partnering with Nexacore, our lead quality has improved dramatically. We're selling more cars with less wasted effort.",
              },
              {
                name: "Lisa Johnson",
                role: "Marketing Director, Johnson Auto Group",
                image: "https://i.pravatar.cc/100?img=27",
                quote: "The team at Nexacore understands the automotive industry. Their strategies have helped us dominate our local market.",
              },
              {
                name: "Michael Chang",
                role: "General Manager, Chang Luxury Imports",
                image: "https://i.pravatar.cc/100?img=56",
                quote: "The ROI from Nexacore's campaigns has been exceptional. They've become an essential part of our dealership's growth.",
              },
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-lg ${
                  isVisible.testimonials ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-xl">{testimonial.name}</h3>
                    <p className="opacity-70">{testimonial.role}</p>
                  </div>
                </div>
                <p className="opacity-90 italic">{testimonial.quote}</p>
                <div className="mt-4 flex">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500 text-white" ref={ctaRef}>
        <div className="container mx-auto px-4 md:px-6">
          <div className={`text-center max-w-3xl mx-auto ${
            isVisible.cta ? "animate-fade-in" : "opacity-0"
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Accelerate Your Dealership's Growth?
            </h2>
            <p className="text-xl mb-8">
              Try our premium marketing services for 1 week, absolutely free. No commitment, no credit card required.
            </p>
            <button 
              onClick={() => navigate("/contact")} 
              className="btn-secondary inline-flex items-center text-xl"
            >
              Get Your Free Week
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
