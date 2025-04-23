import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { GitBranch, GitFork, Star, Eye, Calendar, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Repository {
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
  language: string;
}

const RepositoryList = () => {
  const { toast } = useToast();

  const { data: repositories, isLoading, error } = useQuery({
    queryKey: ['repositories'],
    queryFn: async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) throw new Error('ไม่พบเซสชันผู้ใช้');
      
      // ดึงข้อมูลที่เก็บข้อมูลจาก GitHub API โดยใช้ token จาก session
      const response = await fetch('https://api.github.com/user/repos?sort=updated&per_page=10', {
        headers: {
          Authorization: `Bearer ${session.provider_token}`
        }
      });
      
      if (!response.ok) {
        throw new Error('ไม่สามารถดึงข้อมูลที่เก็บข้อมูลได้');
      }
      
      const data = await response.json();
      return data as Repository[];
    },
    retry: 1,
    enabled: true,
    meta: {
      onError: () => {
        toast({
          title: 'เกิดข้อผิดพลาด',
          description: 'ไม่สามารถดึงข้อมูลที่เก็บข้อมูลจาก GitHub ได้',
          variant: 'destructive',
        });
      }
    }
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('th-TH', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    }).format(date);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="flex flex-col items-center gap-2">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p>กำลังโหลดที่เก็บข้อมูล...</p>
        </div>
      </div>
    );
  }

  if (error || !repositories) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>ที่เก็บข้อมูล GitHub</CardTitle>
          <CardDescription>ไม่พบข้อมูลที่เก็บข้อมูล GitHub ของคุณ กรุณาเชื่อมต่อหรือลองใหม่อีกครั้ง</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <Button onClick={() => window.location.reload()}>ลองใหม่อีกครั้ง</Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>ที่เก็บข้อมูล GitHub</CardTitle>
        <CardDescription>ที่เก็บข้อมูล GitHub ล่าสุดของคุณ</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ชื่อที่เก็บข้อมูล</TableHead>
              <TableHead>ภาษา</TableHead>
              <TableHead>ดาว</TableHead>
              <TableHead>ปลายทาง</TableHead>
              <TableHead>ปัญหา</TableHead>
              <TableHead>อัปเดตล่าสุด</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {repositories.map((repo) => (
              <TableRow key={repo.id}>
                <TableCell className="font-medium">{repo.name}</TableCell>
                <TableCell>{repo.language || '-'}</TableCell>
                <TableCell className="flex items-center gap-1">
                  <Star className="h-4 w-4" /> {repo.stargazers_count}
                </TableCell>
                <TableCell className="flex items-center gap-1">
                  <GitFork className="h-4 w-4" /> {repo.forks_count}
                </TableCell>
                <TableCell className="flex items-center gap-1">
                  <Eye className="h-4 w-4" /> {repo.open_issues_count}
                </TableCell>
                <TableCell className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" /> {formatDate(repo.updated_at)}
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm" asChild>
                    <a href={`/dashboard/repo/${repo.name}`}>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RepositoryList;
