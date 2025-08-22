import React from 'react';
import { Button } from "@/components/ui/button"
import Image from "next/image"
export default function About() {
  return (
 <>
 <section  className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center lg:justify-start">
            <div className="hexagon-container-small">
              {/* <div className="hexagon-glow-small"></div> */}
              <div className="hexagon-image-small">
                <Image
                  src="./portfolio/ma.png"
                  alt="Marvin Ngalonde"
                  width={300}
                  height={300}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold mb-2">
                About <span className="text-cyan-400">Me</span>
              </h2>
              <p className="text-xl text-cyan-400 mb-6">Full Stack Developer!</p>
            </div>

            <p className="text-gray-300 leading-relaxed">
              I'm a highly passionate and driven tech enthusiast with over 4 years of experience in mobile and web
              development. I specialize in React, Node.js, and low-code platforms like FlutterFlow, with expertise in
              building cross-platform applications that solve real-world business challenges. I thrive in dynamic
              environments and continuously explore emerging technologies to deliver innovative solutions.
            </p>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-cyan-400 font-semibold">Location:</span>
                <p className="text-gray-300">Harare, Zimbabwe</p>
              </div>
              <div>
                <span className="text-cyan-400 font-semibold">Experience:</span>
                <p className="text-gray-300">4+ Years</p>
              </div>
              <div>
                <span className="text-cyan-400 font-semibold">Email:</span>
                <p className="text-gray-300">ngalondemarvin@gmail.com</p>
              </div>
              <div>
                <span className="text-cyan-400 font-semibold">Phone:</span>
                <p className="text-gray-300">+263 787 062 575</p>
              </div>
            </div>

            <Button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 px-8 py-3 rounded-full font-semibold">

            </Button>
          </div>
        </div>
      </section>
 </>
  );
}