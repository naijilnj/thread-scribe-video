
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Loader2, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Mock tweets for demonstration - in real app these would come from API
const MOCK_TWEETS = [
  "Just watched an incredible video about AI and content creation. Here's a thread breaking down the key insights from it... 🧵",
  "First, AI tools are revolutionizing how content creators work. What used to take hours can now be done in minutes, allowing for more focus on strategy and creativity rather than execution.",
  "The video explains how different industries are adopting AI tools - from marketing to education to entertainment. The common thread? Everyone's looking to save time while maintaining quality.",
  "Perhaps the most interesting point: AI doesn't replace human creativity, it amplifies it. The best results come when creators use AI as a collaborative partner rather than a replacement.",
  "The data shows that creators using AI tools are 3x more productive and report higher satisfaction with their work-life balance. That's a win-win that shouldn't be ignored.",
  "So what's the takeaway? If you're a content creator who hasn't explored AI tools yet, you're likely working harder than you need to. The right tools can transform your workflow.",
  "What AI tools are you currently using in your content creation process? Reply with your favorites!"
];

const ThreadGenerator = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [tweets, setTweets] = useState<string[]>([]);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!videoUrl) {
      toast({
        title: "URL Required",
        description: "Please enter a valid YouTube URL",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setTweets(MOCK_TWEETS);
      setIsLoading(false);
    }, 2000);
  };
  
  const copyToClipboard = () => {
    if (tweets.length === 0) return;
    
    const threadText = tweets.join('\n\n');
    navigator.clipboard.writeText(threadText);
    
    toast({
      title: "Thread Copied!",
      description: "The thread has been copied to your clipboard",
    });
  };
  
  return (
    <section className="py-16 container" id="generator">
      <Card className="p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Generate Your Twitter Thread
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="videoUrl" className="text-sm font-medium">
              YouTube Video URL
            </label>
            <Input 
              id="videoUrl"
              placeholder="https://www.youtube.com/watch?v=..."
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              className="w-full"
            />
          </div>
          
          <Button 
            type="submit" 
            disabled={isLoading} 
            className="w-full"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating Thread...
              </>
            ) : (
              'Generate Twitter Thread'
            )}
          </Button>
        </form>
        
        {tweets.length > 0 && (
          <div className="mt-10 space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Your Generated Thread</h3>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={copyToClipboard}
                className="flex items-center gap-2"
              >
                <Copy className="h-4 w-4" />
                Copy All
              </Button>
            </div>
            
            <div className="space-y-4">
              {tweets.map((tweet, index) => (
                <Card key={index} className="p-4 bg-white shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-primary">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground mb-2">Tweet {index + 1}</span>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => {
                        navigator.clipboard.writeText(tweet);
                        toast({
                          title: "Copied!",
                          description: `Tweet ${index + 1} copied to clipboard`,
                        });
                      }}
                      className="h-6 w-6 p-0"
                    >
                      <Copy className="h-3 w-3" />
                    </Button>
                  </div>
                  <p>{tweet}</p>
                </Card>
              ))}
            </div>
          </div>
        )}
      </Card>
    </section>
  );
};

export default ThreadGenerator;
