import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, 
  GitBranch, 
  Star, 
  GitFork, 
  Eye, 
  Code, 
  AlertCircle,
  GitPullRequest,
  Users,
  History
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';

interface RepoDetails {
  id: number;
  name: string;
  full_name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  watchers_count: number;
  updated_at: string;
  created_at: string;
  language: string;
  default_branch: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const RepoDetail = () => {
  const { repoName } = useParams<{ repoName: string }>();
  const { toast } = useToast();

  const { data: repo, isLoading, error } = useQuery({
    queryKey: ['repo', repoName],
    queryFn: async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) throw new Error('ไม่พบเซสชันผู้ใช้');
      
      const response = await fetch(`https://api.github.com/repos/${session.user.user_metadata.user_name}/${repoName}`, {
        headers: {
          Authorization: `Bearer ${session.provider_token}`
        }
      });
      
      if (!response.ok) {
        throw new Error('ไม่สามารถดึงข้อมูลที่เก็บข้อมูลได้');
      }
      
      const data = await response.json();
      return data as RepoDetails;
    },
    retry: 1,
    enabled: !!repoName,
    meta: {
      onError: () => {
        toast({
          title: 'เกิดข้อผิดพลาด',
          description: 'ไม่สามารถดึงข้อมูลที่เก็บข้อมูลได้',
          variant: 'destructive',
        });
      }
    }
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('th-TH', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).format(date);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto py-6">
        <div className="flex justify-center items-center p-8">
          <div className="flex flex-col items-center gap-2">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            <p>กำลังโหลดข้อมูลที่เก็บข้อมูล...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !repo) {
    return (
      <div className="container mx-auto py-6">
        <Button variant="outline" asChild className="mb-6">
          <Link to="/dashboard">
            <ArrowLeft className="mr-2 h-4 w-4" /> 
            กลับไปยังแดชบอร์ด
          </Link>
        </Button>
        
        <Card>
          <CardHeader>
            <CardTitle>เกิดข้อผิดพลาด</CardTitle>
            <CardDescription>ไม่สามารถโหลดข้อมูลที่เก็บข้อมูล {repoName} ได้</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <Button onClick={() => window.location.reload()}>ลองใหม่อีกครั้ง</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6">
      <Button variant="outline" asChild className="mb-6">
        <Link to="/dashboard">
          <ArrowLeft className="mr-2 h-4 w-4" /> 
          กลับไปยังแดชบอร์ด
        </Link>
      </Button>
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Main content */}
        <div className="flex-1">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-3xl">{repo.name}</CardTitle>
                  <CardDescription className="text-base mt-1">
                    {repo.description || 'ไม่มีคำอธิบาย'}
                  </CardDescription>
                </div>
                <Button variant="outline" asChild>
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                    เปิดใน GitHub
                  </a>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center">
                  <Code className="text-primary mr-2 h-5 w-5" />
                  <span>{repo.language || 'ไม่ระบุภาษา'}</span>
                </div>
                <div className="flex items-center">
                  <Star className="text-yellow-500 mr-2 h-5 w-5" />
                  <span>{repo.stargazers_count} ดาว</span>
                </div>
                <div className="flex items-center">
                  <GitFork className="text-blue-500 mr-2 h-5 w-5" />
                  <span>{repo.forks_count} ปลายทาง</span>
                </div>
                <div className="flex items-center">
                  <Eye className="text-purple-500 mr-2 h-5 w-5" />
                  <span>{repo.watchers_count} ผู้ชม</span>
                </div>
                <div className="flex items-center">
                  <AlertCircle className="text-red-500 mr-2 h-5 w-5" />
                  <span>{repo.open_issues_count} ปัญหาที่เปิดอยู่</span>
                </div>
              </div>
              
              <Separator className="my-6" />
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">การวิเคราะห์ที่เก็บข้อมูล</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="py-3">
                      <CardTitle className="text-lg flex items-center">
                        <Code className="mr-2 h-5 w-5 text-primary" />
                        รหัสวิเคราะห์
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full">เริ่มการวิเคราะห์</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="py-3">
                      <CardTitle className="text-lg flex items-center">
                        <GitPullRequest className="mr-2 h-5 w-5 text-primary" />
                        การตรวจสอบ PR
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full">ตรวจสอบ Pull Requests</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="py-3">
                      <CardTitle className="text-lg flex items-center">
                        <Users className="mr-2 h-5 w-5 text-primary" />
                        ผู้มีส่วนร่วม
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full">ดูผู้มีส่วนร่วม</Button>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="py-3">
                      <CardTitle className="text-lg flex items-center">
                        <History className="mr-2 h-5 w-5 text-primary" />
                        ประวัติกิจกรรม
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full">ดูประวัติกิจกรรม</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Sidebar */}
        <div className="w-full md:w-80">
          <Card>
            <CardHeader>
              <CardTitle>ข้อมูลที่เก็บข้อมูล</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="text-sm text-muted-foreground">เจ้าของ</div>
                <div className="font-medium flex items-center gap-2 mt-1">
                  <img 
                    src={repo.owner.avatar_url} 
                    alt={repo.owner.login}
                    className="h-5 w-5 rounded-full"
                  />
                  {repo.owner.login}
                </div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">สร้างเมื่อ</div>
                <div className="font-medium mt-1">{formatDate(repo.created_at)}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">อัปเดตล่าสุด</div>
                <div className="font-medium mt-1">{formatDate(repo.updated_at)}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">แบรนช์หลัก</div>
                <div className="font-medium flex items-center gap-1 mt-1">
                  <GitBranch className="h-4 w-4" />
                  {repo.default_branch}
                </div>
              </div>
              <Separator />
              <div className="pt-2">
                <Button variant="outline" className="w-full">ทำการวิเคราะห์ขั้นสูง</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RepoDetail;
