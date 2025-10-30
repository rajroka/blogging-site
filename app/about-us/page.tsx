import React from "react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Welcome to <span className="font-semibold text-blue-600">Our Company</span> — 
          a place where creativity meets technology. We’re passionate about building 
          modern, user-friendly, and scalable digital experiences for everyone.
        </p>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to empower individuals and businesses through 
              innovative software solutions. We believe in clean design, efficient 
              code, and creating value for every user.
            </p>
          </div>
          <div>
            <Image
              src="/about-image.jpg"
              alt="Team working"
              width={500}
              height={350}
              className="rounded-2xl shadow-md"
            />
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-3">Our Values</h2>
          <ul className="text-gray-700 leading-relaxed space-y-2">
            <li>💡 Innovation and creativity in every project</li>
            <li>🤝 Collaboration and transparency with clients</li>
            <li>🌍 Building for sustainability and inclusivity</li>
            <li>🚀 Striving for excellence and continuous growth</li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-3">Made by a Solo Developer 👨‍💻</h2>
          <p className="text-gray-700 leading-relaxed">
            This project was created and maintained by a solo developer who handles 
            everything — from design and development to deployment. Every line of code 
            and design decision reflects passion, dedication, and continuous learning.
          </p>
        </div>

        <p className="mt-10 text-gray-600">
          We’re more than a tech idea — we’re a growing vision built with creativity, 
          persistence, and love for technology.
        </p>
      </div>
    </section>
  );
}
