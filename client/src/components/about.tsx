import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Trophy, Users, Shield, Award, Heart } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function About() {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "Maintaining the highest ethical standards in all our professional dealings"
    },
    {
      icon: Trophy,
      title: "Excellence",
      description: "Delivering superior quality services that exceed client expectations"
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Building lasting relationships through trust and collaboration"
    },
    {
      icon: Award,
      title: "Innovation",
      description: "Embracing modern solutions to solve complex financial challenges"
    }
  ];

  const [counters, setCounters] = useState({
    years: 0,
    clients: 0,
    satisfaction: 0
  });
  
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  const achievements = [
    { number: counters.years, suffix: "+", label: "Years of Excellence", target: 10 },
    { number: counters.clients, suffix: "+", label: "Clients Served", target: 500 },
    { number: counters.satisfaction, suffix: "%", label: "Client Satisfaction", target: 98 },
    { number: "24/7", suffix: "", label: "Support Available", target: null }
  ];

  // Intersection Observer to trigger animation when stats come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Animate years counter
          let yearsCount = 0;
          const yearsInterval = setInterval(() => {
            yearsCount += 1;
            setCounters(prev => ({ ...prev, years: yearsCount }));
            if (yearsCount >= 10) clearInterval(yearsInterval);
          }, 100);

          // Animate clients counter
          let clientsCount = 0;
          const clientsInterval = setInterval(() => {
            clientsCount += 25;
            setCounters(prev => ({ ...prev, clients: clientsCount }));
            if (clientsCount >= 500) {
              setCounters(prev => ({ ...prev, clients: 500 }));
              clearInterval(clientsInterval);
            }
          }, 50);

          // Animate satisfaction counter
          let satisfactionCount = 0;
          const satisfactionInterval = setInterval(() => {
            satisfactionCount += 2;
            setCounters(prev => ({ ...prev, satisfaction: satisfactionCount }));
            if (satisfactionCount >= 98) {
              setCounters(prev => ({ ...prev, satisfaction: 98 }));
              clearInterval(satisfactionInterval);
            }
          }, 30);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-50 rounded-full blur-3xl opacity-40"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-medium text-sm mb-6">
            About Our Company
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Unique Management Associates
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A trusted partner in financial excellence, delivering comprehensive accounting and business solutions 
            across Uganda with unwavering commitment to quality and innovation.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Vision & Mission */}
          <div className="space-y-8">
            <div className="space-y-8">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Eye className="h-5 w-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">Our Vision</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    To be the leading accounting firm in East Africa, recognized for our expertise, 
                    integrity, and commitment to delivering exceptional client service that drives business growth.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-yellow-50 to-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="bg-yellow-100 p-2 rounded-lg">
                      <Target className="h-5 w-5 text-yellow-600" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">Our Mission</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    To provide innovative and comprehensive financial solutions that exceed our clients' expectations, 
                    while fostering a culture of excellence, teamwork, and continuous professional development.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-red-50 to-white">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="bg-red-100 p-2 rounded-lg">
                      <Heart className="h-5 w-5 text-red-600" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">Our Goal</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed font-medium text-lg">
                    "To make our customers say wow"
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right: Company Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Professional team meeting representing collaborative approach to financial services"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-2xl p-6 border">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-gray-600">Clients Served</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our every action and define our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-2">
                  <CardHeader className="text-center pb-4">
                    <div className="bg-gradient-to-br from-primary to-blue-700 p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Statistics Section */}
        <div ref={statsRef} className="bg-gradient-to-r from-primary to-blue-800 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-8">Our Track Record</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400">
                  {typeof achievement.number === 'string' ? achievement.number : achievement.number}{achievement.suffix}
                </div>
                <div className="text-blue-100 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
