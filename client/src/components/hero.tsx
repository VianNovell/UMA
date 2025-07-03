import { Button } from "@/components/ui/button";
import { Phone, Mail, TrendingUp, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [counter, setCounter] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Comprehensive Accounting",
      subtitle: "Solutions",
      tagline: "for Your Business",
      description: "Transform your business with professional accounting, tax consultancy, and management services. We deliver excellence across Uganda with personalized solutions.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080",
      bgGradient: "from-blue-900 to-blue-800",
      badge: "Uganda's Premier Accounting Firm",
      stats: [
        { value: counter, label: "Happy Clients", suffix: "+" },
        { value: "10", label: "Years Experience", suffix: "+" },
        { value: "24/7", label: "Support", suffix: "" }
      ]
    },
    {
      id: 2,
      title: "Driving Business",
      subtitle: "Growth",
      tagline: "Through Excellence",
      description: "Expert financial guidance and strategic consulting to elevate your business to new heights. Our comprehensive solutions drive measurable results.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080",
      bgGradient: "from-purple-900 to-blue-900",
      badge: "Professional Excellence",
      stats: [
        { value: "98", label: "Client Satisfaction", suffix: "%" },
        { value: "24/7", label: "Expert Support", suffix: "" }
      ]
    },
    {
      id: 3,
      title: "Strategic Tax",
      subtitle: "Consulting",
      tagline: "& Compliance",
      description: "Navigate complex tax regulations with confidence. Our expert team ensures full compliance while optimizing your tax strategy for maximum efficiency.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080",
      bgGradient: "from-green-900 to-blue-900",
      badge: "Tax Excellence",
      stats: [
        { value: "100", label: "Compliance Rate", suffix: "%" },
        { value: "500", label: "Tax Returns Filed", suffix: "+" }
      ]
    },
    {
      id: 4,
      title: "Complete Business",
      subtitle: "Solutions",
      tagline: "Under One Roof",
      description: "From accounting to business consulting, we provide comprehensive services that help your business thrive in today's competitive marketplace.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080",
      bgGradient: "from-indigo-900 to-purple-900",
      badge: "Full-Service Partner",
      stats: [
        { value: "5", label: "Service Categories", suffix: "+" },
        { value: "50", label: "Business Solutions", suffix: "+" }
      ]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  // Counter animation
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const targetValue = 100;
    const increment = targetValue / (duration / 50); // Update every 50ms
    
    const timer = setInterval(() => {
      setCounter(prev => {
        const nextValue = prev + increment;
        if (nextValue >= targetValue) {
          clearInterval(timer);
          return targetValue;
        }
        return nextValue;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Slider Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100' 
                : 'opacity-0'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="max-w-4xl mx-auto px-6 text-center text-white">
                <div className="space-y-8 animate-fade-in">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                    {slide.title}
                    <span className="block text-yellow-400">{slide.subtitle}</span>
                  </h1>
                  
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                    {slide.description}
                  </p>

                  <div className="pt-4">
                    <Button
                      onClick={() => scrollToSection("contact")}
                      className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-10 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 hover:scale-105"
                    >
                      Start Your Journey
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Dots */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-12 h-3 bg-yellow-400' 
                    : 'w-3 h-3 bg-white/40 hover:bg-white/60'
                } rounded-full`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Side Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={() => scrollToSection("services")}
          className="flex flex-col items-center text-white/80 hover:text-white transition-all duration-300 group"
          aria-label="Scroll to services"
        >
          <div className="w-8 h-8 border-2 border-white/40 rounded-full flex items-center justify-center group-hover:border-yellow-400 transition-colors animate-bounce">
            <ChevronDown className="h-4 w-4 group-hover:text-yellow-400 transition-colors" />
          </div>
        </button>
      </div>
    </section>
  );
}
