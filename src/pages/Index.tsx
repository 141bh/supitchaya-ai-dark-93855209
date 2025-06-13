import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Youtube, Facebook, Globe, Mail, GraduationCap, User, Briefcase, LogIn } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="absolute top-0 right-0 p-6 z-10">
        <Link to="/login">
          <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white">
            <LogIn className="mr-2 h-4 w-4" />
            Sign In
          </Button>
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="container mx-auto px-6 py-20 relative">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
              <User size={64} className="text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Supitchaya
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              AI Content Creator & Educator | 10+ Years Teaching Experience
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge variant="secondary" className="bg-gray-700/50 text-blue-400 hover:bg-gray-600/50 transition-colors px-4 py-2">
                AI Specialist
              </Badge>
              <Badge variant="secondary" className="bg-gray-700/50 text-purple-400 hover:bg-gray-600/50 transition-colors px-4 py-2">
                Content Creator
              </Badge>
              <Badge variant="secondary" className="bg-gray-700/50 text-green-400 hover:bg-gray-600/50 transition-colors px-4 py-2">
                Coding Instructor
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-6">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-100">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <Briefcase className="text-blue-400 mr-3" size={28} />
                    <h3 className="text-xl font-semibold text-gray-100">Professional Experience</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    เป็นคอนเทนครีเอเตอร์ AI ที่มีความเชี่ยวชาญในการสอน AI และ Coding 
                    พร้อมประสบการณ์การสอนมากกว่า 10 ปี ในการถ่ายทอดความรู้ด้าน
                    เทคโนโลยีและปัญญาประดิษฐ์
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="text-purple-400 mr-3" size={28} />
                    <h3 className="text-xl font-semibold text-gray-100">Education</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    สำเร็จการศึกษาด้านระบบสารสนเทศทางคอมพิวเตอร์ 
                    จากมหาวิทยาลัยเทคโนโลยีราชมงคล ซึ่งเป็นพื้นฐานที่แข็งแกร่ง
                    ในการพัฒนาและสอนเทคโนโลยี
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-100">
              My Work
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="bg-gradient-to-br from-red-900/30 to-red-800/30 border-red-700/30 hover:from-red-800/40 hover:to-red-700/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-500 transition-colors">
                    <Youtube size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-100">YouTube Channel</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    ช่อง Supitchaya เป็นช่องเกี่ยวกับ AI และ Coding 
                    ที่มีเนื้อหาคุณภาพสูงและอัพเดตตาม Trend เทคโนโลยีใหม่ๆ
                  </p>
                  <Button 
                    onClick={() => handleSocialClick('https://www.youtube.com/@สุพิชญา ปัญญากอง')}
                    className="bg-red-600 hover:bg-red-700 text-white transition-colors"
                  >
                    Visit Channel
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 border-blue-700/30 hover:from-blue-800/40 hover:to-blue-700/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                    <Facebook size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-100">Facebook Page</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    เพจ Supitchaya เป็นเพจเกี่ยวกับ AI 
                    ที่แชร์ความรู้และข่าวสารเทคโนโลยีอัพเดตใหม่ๆ 
                    พร้อมการติดตาม Trend AI
                  </p>
                  <Button 
                    onClick={() => handleSocialClick('https://www.facebook.com/supitchaya.panyakong')}
                    className="bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                  >
                    Visit Page
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-900/30 to-green-800/30 border-green-700/30 hover:from-green-800/40 hover:to-green-700/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-600 rounded-full flex items-center justify-center group-hover:bg-green-500 transition-colors">
                    <Globe size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-100">Website</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Supitchaya.com เป็นเว็บไซต์เกี่ยวกับ AI และ Coding 
                    ที่รวบรวมบทความ Tutorial และ Resource 
                    ที่มีคุณภาพสำหรับผู้สนใจเทคโนโลยี
                  </p>
                  <Button 
                    onClick={() => handleSocialClick('https://supitchaya.com')}
                    className="bg-green-600 hover:bg-green-700 text-white transition-colors"
                  >
                    Visit Website
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-6">
          <div className={`text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-gray-100">
              Get In Touch
            </h2>
            <Card className="max-w-2xl mx-auto bg-gradient-to-br from-gray-800/50 to-gray-700/50 border-gray-600 hover:from-gray-700/60 hover:to-gray-600/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <Mail className="text-blue-400 mr-3" size={28} />
                  <h3 className="text-xl font-semibold text-gray-100">Contact Me</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  สนใจติดต่อสอบถามหรือขอคำปรึกษาเกี่ยวกับ AI และ Coding? 
                  ติดต่อมาได้ทางเพจ Facebook ของเรา
                </p>
                <Button 
                  onClick={() => handleSocialClick('https://www.facebook.com/supitchaya.panyakong')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 hover:scale-105 shadow-lg"
                  size="lg"
                >
                  <Facebook className="mr-2" size={20} />
                  Contact via Facebook
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Supitchaya. Made with ❤️ for sharing AI knowledge.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
