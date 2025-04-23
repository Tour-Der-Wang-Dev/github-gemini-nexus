
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Github, GitBranch } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import RepositoryList from '@/components/RepositoryList';
import AICodeReview from '@/components/AICodeReview';
import WorkflowAutomation from '@/components/WorkflowAutomation';
import IssueSummary from '@/components/IssueSummary';
import PRAnalysis from '@/components/PRAnalysis';

const Dashboard = () => {
  const { toast } = useToast();
  
  const { data: session } = useQuery({
    queryKey: ['session'],
    queryFn: async () => {
      const { data: { session } } = await supabase.auth.getSession();
      return session;
    },
  });

  const handleGitHubLogin = async () => {
    try {
      await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
          scopes: 'repo workflow',
          redirectTo: `${window.location.origin}/dashboard`,
        },
      });
    } catch (error) {
      toast({
        title: 'เกิดข้อผิดพลาด',
        description: 'ไม่สามารถเชื่อมต่อกับ GitHub ได้ กรุณาลองใหม่อีกครั้ง',
        variant: 'destructive',
      });
    }
  };

  if (!session) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8 text-center">
          <h1 className="text-4xl font-bold">เชื่อมต่อกับ GitHub</h1>
          <p className="text-muted-foreground">
            เข้าสู่ระบบด้วย GitHub เพื่อเริ่มใช้งานระบบวิเคราะห์ Workflow
          </p>
          <Button
            size="lg"
            className="w-full"
            onClick={handleGitHubLogin}
          >
            <Github className="mr-2" />
            เข้าสู่ระบบด้วย GitHub
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6">
      <header className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">แดชบอร์ด GitHub</h1>
            <p className="text-muted-foreground mt-1">จัดการและวิเคราะห์โปรเจกต์ GitHub ของคุณ</p>
          </div>
          <Button variant="outline" className="gap-2">
            <GitBranch className="h-4 w-4" /> เลือกที่เก็บข้อมูล
          </Button>
        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <IssueSummary />
        <PRAnalysis />
        <AICodeReview />
        <WorkflowAutomation />
      </div>

      <div className="mt-6">
        <RepositoryList />
      </div>
    </div>
  );
};

export default Dashboard;
