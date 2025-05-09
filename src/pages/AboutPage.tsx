
import React from "react";
import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";

const AboutPage = () => {
  const farmingProcess = [
    {
      step: 1,
      title: "Farmer Registration & Verification",
      description: "Farmers register on FarmLink by providing personal information, land details, and legal documents. Our team verifies farmer identities and land ownership to ensure credibility.",
      icon: "🧾",
    },
    {
      step: 2,
      title: "Project Submission",
      description: "Verified farmers submit agricultural projects with detailed plans, including crop type, timeline, expected yield, and funding requirements. Each project undergoes a thorough review process.",
      icon: "📝",
    },
    {
      step: 3,
      title: "Project Approval",
      description: "Our agricultural experts evaluate project viability, checking cost estimations, yield projections, and risk factors. Only projects meeting our strict criteria get approved for funding.",
      icon: "✅",
    },
    {
      step: 4,
      title: "Investment Phase",
      description: "Approved projects appear on our marketplace where investors can browse and select based on their preferences. Investors can commit any amount until the funding goal is reached.",
      icon: "💰",
    },
    {
      step: 5,
      title: "Farming Operations",
      description: "Once funded, farmers receive the capital and begin agricultural operations. Regular updates with photos and progress reports are shared with investors throughout the growing cycle.",
      icon: "🌱",
    },
    {
      step: 6,
      title: "Harvest & Sales",
      description: "At harvest time, produce is sold through established channels at market prices. The sales process is documented and reported to ensure transparency.",
      icon: "🌾",
    },
    {
      step: 7,
      title: "Profit Distribution",
      description: "Revenue from crop sales is distributed according to pre-agreed terms. Investors receive their original investment plus the agreed-upon share of profits.",
      icon: "📊",
    },
  ];

  return (
    <Layout>
      <div className="bg-white dark:bg-gray-900">
        <div className="relative overflow-hidden">
          <div className="hero-gradient absolute inset-0 z-0"></div>
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center" 
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3')",
              opacity: 0.4 
            }}
          ></div>
          <div className="container relative z-10 py-16 md:py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                How FarmLink Works
              </h1>
              <p className="text-xl text-white/90">
                Our platform enables a secure, transparent connection between farmers and investors,
                creating a sustainable ecosystem for agricultural growth in Pakistan.
              </p>
            </div>
          </div>
        </div>
        
        <div className="container py-16">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              FarmLink aims to transform Pakistan's agricultural landscape by bridging the gap between 
              farmers who need capital and investors seeking profitable opportunities. We believe in 
              creating a sustainable ecosystem where both parties benefit while contributing to the 
              country's food security and economic growth.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Through our platform, we're making agricultural investment accessible to everyone, 
              while providing farmers with the resources they need to implement modern farming 
              techniques, increase yields, and improve their livelihoods.
            </p>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">The FarmLink Process</h2>
            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-farmlink-primary/30 -translate-x-1/2 z-0"></div>
              
              <div className="space-y-12">
                {farmingProcess.map((item, index) => (
                  <div key={item.step} className={`relative z-10 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
                      <div className="bg-farmlink-light dark:bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center text-3xl z-10">
                        {item.icon}
                      </div>
                    </div>
                    
                    <div className="md:w-1/2">
                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex items-center mb-3">
                            <div className="bg-farmlink-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold mr-3">
                              {item.step}
                            </div>
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why Choose FarmLink?</h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">For Farmers</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• Access to capital without high-interest loans</li>
                    <li>• Technical guidance and modern farming practices</li>
                    <li>• Guaranteed market for produce</li>
                    <li>• Community support and knowledge sharing</li>
                    <li>• Long-term growth opportunities</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3">For Investors</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>• Attractive returns compared to traditional investments</li>
                    <li>• Portfolio diversification into agriculture</li>
                    <li>• Transparent project tracking</li>
                    <li>• Contribution to sustainable agriculture</li>
                    <li>• Support for Pakistan's economic growth</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <h2 className="text-3xl font-bold mb-6">Our Security Measures</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              At FarmLink, we understand the importance of security and transparency in financial transactions. 
              Our platform employs several measures to ensure the safety of all parties involved:
            </p>
            
            <ul className="space-y-3 text-gray-600 dark:text-gray-400 mb-12">
              <li className="flex">
                <span className="mr-2">✓</span>
                <span><strong>Thorough Verification:</strong> All farmers undergo detailed identity and land ownership verification.</span>
              </li>
              <li className="flex">
                <span className="mr-2">✓</span>
                <span><strong>Secure Payments:</strong> Integrated with trusted payment gateways for safe transactions.</span>
              </li>
              <li className="flex">
                <span className="mr-2">✓</span>
                <span><strong>Escrow System:</strong> Funds are released to farmers in stages based on project milestones.</span>
              </li>
              <li className="flex">
                <span className="mr-2">✓</span>
                <span><strong>Field Monitoring:</strong> Regular physical inspections of farming projects by our team.</span>
              </li>
              <li className="flex">
                <span className="mr-2">✓</span>
                <span><strong>Transparent Reporting:</strong> Real-time updates and financial reporting accessible to all stakeholders.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
