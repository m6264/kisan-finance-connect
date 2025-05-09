
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const steps = [
  {
    id: 1,
    title: "For Farmers",
    description: "Register, verify your identity, and submit your agricultural project for approval.",
    icon: "👨‍🌾",
    color: "bg-green-100 dark:bg-green-900",
  },
  {
    id: 2,
    title: "For Investors",
    description: "Browse projects, analyze ROI potential, and invest in agricultural opportunities.",
    icon: "💼",
    color: "bg-blue-100 dark:bg-blue-900",
  },
  {
    id: 3,
    title: "Project Management",
    description: "Track progress with regular updates, photos, and milestone achievements.",
    icon: "📊",
    color: "bg-amber-100 dark:bg-amber-900",
  },
  {
    id: 4,
    title: "Harvest & Returns",
    description: "When projects complete, profits are distributed based on investment agreements.",
    icon: "🌾",
    color: "bg-teal-100 dark:bg-teal-900",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How FarmLink Works</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A transparent process that connects farmers with investors while ensuring security and trust for all parties.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <Card key={step.id} className="border-none shadow-md card-hover">
              <CardContent className="pt-6">
                <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto`}>
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild className="bg-farmlink-secondary hover:bg-blue-700">
            <Link to="/about">Learn More About Our Process</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
