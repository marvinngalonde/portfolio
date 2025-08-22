export default function Skills() {   
    return (
        <>
             <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              My <span className="text-cyan-400">Skills</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Technologies and tools I work with to bring ideas to life</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-cyan-400">Frontend</h3>
              <div className="space-y-2 text-gray-300">
                <p>ReactJS</p>
                <p>NextJS</p>
                <p>TypeScript</p>
                <p>HTML/CSS</p>
                <p>JavaScript</p>
                <p>FlutterFlow</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-cyan-400">Backend</h3>
              <div className="space-y-2 text-gray-300">
                <p>Node.js</p>
                <p>Django</p>
                <p>Flask</p>
                <p>PHP</p>
                <p>Laravel</p>
                <p>RESTful APIs</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-cyan-400">Databases</h3>
              <div className="space-y-2 text-gray-300">
                <p>MySQL</p>
                <p>PostgreSQL</p>
                <p>MongoDB</p>
                <p>Supabase</p>
                <p>Firebase</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-cyan-400">Tools</h3>
              <div className="space-y-2 text-gray-300">
                <p>Docker</p>
                <p>Vercel</p>
                <p>GitHub Actions</p>
                <p>Jest</p>
                <p>Testing Library</p>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
       }
