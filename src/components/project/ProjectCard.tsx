
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Project } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const fundingPercentage = Math.round((project.fundingRaised / project.fundingGoal) * 100);
  
  return (
    <Card className="border shadow-sm card-hover overflow-hidden h-full flex flex-col">
      <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
        <img 
          src={project.images[0] || "/placeholder.svg"} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-white dark:bg-gray-800 text-farmlink-primary font-medium text-sm py-1 px-3 rounded-full">
          {project.cropType}
        </div>
        <div className={`absolute top-3 left-3 font-medium text-sm py-1 px-3 rounded-full ${
          project.status === "active" ? "bg-green-600 text-white" :
          project.status === "funded" ? "bg-blue-600 text-white" : 
          project.status === "completed" ? "bg-gray-600 text-white" :
          project.status === "pending" ? "bg-amber-600 text-white" :
          "bg-red-600 text-white"
        }`}>
          {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
        </div>
      </div>
      
      <CardHeader className="pb-2">
        <h3 className="text-xl font-semibold line-clamp-1">{project.title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {project.location} | {project.duration} months duration
        </p>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span>Funding Progress</span>
            <span className="font-medium">{fundingPercentage}%</span>
          </div>
          <div className="investment-progress-bg">
            <div 
              className="investment-progress-bar" 
              style={{ width: `${fundingPercentage}%` }}
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
  );
};

export default ProjectCard;
