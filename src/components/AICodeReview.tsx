
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code2, Bot } from 'lucide-react';

const AICodeReview = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <CardTitle className="text-xl">การตรวจสอบโค้ดที่ขับเคลื่อนด้วย AI</CardTitle>
          <CardDescription>ใช้ AI ในการตรวจสอบโค้ด Pull Requests และคอมมิต</CardDescription>
        </div>
        <Code2 className="h-6 w-6 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            ใช้ AI ในการตรวจสอบโค้ดเพื่อระบุปัญหา, โอกาสในการปรับปรุง, และแนวทางปฏิบัติที่ดีที่สุด
          </p>
          
          <div className="space-y-2">
            <div className="flex items-center space-x-2 rounded-md bg-muted p-2">
              <Bot className="h-4 w-4 text-primary" />
              <div className="text-sm font-medium">ตรวจสอบ Pull Request ล่าสุด</div>
            </div>
            <div className="flex items-center space-x-2 rounded-md bg-muted p-2">
              <Bot className="h-4 w-4 text-primary" />
              <div className="text-sm font-medium">ตรวจสอบคอมมิตล่าสุด</div>
            </div>
            <div className="flex items-center space-x-2 rounded-md bg-muted p-2">
              <Bot className="h-4 w-4 text-primary" />
              <div className="text-sm font-medium">ตรวจสอบไฟล์เฉพาะ</div>
            </div>
          </div>
          
          <Button className="w-full">
            <Bot className="mr-2 h-4 w-4" /> เริ่มการตรวจสอบโค้ด
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AICodeReview;
