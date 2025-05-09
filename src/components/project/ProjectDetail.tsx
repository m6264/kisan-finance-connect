
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Project } from "@/lib/types";
import { formatCurrency, formatDate } from "@/lib/utils";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  const [investmentAmount, setInvestmentAmount] = useState<string>("");
  const [isInvestmentDialogOpen, setIsInvestmentDialogOpen] = useState(false);
  const { toast } = useToast();
  const fundingPercentage = Math.round((project.fundingRaised / project.fundingGoal) * 100);
  
  const handleInvestment = () => {
    const amount = parseFloat(investmentAmount);
    
    if (isNaN(amount) || amount <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid investment amount.",
        variant: "destructive",
      });
      return;
    }
    
    if (amount > project.fundingGoal - project.fundingRaised) {
      toast({
        title: "Amount exceeds funding goal",
        description: "Your investment amount exceeds what's needed to complete the funding goal.",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, this would be an API call to process the investment
    toast({
      title: "Investment submitted!",
      description: `Your investment of ${formatCurrency(amount)} is being processed.`,
    });
    
    setIsInvestmentDialogOpen(false);
    setInvestmentAmount("");
  };
  
  const calculateExpectedReturn = (amount: number) => {
    const parsedAmount = parseFloat(amount.toString());
    if (isNaN(parsedAmount)) return 0;
    return parsedAmount * (1 + project.expectedROI / 100);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border overflow-hidden">
          <div className="h-64 md:h-80 relative">
            <img 
              src={project.images[0] || "/placeholder.svg"} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className={`absolute top-4 left-4 font-medium py-1 px-4 rounded-full ${
              project.status === "active" ? "bg-green-600 text-white" :
              project.status === "funded" ? "bg-blue-600 text-white" : 
              project.status === "completed" ? "bg-gray-600 text-white" :
              project.status === "pending" ? "bg-amber-600 text-white" :
              "bg-red-600 text-white"
            }`}>
              {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
            </div>
          </div>
          
          <div className="p-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Located in <span className="font-medium">{project.location}</span> • 
              Project by <span className="font-medium">{project.farmerName}</span>
            </p>
            
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Project Description</h2>
              <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border p-6">
          <Tabs defaultValue="details">
            <TabsList className="mb-4">
              <TabsTrigger value="details">Project Details</TabsTrigger>
              <TabsTrigger value="timeline">Timeline</TabsTrigger>
              <TabsTrigger value="updates">Updates</TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-medium mb-2">Crop Type</h3>
                    <p className="text-xl font-semibold text-farmlink-primary">{project.cropType}</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-medium mb-2">Project Duration</h3>
                    <p className="text-xl font-semibold text-farmlink-primary">{project.duration} months</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-medium mb-2">Expected ROI</h3>
                    <p className="text-xl font-semibold text-farmlink-primary">{project.expectedROI}%</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-medium mb-2">Project Created</h3>
                    <p className="text-xl font-semibold text-farmlink-primary">{formatDate(project.createdAt)}</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="timeline" className="space-y-4">
              <div className="relative border-l-2 border-farmlink-primary ml-4 pl-6 space-y-8">
                <div className="relative">
                  <div className="absolute -left-[33px] bg-farmlink-primary text-white w-6 h-6 rounded-full flex items-center justify-center">
                    <span className="text-sm">1</span>
                  </div>
                  <h3 className="font-medium">Project Created</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{formatDate(project.createdAt)}</p>
                  <p className="mt-2">Project submitted for approval and opened for investment.</p>
                </div>
                
                {project.startDate && (
                  <div className="relative">
                    <div className="absolute -left-[33px] bg-farmlink-primary text-white w-6 h-6 rounded-full flex items-center justify-center">
                      <span className="text-sm">2</span>
                    </div>
                    <h3 className="font-medium">Farming Started</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{formatDate(project.startDate)}</p>
                    <p className="mt-2">Agricultural operations began with planting/setup.</p>
                  </div>
                )}
                
                {project.endDate && (
                  <div className="relative">
                    <div className="absolute -left-[33px] bg-farmlink-primary text-white w-6 h-6 rounded-full flex items-center justify-center">
                      <span className="text-sm">3</span>
                    </div>
                    <h3 className="font-medium">Expected Completion</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{formatDate(project.endDate)}</p>
                    <p className="mt-2">Anticipated harvest and distribution of returns.</p>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="updates" className="space-y-4">
              <div className="text-center p-8">
                <p className="text-gray-500 dark:text-gray-400">
                  No updates have been posted for this project yet.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <div className="lg:col-span-1">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border p-6 sticky top-6">
          <h2 className="text-xl font-semibold mb-4">Investment Summary</h2>
          
          <div className="space-y-4 mb-6">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Funding Goal:</span>
              <span className="font-semibold">{formatCurrency(project.fundingGoal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Already Funded:</span>
              <span className="font-semibold">{formatCurrency(project.fundingRaised)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Still Needed:</span>
              <span className="font-semibold">{formatCurrency(project.fundingGoal - project.fundingRaised)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400">Expected ROI:</span>
              <span className="font-semibold">{project.expectedROI}%</span>
            </div>
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between text-sm mb-1">
              <span>Funding Progress</span>
              <span className="font-medium">{fundingPercentage}%</span>
            </div>
            <div className="investment-progress-bg">
              <div 
                className="investment-progress-bar" 
                style={{ width: `${fundingPercentage}%` }}
              ></div>
            </div>
          </div>
          
          {project.status !== "completed" && project.fundingRaised < project.fundingGoal && (
            <Dialog open={isInvestmentDialogOpen} onOpenChange={setIsInvestmentDialogOpen}>
              <DialogTrigger asChild>
                <Button className="w-full">Invest in This Project</Button>
              </DialogTrigger>
              
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Invest in {project.title}</DialogTitle>
                  <DialogDescription>
                    Enter the amount you'd like to invest in this agricultural project.
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="investment-amount">Investment Amount (PKR)</Label>
                    <Input
                      id="investment-amount"
                      type="number"
                      placeholder="Enter amount"
                      value={investmentAmount}
                      onChange={(e) => setInvestmentAmount(e.target.value)}
                    />
                  </div>
                  
                  {parseFloat(investmentAmount) > 0 && (
                    <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-md">
                      <h4 className="font-medium mb-2">Investment Summary</h4>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span>Your Investment:</span>
                          <span>{formatCurrency(parseFloat(investmentAmount))}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Expected Return ({project.expectedROI}% ROI):</span>
                          <span>{formatCurrency(calculateExpectedReturn(parseFloat(investmentAmount)))}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Potential Profit:</span>
                          <span>{formatCurrency(calculateExpectedReturn(parseFloat(investmentAmount)) - parseFloat(investmentAmount))}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setIsInvestmentDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleInvestment}>Confirm Investment</Button>
                </div>
              </DialogContent>
            </Dialog>
          )}
          
          <div className="mt-6 pt-6 border-t">
            <h3 className="font-medium mb-3">Project Information</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="mr-2">📆</span>
                <span className="text-gray-600 dark:text-gray-400">
                  {project.duration} month project {project.startDate && `starting ${formatDate(project.startDate)}`}
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span className="text-gray-600 dark:text-gray-400">{project.location}</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">👨‍🌾</span>
                <span className="text-gray-600 dark:text-gray-400">Managed by {project.farmerName}</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✅</span>
                <span className="text-gray-600 dark:text-gray-400">Verified by FarmLink team</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
