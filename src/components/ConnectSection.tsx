
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { Link } from "react-router-dom";

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
            <h2 className="text-3xl font-bold mb-6">เชื่อมต่อที่เก็บข้อมูล GitHub ของคุณ</h2>
            <p className="text-muted-foreground mb-8">
              เริ่มต้นใช้งาน GitHub-AI Nexus ได้ในไม่กี่นาที เชื่อมต่อที่เก็บข้อมูล GitHub 
              ของคุณและสัมผัสประสบการณ์การพัฒนาด้วย AI วันนี้
            </p>
            
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="flex items-center gap-2"
                  asChild
                >
                  <Link to="/dashboard">
                    <Github size={20} />
                    <span>เชื่อมต่อ GitHub</span>
                  </Link>
                </Button>
                <Button size="lg" variant="outline">เรียนรู้เพิ่มเติม</Button>
              </div>
              
              <p className="text-sm text-muted-foreground">
                การเชื่อมต่อถือว่าคุณยอมรับข้อกำหนดการให้บริการและนโยบายความเป็นส่วนตัวของเรา
                ข้อมูลที่สำคัญจะไม่ถูกส่งออกนอกระบบของคุณ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
