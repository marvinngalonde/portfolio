'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,

} from "@/components/ui/dialog"

import {  ExternalLink} from "lucide-react"
import Image from "next/image"
import React from "react"

export default function Portfolio() {

const [selectedProject, setSelectedProject] = React.useState('')
  const [preview, setPreview] = React.useState(false)

  const handleProjectClick = (projectUrl: string) => {
    console.log(`Opening project: ${projectUrl}`);
    setSelectedProject(projectUrl);
    setPreview(true);
  };

  return (
    <>
      <section id="portfolio" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Latest <span className="text-cyan-400">Projects</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gray-800 border-gray-700 overflow-hidden group hover:border-cyan-400 transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                <Image
                  src="./portfolio/neo.png"
                  alt="Neocentric Interiors"
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-white font-semibold mb-2">Neocentric Interiors</h3>
                <p className="text-gray-400 mb-4">
                  Modern web application built with React, TypeScript, and TailwindCSS for interior design showcase.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded">React</span>
                    <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded">TypeScript</span>
                  </div>
                  <ExternalLink size={20} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </div>
              </div>
            </Card>
            <Card className="bg-gray-800 border-gray-700 overflow-hidden group hover:border-cyan-400 transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                <Image
                  src="./portfolio/posy.png"
                  alt="posy"
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-white font-semibold mb-2">Business Management System</h3>
                <p className="text-gray-400 mb-4">
                  Comprehensive POS and business management solution with React, NextJS, and MySQL.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded">Next.js</span>
                    <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded">TypeScript</span>
                    <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded">MySQL</span>
                  </div>
                  <ExternalLink size={20} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </div>
              </div>
            </Card>

        

            <Card className="bg-gray-800 border-gray-700 overflow-hidden group hover:border-cyan-400 transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                <Image
                  src="./portfolio/shop.jpg"
                  alt="Mobile POS"
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-white font-semibold mb-2">Mobile POS</h3>
                <p className="text-gray-400 mb-4">
                  Cross-platform mobile point-of-sale application built with Flutter and Supabase backend.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded">Flutter</span>
                    <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded">Supabase</span>
                  </div>
                  <ExternalLink size={20} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </div>
              </div>
            </Card>

            <Card className="bg-gray-800 border-gray-700 overflow-hidden group hover:border-cyan-400 transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                <Image
                  src="./portfolio/gym.png"
                  alt="Gym Management System"
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-white font-semibold mb-2">Gym Management System</h3>
                <p className="text-gray-400 mb-4">
                  Complete gym management solution with member tracking, built with PHP, Python, and MySQL.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded">PHP</span>
                    <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded">Python</span>
                    <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded">MySQL</span>
                  </div>
                  <ExternalLink size={20} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </div>
              </div>
            </Card>

            <Card className="bg-gray-800 border-gray-700 overflow-hidden group hover:border-cyan-400 transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                <Image
                  src="./portfolio/rh.png"
                  alt="Web Development"
                  width={300}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-white font-semibold mb-2">Royals Haven</h3>
                <p className="text-gray-400 mb-4">
                  Modern web application built with React, TypeScript, and TailwindCSS for interior design showcase.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded">React</span>
                    <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded">Node.js</span>
                  </div>

                  <ExternalLink size={20} onClick={() => handleProjectClick('https://royalshaven.co.zw')} className="text-gray-400 group-hover:text-cyan-400 transition-colors" />


                </div>
              </div>
            </Card>


          </div>
        </div>
      </section>

  <Dialog open={preview} onOpenChange={() => setPreview(false)}>
  <DialogContent className="w-[80vw] h-[80vh] max-w-[90vw] p-0">
    <DialogHeader className="flex justify-between items-center p-4">
      <DialogTitle className="truncate max-w-[70%]">{selectedProject}</DialogTitle>
    </DialogHeader>

    {selectedProject && (
      <iframe
        src={selectedProject}
        className="w-full h-[calc(100%-56px)] rounded-b-lg border-0"
        title={`Project - ${selectedProject}`}
      />
    )}
  </DialogContent>
</Dialog>

    </>
  );
}   