import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calculator, 
  FileText, 
  PieChart, 
  Search, 
  Users, 
  Handshake,
  Phone
} from "lucide-react";

export default function Pricing() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const pricingPlans = [
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
      services: [
        { name: "Tax Returns", price: "150K - 6M UGX" },
        { name: "Tax Planning", price: "100K - 6M UGX" },
        { name: "Dispute Resolution", price: "300K - 6M UGX" },
        { name: "Compliance Support", price: "Custom Quote" }
      ],
      popular: true
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

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Service Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent pricing for all our professional services. Contact us for customized solutions tailored to your specific business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <Card key={index} className={`relative hover:shadow-lg transition-shadow ${plan.popular ? 'border-primary border-2' : 'border-transparent'}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-white">Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <div className="bg-secondary p-3 rounded-full w-fit mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{plan.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    {plan.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex justify-between items-center">
                        <span className="text-gray-600">{service.name}</span>
                        <span className="font-semibold text-gray-900">{service.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">All prices are in Ugandan Shillings (UGX). Custom packages available based on your specific requirements.</p>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg"
          >
            <Phone className="h-4 w-4 mr-2" />
            Discuss Custom Pricing
          </Button>
        </div>
      </div>
    </section>
  );
}
