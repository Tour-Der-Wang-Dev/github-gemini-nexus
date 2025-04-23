
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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
      <h1 className="text-3xl font-bold mb-6">แดชบอร์ด</h1>
      {/* We'll add repository list and analysis components here in the next step */}
    </div>
  );
};

export default Dashboard;
