
import React, { useState, useMemo } from "react";
import Layout from "@/components/layout/Layout";
import ProjectCard from "@/components/project/ProjectCard";
import ProjectFilters from "@/components/project/ProjectFilters";
import { mockProjects } from "@/lib/mock-data";
import { ProjectFilter } from "@/lib/types";

const ProjectsPage = () => {
  const [filters, setFilters] = useState<ProjectFilter>({});
  
  const filteredProjects = useMemo(() => {
    return mockProjects.filter(project => {
      // Filter by crop type
      if (filters.cropType && project.cropType !== filters.cropType) {
        return false;
      }
      
      // Filter by location
      if (filters.location && project.location !== filters.location) {
        return false;
      }
      
      // Filter by minimum ROI
      if (filters.minROI && project.expectedROI < filters.minROI) {
        return false;
      }
      
      // Filter by status
      if (filters.status && project.status !== filters.status) {
        return false;
      }
      
      return true;
    });
  }, [filters]);
  
  return (
    <Layout>
      <div className="bg-gray-50 dark:bg-gray-900 py-10">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Farming Projects</h1>
          
          <ProjectFilters onFilterChange={setFilters} />
          
          {filteredProjects.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 p-12 rounded-lg shadow-sm border text-center">
              <h3 className="text-xl font-semibold mb-2">No projects match your filters</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your filters or check back later for new opportunities.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProjectsPage;
