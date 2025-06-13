
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LogOut, User, Calendar, Clock, Shield } from "lucide-react";

const Dashboard = () => {
  const { user, profile, signOut, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">กำลังโหลด...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('th-TH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">แดชบอร์ด</h1>
            <p className="text-gray-400">ยินดีต้อนรับ, {profile?.name || user.email}</p>
          </div>
          <Button
            onClick={handleSignOut}
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            <LogOut className="mr-2 h-4 w-4" />
            ออกจากระบบ
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* ข้อมูลโปรไฟล์ */}
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <User className="mr-2 h-5 w-5" />
                ข้อมูลโปรไฟล์
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-gray-400 text-sm">ชื่อ</label>
                <p className="text-white font-medium">{profile?.name || 'ไม่ระบุ'}</p>
              </div>
              <div>
                <label className="text-gray-400 text-sm">อีเมล</label>
                <p className="text-white font-medium">{user.email}</p>
              </div>
              <div>
                <label className="text-gray-400 text-sm">บทบาท</label>
                <div className="mt-1">
                  <Badge variant={profile?.role === 'admin' ? 'destructive' : 'secondary'}>
                    <Shield className="mr-1 h-3 w-3" />
                    {profile?.role === 'admin' ? 'ผู้ดูแลระบบ' : 'ผู้ใช้งาน'}
                  </Badge>
                </div>
              </div>
              <div>
                <label className="text-gray-400 text-sm">รหัสผู้ใช้</label>
                <p className="text-white font-mono text-sm">{user.id}</p>
              </div>
            </CardContent>
          </Card>

          {/* ข้อมูลการใช้งาน */}
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                ข้อมูลการใช้งาน
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-gray-400 text-sm">วันที่สมัครสมาชิก</label>
                <p className="text-white font-medium flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  {profile?.created_at ? formatDate(profile.created_at) : 'ไม่ระบุ'}
                </p>
              </div>
              <div>
                <label className="text-gray-400 text-sm">เข้าสู่ระบบล่าสุด</label>
                <p className="text-white font-medium flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  {profile?.last_login_at ? formatDate(profile.last_login_at) : 'ไม่เคยเข้าสู่ระบบ'}
                </p>
              </div>
              <div>
                <label className="text-gray-400 text-sm">สถานะบัญชี</label>
                <p className="text-white font-medium">
                  <Badge variant="default" className="bg-green-600">
                    ใช้งานได้
                  </Badge>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ฟีเจอร์เพิ่มเติม */}
        <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm mt-6">
          <CardHeader>
            <CardTitle className="text-white">ฟีเจอร์</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white h-16">
                <div className="text-center">
                  <User className="mx-auto h-6 w-6 mb-1" />
                  <div className="text-sm">แก้ไขโปรไฟล์</div>
                </div>
              </Button>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white h-16">
                <div className="text-center">
                  <Shield className="mx-auto h-6 w-6 mb-1" />
                  <div className="text-sm">เปลี่ยนรหัสผ่าน</div>
                </div>
              </Button>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white h-16">
                <div className="text-center">
                  <Calendar className="mx-auto h-6 w-6 mb-1" />
                  <div className="text-sm">ประวัติการใช้งาน</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
