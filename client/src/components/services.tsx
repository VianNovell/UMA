import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calculator, 
  FileText, 
  PieChart, 
  Search, 
  Users, 
  Handshake,
  Check,
  ArrowRight
} from "lucide-react";

export default function Services() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      icon: Calculator,
      title: "Accounting Services",
      items: [
        "Financial statements preparation",
        "Budgeting and forecasting",
        "Financial analysis and planning",
        "Comprehensive stock counts"
      ]
    },
    {
      icon: FileText,
      title: "Taxation Services",
      items: [
        "Filing personal and corporate tax returns",
        "Tax planning and consulting",
        "Tax dispute resolution",
        "Compliance management"
      ]
    },
    {
      icon: PieChart,
      title: "Financial Management",
      items: [
        "Financial planning and advisory",
        "Investment management",
        "Retirement planning",
        "Business financial consulting"
      ]
    },
    {
      icon: Search,
      title: "Auditing & Assurance",
      items: [
        "Financial statement audits",
        "Operational audits",
        "Compliance audits",
        "Forensic audits"
      ]
    },
    {
      icon: Users,
      title: "HR Services",
      items: [
        "Recruitment and talent management",
        "Benefits administration",
        "Training and development"
      ]
    },
    {
      icon: Handshake,
      title: "Business Consulting",
      items: [
        "Business setup and registration",
        "Financial management consulting",
        "Operational improvement",
        "Odoo training and consultation"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-yellow-50 rounded-full blur-3xl opacity-40"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-medium text-sm mb-6">
            Professional Excellence
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your Business with
            <span className="block text-primary">Expert Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive financial solutions designed to elevate your business. From strategic accounting to tax optimization, we deliver results that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 bg-white border-0 rounded-2xl overflow-hidden hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="bg-gradient-to-br from-primary to-blue-700 p-4 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-8">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <Check className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="text-gray-600 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="ghost"
                    className="text-primary hover:text-primary/80 p-0 h-auto font-semibold group-hover:translate-x-1 transition-transform"
                    onClick={() => scrollToSection("pricing")}
                  >
                    View Pricing <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
