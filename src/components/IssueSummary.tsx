
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, CheckCircle, Circle } from 'lucide-react';

const IssueSummary = () => {
  // สมมุติข้อมูลสรุปปัญหา
  const issueSummary = {
    open: 12,
    inProgress: 5,
    closed: 8,
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="space-y-1">
          <CardTitle className="text-xl">สรุปประเด็น</CardTitle>
          <CardDescription>ภาพรวมของปัญหาสำหรับที่เก็บข้อมูลทั้งหมด</CardDescription>
        </div>
        <AlertCircle className="h-6 w-6 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center">
            <div className="text-2xl font-bold text-red-500">{issueSummary.open}</div>
            <div className="flex items-center text-sm text-muted-foreground">
              <AlertCircle className="mr-1 h-4 w-4 text-red-500" />
              เปิด
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl font-bold text-blue-500">{issueSummary.inProgress}</div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Circle className="mr-1 h-4 w-4 text-blue-500" />
              กำลังดำเนินการ
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl font-bold text-green-500">{issueSummary.closed}</div>
            <div className="flex items-center text-sm text-muted-foreground">
              <CheckCircle className="mr-1 h-4 w-4 text-green-500" />
              ปิดแล้ว
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default IssueSummary;
