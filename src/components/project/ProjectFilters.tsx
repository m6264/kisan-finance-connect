
import React, { useState } from "react";
import { cropTypes, pakistanLocations } from "@/lib/mock-data";
import { ProjectFilter } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

interface ProjectFiltersProps {
  onFilterChange: (filters: ProjectFilter) => void;
}

const ProjectFilters: React.FC<ProjectFiltersProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState<ProjectFilter>({});

  const handleFilterChange = (key: keyof ProjectFilter, value: any) => {
    const newFilters = { ...filters, [key]: value };
    
    // If value is "all", remove the filter
    if (value === "all") {
      delete newFilters[key];
    }
    
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleReset = () => {
    setFilters({});
    onFilterChange({});
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border mb-6">
      <h2 className="font-semibold text-lg mb-4">Filter Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Crop Type
          </label>
          <Select
            value={filters.cropType || "all"}
            onValueChange={(value) => handleFilterChange("cropType", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="All crop types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All crop types</SelectItem>
              {cropTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Location
          </label>
          <Select
            value={filters.location || "all"}
            onValueChange={(value) => handleFilterChange("location", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="All locations" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All locations</SelectItem>
              {pakistanLocations.map((location) => (
                <SelectItem key={location} value={location}>
                  {location}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Minimum ROI
          </label>
          <Select
            value={filters.minROI?.toString() || "all"}
            onValueChange={(value) => handleFilterChange("minROI", value === "all" ? null : parseInt(value))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Any ROI" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any ROI</SelectItem>
              <SelectItem value="10">10% or higher</SelectItem>
              <SelectItem value="15">15% or higher</SelectItem>
              <SelectItem value="20">20% or higher</SelectItem>
              <SelectItem value="25">25% or higher</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Project Status
          </label>
          <Select
            value={filters.status || "all"}
            onValueChange={(value) => handleFilterChange("status", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="All statuses" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All statuses</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="funded">Funded</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="harvested">Harvested</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="mt-4 flex justify-end">
        <Button 
          variant="outline" 
          onClick={handleReset} 
          className="text-gray-600 dark:text-gray-400"
        >
          Reset Filters
        </Button>
      </div>
    </div>
  );
};

export default ProjectFilters;
