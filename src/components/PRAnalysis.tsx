
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GitPullRequest, Clock, CheckCircle2, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PRAnalysis = () => {
  // สมมุติข้อมูล PR
  const prData = {
    open: 7,
    merged: 15,
    declined: 3,
    avgReviewTime: '2 วัน',
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <CardTitle className="text-xl">การวิเคราะห์ประชาสัมพันธ์</CardTitle>
          <CardDescription>วิเคราะห์ Pull Requests และประสิทธิภาพการทบทวน</CardDescription>
        </div>
        <GitPullRequest className="h-6 w-6 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <GitPullRequest className="mr-2 h-4 w-4 text-primary" />
                  <span className="text-sm">เปิด PR</span>
                </div>
                <span className="font-bold text-primary">{prData.open}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                  <span className="text-sm">รวม PR</span>
                </div>
                <span className="font-bold text-green-500">{prData.merged}</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <XCircle className="mr-2 h-4 w-4 text-red-500" />
                  <span className="text-sm">ปฏิเสธ PR</span>
                </div>
                <span className="font-bold text-red-500">{prData.declined}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4 text-blue-500" />
                  <span className="text-sm">เวลาทบทวน</span>
                </div>
                <span className="font-bold text-blue-500">{prData.avgReviewTime}</span>
              </div>
            </div>
          </div>
          
          <Button variant="outline" className="w-full">
            <GitPullRequest className="mr-2 h-4 w-4" /> ดูการวิเคราะห์เพิ่มเติม
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PRAnalysis;
