
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { mockProjects } from "@/lib/mock-data";
import { formatCurrency } from "@/lib/utils";

const FeaturedProjects = () => {
  // Get 3 active or funded projects
  const featuredProjects = mockProjects
    .filter((project) => ["active", "funded"].includes(project.status))
    .slice(0, 3);

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Farming Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover promising agricultural projects seeking investment across Pakistan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="border shadow-sm card-hover overflow-hidden">
              <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                <img 
                  src={project.images[0] || "/placeholder.svg"} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-white dark:bg-gray-800 text-farmlink-primary font-medium text-sm py-1 px-3 rounded-full">
                  {project.cropType}
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <h3 className="text-xl font-semibold line-clamp-1">{project.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {project.location} | {project.duration} months duration
                </p>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Funding Progress</span>
                    <span className="font-medium">
                      {Math.round((project.fundingRaised / project.fundingGoal) * 100)}%
                    </span>
                  </div>
                  <div className="investment-progress-bg">
                    <div 
                      className="investment-progress-bar" 
                      style={{ width: `${(project.fundingRaised / project.fundingGoal) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>{formatCurrency(project.fundingRaised)} raised</span>
                    <span>{formatCurrency(project.fundingGoal)} goal</span>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between items-center pt-2">
                <div>
                  <span className="text-farmlink-primary font-semibold">{project.expectedROI}% ROI</span>
                  <span className="text-gray-500 text-sm"> (expected)</span>
                </div>
                <Button asChild>
                  <Link to={`/projects/${project.id}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="border-farmlink-primary text-farmlink-primary hover:bg-farmlink-primary/10">
            <Link to="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
