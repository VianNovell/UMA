import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Professional team meeting representing collaborative approach to financial services"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">About Unique Management Associates</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We are a professional accounting firm dedicated to providing exceptional financial services and solutions to individuals, small businesses, and corporations across Uganda. Our expertise, integrity, and commitment to excellence set us apart in the industry.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Our Vision</h3>
                  <p className="text-muted-foreground">To be the leading accounting firm in the region, recognized for our expertise, integrity, and commitment to delivering exceptional client service.</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">To provide innovative and comprehensive financial solutions that exceed our clients' expectations, while fostering a culture of excellence, teamwork, and continuous learning.</p>
                </CardContent>
              </Card>
            </div>
            
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Our Key Objectives</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start">
                    <Star className="text-yellow-500 mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                    <span>Deliver high-quality accounting, taxation, and financial management services</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="text-yellow-500 mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                    <span>Build long-term relationships through exceptional service and support</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="text-yellow-500 mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                    <span>Attract and retain top talent in the industry</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="text-yellow-500 mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                    <span>Maintain the highest level of professionalism and ethical standards</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
