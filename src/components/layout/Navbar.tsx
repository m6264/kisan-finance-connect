
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <header className="border-b bg-white dark:bg-gray-900 py-4">
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-farmlink-primary">
            Farm<span className="text-farmlink-secondary">Link</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="font-medium hover:text-farmlink-primary transition-colors">
            Home
          </Link>
          <Link to="/projects" className="font-medium hover:text-farmlink-primary transition-colors">
            Projects
          </Link>
          <Link to="/about" className="font-medium hover:text-farmlink-primary transition-colors">
            How It Works
          </Link>
          <Link to="/contact" className="font-medium hover:text-farmlink-primary transition-colors">
            Contact
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border-farmlink-secondary text-farmlink-secondary hover:bg-farmlink-secondary/10">
            Sign In
          </Button>
          <Button className="bg-farmlink-primary hover:bg-farmlink-dark">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4 mt-8">
              <Link to="/" className="font-medium hover:text-farmlink-primary transition-colors">
                Home
              </Link>
              <Link to="/projects" className="font-medium hover:text-farmlink-primary transition-colors">
                Projects
              </Link>
              <Link to="/about" className="font-medium hover:text-farmlink-primary transition-colors">
                How It Works
              </Link>
              <Link to="/contact" className="font-medium hover:text-farmlink-primary transition-colors">
                Contact
              </Link>
              <div className="pt-4 space-y-3">
                <Button variant="outline" className="w-full border-farmlink-secondary text-farmlink-secondary hover:bg-farmlink-secondary/10">
                  Sign In
                </Button>
                <Button className="w-full bg-farmlink-primary hover:bg-farmlink-dark">
                  Get Started
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
