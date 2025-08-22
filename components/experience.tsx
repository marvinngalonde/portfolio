import { Card } from "@/components/ui/card"

export default function Experience() {
  return (
    <>
     <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Work <span className="text-cyan-400">Experience</span>
            </h2>
          </div>

          <div className="space-y-8">
            <Card className="bg-gray-800 border-gray-700 p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400">Full Stack Developer</h3>
                  <p className="text-lg">Kimtronix Global</p>
                </div>
                <div className="text-gray-400">
                  <p>January 2023 – Present</p>
                  <p>Harare, Zimbabwe</p>
                </div>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>
                  • Developed and maintained cross-platform web applications using React, Node.js, and modern web
                  technologies
                </li>
                <li>
                  • Designed and implemented robust front-end and back-end logic, ensuring seamless user experiences
                </li>
                <li>• Contributed to full-featured apps, successfully addressing real-world business challenges</li>
                <li>• Collaborated with teams to deliver high-quality software solutions on schedule</li>
              </ul>
            </Card>

            <Card className="bg-gray-800 border-gray-700 p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400">Mobile App Developer</h3>
                  <p className="text-lg">CyberSeIp Incorporation</p>
                </div>
                <div className="text-gray-400">
                  <p>October 2024 – Present</p>
                  <p>Harare, Zimbabwe</p>
                </div>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Developed mobile applications using Flutter and FlutterFlow with cross-platform compatibility</li>
                <li>• Managed integration and linking of applications with Supabase backend</li>
                <li>• Contributed to the full mobile app development lifecycle, from concept to deployment</li>
              </ul>
            </Card>

            <Card className="bg-gray-800 border-gray-700 p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400">Web Developer</h3>
                  <p className="text-lg">Verdsoft Private Limited</p>
                </div>
                <div className="text-gray-400">
                  <p>January 2021 – December 2023</p>
                  <p>Harare, Zimbabwe</p>
                </div>
              </div>
              <ul className="text-gray-300 space-y-2">
                <li>• Developed web applications using PHP, Python scripting, HTML, CSS, and JavaScript</li>
                <li>• Implemented responsive and user-friendly interfaces using fundamental web technologies</li>
                <li>• Collaborated on various web projects, contributing to design, development, and testing phases</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}