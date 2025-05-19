
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check, Users, Globe, ArrowRight, Settings } from "lucide-react";

const About = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState({
    mission: false,
    team: false,
    approach: false,
    stats: false,
    cta: false
  });

  const missionRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const approachRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

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

    createObserver(missionRef, "mission");
    createObserver(teamRef, "team");
    createObserver(approachRef, "approach");
    createObserver(statsRef, "stats");
    createObserver(ctaRef, "cta");

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative pt-32 pb-20 bg-black text-white"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            About Nexacore Marketing
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90 animate-slide-up">
            The international marketing agency dedicated to transforming dealership growth through innovative strategies and industry expertise.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white" ref={missionRef}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={isVisible.mission ? "animate-slide-in-left" : "opacity-0"}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-underline">
                Our Mission
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                At Nexacore Marketing, we're on a mission to revolutionize how dealerships attract, engage, and convert potential customers. We combine industry expertise with cutting-edge marketing strategies to help automotive dealerships thrive in a competitive landscape.
              </p>
              <p className="text-lg text-gray-600">
                Founded by automotive and marketing veterans, our team understands the unique challenges dealerships face. We've built our agency on the principle that dealerships deserve marketing partners who truly understand their business, not generic solutions that miss the mark.
              </p>
            </div>
            
            <div className={isVisible.mission ? "animate-slide-in-right" : "opacity-0"}>
              <img 
                src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Nexacore Mission" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50" ref={teamRef}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold heading-underline">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
              The principles that guide everything we do at Nexacore Marketing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Dealership Focused",
                description: "Everything we do is centered around helping dealerships succeed in their unique markets.",
                icon: <Settings className="w-12 h-12 text-orange-500" />,
              },
              {
                title: "Data-Driven Approach",
                description: "We let results and analytics guide our decisions, ensuring measurable ROI for every campaign.",
                icon: <Globe className="w-12 h-12 text-orange-500" />,
              },
              {
                title: "Continuous Innovation",
                description: "We constantly explore new technologies and strategies to keep our clients ahead of the competition.",
                icon: <Users className="w-12 h-12 text-orange-500" />,
              },
            ].map((value, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-lg shadow-lg p-8 text-center card-hover ${
                  isVisible.team ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white" ref={approachRef}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={isVisible.approach ? "animate-slide-in-left order-2 lg:order-1" : "opacity-0 order-2 lg:order-1"}>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Nexacore Approach" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
            
            <div className={`order-1 lg:order-2 ${isVisible.approach ? "animate-slide-in-right" : "opacity-0"}`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-underline">
                Our Approach
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                We believe that effective marketing for dealerships requires a tailored approach that understands the automotive customer journey.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Comprehensive analysis of your dealership's current market position",
                  "Custom strategy development based on your specific inventory and goals",
                  "Multi-channel campaign execution targeting your ideal customers",
                  "Ongoing optimization based on real-time performance metrics",
                  "Regular reporting with actionable insights for continuous improvement",
                  "Strategic partnership focused on your long-term growth",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="w-6 h-6 text-orange-500 mr-2 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        className="py-20 bg-black text-white"
        ref={statsRef}
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold heading-underline">
              Our Impact
            </h2>
            <p className="text-xl opacity-80 mt-6 max-w-3xl mx-auto">
              The results we've achieved for dealerships around the world
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Dealerships Served" },
              { value: "35%", label: "Average Lead Increase" },
              { value: "42%", label: "ROI Improvement" },
              { value: "15+", label: "Countries" },
            ].map((stat, index) => (
              <div 
                key={index} 
                className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center ${
                  isVisible.stats ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-lg opacity-80">{stat.label}</div>
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
              Partner With Nexacore Marketing
            </h2>
            <p className="text-xl mb-8">
              Take advantage of our 1-week free trial and see the difference our dealership-focused marketing can make for your business.
            </p>
            <button 
              onClick={() => navigate("/contact")} 
              className="btn-secondary inline-flex items-center text-xl"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
