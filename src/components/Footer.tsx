
import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">ThreadScribe</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Transform your video content into engaging Twitter threads with AI.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-muted-foreground hover:text-primary text-sm">Features</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary text-sm">Pricing</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary text-sm">Use Cases</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary text-sm">Roadmap</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-muted-foreground hover:text-primary text-sm">About</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary text-sm">Blog</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary text-sm">Careers</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary text-sm">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-muted-foreground hover:text-primary text-sm">Terms</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary text-sm">Privacy</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary text-sm">Cookies</Link></li>
              <li><Link to="#" className="text-muted-foreground hover:text-primary text-sm">Licenses</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} ThreadScribe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
