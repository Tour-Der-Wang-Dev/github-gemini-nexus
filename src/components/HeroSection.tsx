
import { Button } from "@/components/ui/button";
import { Github, Bot, Code2 } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="hero-gradient pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="mb-6 flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full">
            <span className="text-primary font-medium">Introducing GitHub-Gemini Nexus</span>
            <span className="bg-primary/20 text-primary text-xs px-2 py-0.5 rounded-full">Beta</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="gradient-text">Supercharge</span> your GitHub 
            <br className="hidden md:block" /> with AI Intelligence
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl">
            Connect GitHub with Google's Gemini for intelligent code reviews, automated documentation,
            and AI-powered development assistance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button size="lg" className="flex items-center gap-2">
              <Github size={20} />
              <span>Connect GitHub</span>
            </Button>
            <Button size="lg" variant="outline" className="flex items-center gap-2">
              <Bot size={20} />
              <span>Watch Demo</span>
            </Button>
          </div>

          <div className="mt-12 p-4 bg-slate-800/50 border border-slate-700 rounded-lg w-full">
            <div className="flex items-center gap-2 mb-2 text-primary">
              <Code2 size={16} />
              <span className="text-xs font-mono">GitHub-Gemini Integration</span>
            </div>
            <pre className="text-left text-sm rounded bg-slate-900 p-3 overflow-x-auto">
              <code className="text-slate-300">
                <span className="text-blue-400">const</span> <span className="text-green-400">gemini</span> = <span className="text-blue-400">await</span> GitHub.connect(<span className="text-yellow-400">'your-repo'</span>);
                <br/>
                <span className="text-blue-400">const</span> <span className="text-green-400">codeReview</span> = <span className="text-blue-400">await</span> gemini.reviewPullRequest(<span className="text-yellow-400">'#42'</span>);
                <br/>
                console.<span className="text-purple-400">log</span>(codeReview.<span className="text-purple-400">suggestions</span>);
              </code>
            </pre>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default HeroSection;
