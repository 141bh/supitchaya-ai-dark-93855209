
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Users, Shield, Database, LogIn } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Navigation */}
      <nav className="p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-white">ระบบจัดการผู้ใช้</div>
          <Link to="/auth">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <LogIn className="mr-2 h-4 w-4" />
              เข้าสู่ระบบ
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6">
            ระบบจัดการผู้ใช้
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            ระบบจัดการผู้ใช้ที่สมบูรณ์แบบ พร้อมฟีเจอร์การสมัครสมาชิก เข้าสู่ระบบ และจัดการบทบาทผู้ใช้
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/auth">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                เริ่มต้นใช้งาน
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white px-8 py-4 text-lg">
              เรียนรู้เพิ่มเติม
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardHeader className="text-center">
              <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <CardTitle className="text-white">จัดการผู้ใช้</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-center">
                ระบบสมัครสมาชิกและเข้าสู่ระบบที่ปลอดภัย พร้อมการจัดการข้อมูลผู้ใช้อย่างครบถ้วน
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardHeader className="text-center">
              <Shield className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <CardTitle className="text-white">ระบบรักษาความปลอดภัย</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-center">
                ใช้ Supabase Authentication ที่มีมาตรฐานสูง พร้อม Row Level Security
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardHeader className="text-center">
              <Database className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <CardTitle className="text-white">ฐานข้อมูลที่ทันสมัย</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-center">
                ฐานข้อมูล PostgreSQL พร้อมระบบ trigger และ function ที่ทำงานอัตโนมัติ
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Tech Stack */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">เทคโนโลยีที่ใช้</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'PostgreSQL'].map((tech) => (
              <div key={tech} className="bg-gray-800/50 border border-gray-700 rounded-lg px-6 py-3 backdrop-blur-sm">
                <span className="text-gray-300 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
