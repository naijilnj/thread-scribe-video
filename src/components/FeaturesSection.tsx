
import React from 'react';
import { FilmIcon, MessageSquare, Clock, BarChart } from 'lucide-react';

const features = [
  {
    icon: <FilmIcon className="h-6 w-6 text-primary" />,
    title: 'Video to Thread',
    description: 'Automatically convert any YouTube video into a well-structured Twitter thread.'
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-primary" />,
    title: 'Engaging Content',
    description: 'Our AI creates compelling hooks and maintains reader interest throughout the thread.'
  },
  {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: 'Save Hours',
    description: 'What takes hours to do manually can now be done in seconds with our tool.'
  },
  {
    icon: <BarChart className="h-6 w-6 text-primary" />,
    title: 'Boost Engagement',
    description: 'Well-crafted threads typically get 3-5x more engagement than single tweets.'
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 bg-secondary">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Features That Make Thread Creation <span className="gradient-text">Effortless</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4 p-2 bg-accent inline-block rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
