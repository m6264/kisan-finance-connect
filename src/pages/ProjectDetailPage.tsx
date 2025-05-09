
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProjectDetail from "@/components/project/ProjectDetail";
import { mockProjects } from "@/lib/mock-data";
import { Project } from "@/lib/types";
import { Button } from "@/components/ui/button";

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // In a real app, this would be an API call
    const fetchProject = () => {
      setLoading(true);
      
      setTimeout(() => {
        const foundProject = mockProjects.find(p => p.id === id);
        setProject(foundProject || null);
        setLoading(false);
      }, 500);
    };
    
    fetchProject();
  }, [id]);
  
  if (loading) {
    return (
      <Layout>
        <div className="container py-10">
          <div className="h-64 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse mb-6"></div>
          <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse mb-4 max-w-md"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse mb-6 max-w-sm"></div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="h-40 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>
            </div>
            <div className="lg:col-span-1">
              <div className="h-80 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
  
  if (!project) {
    return (
      <Layout>
        <div className="container py-20">
          <div className="bg-white dark:bg-gray-800 p-12 rounded-lg shadow-sm border text-center">
            <h1 className="text-2xl font-semibold mb-4">Project Not Found</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              The project you're looking for doesn't exist or has been removed.
            </p>
            <Button onClick={() => navigate("/projects")}>
              View All Projects
            </Button>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="bg-gray-50 dark:bg-gray-900 py-10">
        <div className="container">
          <button 
            onClick={() => navigate("/projects")} 
            className="flex items-center text-sm font-medium mb-6 text-farmlink-secondary hover:text-farmlink-primary"
          >
            <span className="mr-2">←</span> Back to projects
          </button>
          
          <ProjectDetail project={project} />
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetailPage;
