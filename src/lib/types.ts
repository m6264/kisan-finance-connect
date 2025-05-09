
export interface User {
  id: string;
  name: string;
  email: string;
  userType: 'farmer' | 'investor' | 'admin';
  avatar?: string;
  verified: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  farmerId: string;
  farmerName: string;
  location: string;
  cropType: string;
  fundingGoal: number;
  fundingRaised: number;
  duration: number; // in months
  expectedROI: number; // percentage
  status: 'pending' | 'funded' | 'active' | 'harvested' | 'completed';
  images: string[];
  createdAt: Date;
  startDate?: Date;
  endDate?: Date;
}

export interface ProjectFilter {
  cropType?: string;
  location?: string;
  minROI?: number;
  maxDuration?: number;
  status?: Project['status'];
}

export interface Investment {
  id: string;
  projectId: string;
  investorId: string;
  amount: number;
  expectedReturn: number;
  date: Date;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}
