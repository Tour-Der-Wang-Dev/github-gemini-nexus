
import FeatureCard from "./FeatureCard";
import { 
  Code2, 
  MessageSquareCode, 
  Bot, 
  FileSearch, 
  GitMerge, 
  Shield
} from "lucide-react";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            GitHub-Gemini Nexus brings together the power of GitHub's development platform 
            and Google's Gemini AI to transform how you work with code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            title="Smart Code Reviews"
            description="Automated code reviews with AI that learns your codebase and provides helpful suggestions."
            icon={Code2}
          />
          
          <FeatureCard
            title="Pull Request Summaries"
            description="Get concise AI-generated summaries of pull requests to understand changes quickly."
            icon={GitMerge}
          />
          
          <FeatureCard
            title="Intelligent Documentation"
            description="Generate and maintain documentation automatically from your codebase."
            icon={FileSearch}
          />
          
          <FeatureCard
            title="Code Explanations"
            description="Get plain-language explanations of complex code segments to improve understanding."
            icon={MessageSquareCode}
          />
          
          <FeatureCard
            title="Security Scanning"
            description="Proactive security vulnerability detection with AI-powered code analysis."
            icon={Shield}
          />
          
          <FeatureCard
            title="AI-Assisted Coding"
            description="Get intelligent code suggestions and completions as you work."
            icon={Bot}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
