
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between border-b">
      <div className="flex items-center gap-2">
        <MessageSquare className="h-6 w-6 text-primary" />
        <h1 className="text-xl font-bold">ThreadScribe</h1>
      </div>
      <nav className="hidden md:flex items-center gap-6">
        <Link to="/" className="font-medium hover:text-primary transition-colors">
          Home
        </Link>
        <Link to="#features" className="font-medium hover:text-primary transition-colors">
          Features
        </Link>
        <Link to="#pricing" className="font-medium hover:text-primary transition-colors">
          Pricing
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <Button variant="ghost" className="hidden md:flex">
          Login
        </Button>
        <Button>Get Started</Button>
      </div>
    </header>
  );
};

export default Header;
