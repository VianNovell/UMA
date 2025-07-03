import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, FileText, PieChart, Search, Users, Handshake, Check, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Accounting Services",
    items: [
      "Financial statement preparation",
      "Budgeting and forecasting",
      "Financial analysis and planning",
      "Comprehensive stock counts"
    ]
  },
  {
    icon: FileText,
    title: "Taxation Services",
    items: [
      "Personal and corporate tax returns",
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
      "Payroll processing",
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

export default function ServicesSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Professional Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive financial solutions designed to meet the evolving needs of individuals, small businesses, and corporations across Uganda.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="bg-muted/50 hover:shadow-lg transition-shadow border-0">
                <CardContent className="p-8">
                  <div className="bg-primary/10 p-3 rounded-full w-fit mb-6">
                    <Icon className="text-primary h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
                  <ul className="text-muted-foreground space-y-2 mb-6">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <Check className="text-green-500 mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="link"
                    onClick={() => scrollToSection("contact")}
                    className="text-primary hover:text-primary/80 p-0 h-auto font-semibold"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
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
