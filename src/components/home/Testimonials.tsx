
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    quote: "FarmLink helped me secure funding for my rice farm when traditional banks wouldn't. The platform is easy to use, and I received funding within weeks of approval.",
    name: "Muhammad Asif",
    role: "Rice Farmer, Sindh",
    image: "/placeholder.svg",
    userType: "farmer",
  },
  {
    id: 2,
    quote: "As an investor with no agricultural background, FarmLink makes it easy to diversify my portfolio with farming projects. The ROI has been consistently above market average.",
    name: "Nadia Khan",
    role: "Tech Professional & Investor",
    image: "/placeholder.svg",
    userType: "investor",
  },
  {
    id: 3,
    quote: "The transparent tracking system gives me confidence that my investment is being used productively. I can see real progress photos and updates from the farm.",
    name: "Ahmed Raza",
    role: "Small Business Owner & Investor",
    image: "/placeholder.svg",
    userType: "investor",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-farmlink-light dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Community Says</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Hear from farmers and investors who have experienced the benefits of FarmLink.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-none shadow-md card-hover">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
                
                <blockquote>
                  <p className="text-gray-600 dark:text-gray-400 italic">
                    "{testimonial.quote}"
                  </p>
                </blockquote>
                
                <div className="mt-4 pt-4 border-t flex justify-center">
                  <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                    testimonial.userType === "farmer" 
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" 
                      : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  }`}>
                    {testimonial.userType === "farmer" ? "Farmer" : "Investor"}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
