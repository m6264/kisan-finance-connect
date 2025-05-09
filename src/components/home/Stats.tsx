
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    id: 1,
    title: "Projects Funded",
    value: "150+",
    description: "Successful agricultural projects across Pakistan",
    icon: "📊",
  },
  {
    id: 2,
    title: "Total Investment",
    value: "₨ 250M+",
    description: "Funded to support local farmers and agriculture",
    icon: "💰",
  },
  {
    id: 3,
    title: "Average ROI",
    value: "18%",
    description: "Return on investment across completed projects",
    icon: "📈",
  },
  {
    id: 4,
    title: "Community",
    value: "5,000+",
    description: "Farmers and investors connected through FarmLink",
    icon: "👨‍🌾",
  },
];

const Stats = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <Card key={stat.id} className="border text-center card-hover">
              <CardContent className="pt-6">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <h3 className="text-3xl font-bold text-farmlink-primary mb-2">{stat.value}</h3>
                <p className="text-lg font-medium mb-1">{stat.title}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
