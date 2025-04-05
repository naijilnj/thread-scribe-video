
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 container">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Transform Videos into <span className="gradient-text">Engaging Twitter Threads</span>
        </h1>
        <p className="text-lg md:text-xl mb-10 text-muted-foreground">
          Get more engagement, save time, and repurpose content with our AI-powered thread generator.
          Paste a video link and get a complete thread in seconds.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-6">
            Try for Free
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6">
            See Examples <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
