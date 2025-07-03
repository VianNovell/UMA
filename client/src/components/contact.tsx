import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to take your business to the next level? Contact us today for a consultation and discover how we can help guide your business home.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Contact Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-secondary p-4 rounded-full flex-shrink-0 mt-1">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 mb-3 text-lg">Office Location</h4>
                  <div className="space-y-1">
                    <p className="text-gray-600 text-base">Level 4 Baba TV Complex, Ntinda</p>
                    <p className="text-gray-600 text-base">Kisaasi Road, Kampala, Uganda</p>
                    <p className="text-gray-600 text-base">P.O BOX 16951, Kampala</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary p-4 rounded-full flex-shrink-0 mt-1">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 mb-3 text-lg">Phone Number</h4>
                  <div className="space-y-1">
                    <p className="text-gray-600 text-base">+256-706-789012</p>
                    <p className="text-gray-600 text-base">+256-752-123456</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary p-4 rounded-full flex-shrink-0 mt-1">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 mb-3 text-lg">Email Address</h4>
                  <div className="space-y-1">
                    <a 
                      href="mailto:info.uniquemanagement@gmail.com" 
                      className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200 block text-base"
                    >
                      info.uniquemanagement@gmail.com
                    </a>
                    <a 
                      href="mailto:info.uniquemanagementassociates@gmail.com" 
                      className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200 block text-base"
                    >
                      info.uniquemanagementassociates@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary p-4 rounded-full flex-shrink-0 mt-1">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 mb-3 text-lg">Business Hours</h4>
                  <div className="space-y-1">
                    <p className="text-gray-600 text-base">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600 text-base">Saturday: 8:00 AM - 1:00 PM (Half Day)</p>
                    <p className="text-gray-600 text-base">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400"
                alt="Professional business team working on financial documents and analysis"
                className="rounded-xl shadow-lg w-full h-auto max-w-2xl mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}