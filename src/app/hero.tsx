import { Linkedin, Github } from 'lucide-react';
import Image from 'next/image';

export default function ProfileHeader() {
  return (
    
    <div className="flex flex-col md:flex-row items-center justify-between p-8 space-y-6 md:space-y-0 md:space-x-12">
      {/* Text Section */}
      <div className="ml-24 mt text-left md:w-1/2 order-1 md:order-none">
      <p className="text-gray-600">Hello, I&apos;m</p>
        <h1 className="text-5xl font-bold leading-tight">Muhammad Shezan</h1>
        <p className="text-lg text-gray-500 mt-2">Frontend Developer, Ready to make your ideas into reality through latest technology React/NEXTJS and Tailwind CSS</p>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center md:justify-end order-2">
        <Image
          src="/shezan.png" 
          alt="Profile Picture of Muhammad Shezan"
          width={250}
          height={250}
          className="mr-24 rounded-full object-cover"
        />
      </div>

      {/* Icon Section */}
      <div className="flex space-x-6 mt-6 md:mt-0 order-3 md:order-none">
        <a
          href="https://www.linkedin.com/in/muhammad-shezan"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin size={32} className="text-gray-800 hover:text-blue-600 transition duration-300" />
        </a>
        <a
          href="https://github.com/shezanusman08"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github size={32} className="text-gray-800 hover:text-gray-900 transition duration-300" />
        </a>
      </div>
    </div>
  );
}
