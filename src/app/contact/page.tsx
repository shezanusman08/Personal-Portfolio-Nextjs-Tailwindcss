"use client";

import { Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    
    // Handle form submission logic here
    alert(`Form submitted!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-start p-6 bg-gray-100 min-h-screen">
      {/* Left Section */}
      <div className="md:w-1/2 mb-6 md:mb-0">
        <h2 className="text-2xl font-semibold mb-4">Let’s work together</h2>
        <p className="text-gray-600 mb-6">
          I’m open to new projects and collaborations! Let’s connect and create something amazing together.
        </p>
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/muhammad-shezan" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://www.github.com/shezanusman08" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <Github className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Right Section (Contact Form) */}
      <form onSubmit={handleSubmit} className="md:w-1/2 space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200"
          required
        />
        <textarea
          name="message"
          placeholder="Type your message here"
          className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-gray-200"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full p-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
