
import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold text-white">GitHub-Gemini Nexus</span>
            </div>
            <p className="text-slate-400 mb-4 max-w-md">
              Bringing together the power of GitHub and Google's Gemini AI
              to transform your development workflow.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary">
                <Github size={20} />
              </a>
              {/* Add other social icons here */}
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-white mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-primary">Features</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary">Pricing</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary">Documentation</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary">API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-primary">About</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary">Blog</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-primary">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} GitHub-Gemini Nexus. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-primary text-sm">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-primary text-sm">Terms of Service</a>
            <a href="#" className="text-slate-400 hover:text-primary text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
