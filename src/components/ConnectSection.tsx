
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const ConnectSection = () => {
  return (
    <section id="connect" className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <img 
              src="/lovable-uploads/0c56104e-4bc5-45d8-ba34-5f50505b4086.png"
              alt="Background decoration" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="max-w-2xl relative z-10">
            <h2 className="text-3xl font-bold mb-6">Connect Your GitHub Repository</h2>
            <p className="text-muted-foreground mb-8">
              Get started with GitHub-Gemini Nexus in minutes. Connect your GitHub 
              repository and experience the power of AI-assisted development today.
            </p>
            
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex items-center gap-2">
                  <Github size={20} />
                  <span>Connect GitHub</span>
                </Button>
                <Button size="lg" variant="outline">Learn More</Button>
              </div>
              
              <p className="text-sm text-muted-foreground">
                By connecting, you agree to our Terms of Service and Privacy Policy.
                No sensitive data leaves your environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
