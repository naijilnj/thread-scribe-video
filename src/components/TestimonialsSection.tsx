
import React from 'react';
import { Card } from '@/components/ui/card';
import { StarIcon } from 'lucide-react';

const testimonials = [
  {
    quote: "ThreadScribe saved me hours of work. I now repurpose all my YouTube content into Twitter threads with just a few clicks.",
    author: "Sarah Johnson",
    role: "Content Creator"
  },
  {
    quote: "My engagement has increased by 250% since I started using ThreadScribe to transform my videos into Twitter content.",
    author: "Michael Torres",
    role: "Digital Marketer"
  },
  {
    quote: "As someone who creates educational content, this tool helps me reach wider audiences by repackaging my videos as digestible threads.",
    author: "Dr. Aisha Patel",
    role: "Online Educator"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 container">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        What Our Users <span className="gradient-text">Are Saying</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="p-6 flex flex-col">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-lg mb-6 flex-grow italic">"{testimonial.quote}"</p>
            <div>
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
