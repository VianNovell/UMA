import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  TrendingUp, 
  FileBarChart, 
  Settings, 
  Rocket, 
  Shield, 
  Handshake
} from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Improve Financial Performance",
      description: "Enhance your business profitability with our expert financial analysis and strategic planning services.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: FileBarChart,
      title: "Enhanced Reporting",
      description: "Get accurate, timely financial reports and management accounting that drives informed decision-making.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Settings,
      title: "Optimized HR Processes",
      description: "Streamline your human resources operations with our comprehensive HR management and compliance services.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Rocket,
      title: "Increased Efficiency",
      description: "Boost your operational efficiency through our proven financial systems and process optimization.",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: Shield,
      title: "Reduced Costs & Risks",
      description: "Minimize financial risks and reduce operational costs with our comprehensive audit and compliance services.",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Handshake,
      title: "Competitive Advantage",
      description: "Gain a competitive edge with our unique approach combining accounting, taxation, and management expertise.",
      color: "bg-teal-100 text-teal-600"
    }
  ];

  return (
    <section className="py-20 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Unique Management Associates?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the benefits of partnering with Uganda's trusted financial services provider.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="bg-white shadow-sm text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`p-4 rounded-full w-fit mx-auto mb-4 ${benefit.color}`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
