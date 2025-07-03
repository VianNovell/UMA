import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, FileText, PieChart, Search, Users, Handshake, Phone } from "lucide-react";

const pricingData = [
  {
    icon: Calculator,
    title: "Accounting Services",
    services: [
      { name: "Financial Statements", price: "300K - 6M UGX" },
      { name: "Budgeting & Forecasting", price: "300K - 6M UGX" },
      { name: "Financial Analysis", price: "300K - 6M UGX" },
      { name: "Stock Counts", price: "500K - 5M UGX" }
    ]
  },
  {
    icon: FileText,
    title: "Taxation Services",
    popular: true,
    services: [
      { name: "Tax Returns", price: "150K - 6M UGX" },
      { name: "Tax Planning", price: "100K - 6M UGX" },
      { name: "Dispute Resolution", price: "300K - 6M UGX" },
      { name: "Compliance Support", price: "Custom Quote" }
    ]
  },
  {
    icon: PieChart,
    title: "Financial Management",
    services: [
      { name: "Financial Planning", price: "150K - 2M UGX" },
      { name: "Investment Management", price: "150K - 2M UGX" },
      { name: "Retirement Planning", price: "150K - 2M UGX" },
      { name: "Advisory Services", price: "Custom Quote" }
    ]
  },
  {
    icon: Search,
    title: "Auditing Services",
    services: [
      { name: "Operational Audits", price: "300K - 4.5M UGX" },
      { name: "Compliance Audits", price: "300K - 4.5M UGX" },
      { name: "Financial Audits", price: "Custom Quote" },
      { name: "Forensic Audits", price: "Custom Quote" }
    ]
  },
  {
    icon: Users,
    title: "HR Services",
    services: [
      { name: "Recruitment Services", price: "Percentage" },
      { name: "Payroll Processing", price: "Percentage" },
      { name: "Training & Development", price: "300K - 4.5M UGX" },
      { name: "Job Descriptions", price: "100K UGX" }
    ]
  },
  {
    icon: Handshake,
    title: "Consulting Services",
    services: [
      { name: "Business Setup", price: "Custom Quote" },
      { name: "Odoo Training", price: "500K UGX" },
      { name: "Advertising & Marketing", price: "100K UGX" },
      { name: "Operational Consulting", price: "Custom Quote" }
    ]
  }
];

export default function PricingSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Service Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparent pricing for all our professional services. Contact us for customized solutions tailored to your specific business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingData.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className={`relative ${category.popular ? 'border-primary border-2' : 'border-border hover:border-primary/20'} transition-colors`}>
                {category.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-6">
                  <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-4">
                    <Icon className="text-primary h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4 mb-6">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex justify-between items-center">
                        <span className="text-muted-foreground text-sm">{service.name}</span>
                        <span className="font-semibold text-foreground text-sm">{service.price}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">All prices are in Ugandan Shillings (UGX). Custom packages available based on your specific requirements.</p>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3"
          >
            <Phone className="mr-2 h-4 w-4" />
            Discuss Custom Pricing
          </Button>
        </div>
      </div>
    </section>
  );
}
