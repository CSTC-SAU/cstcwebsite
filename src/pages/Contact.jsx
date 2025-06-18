import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Calendar, Github, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {



  return (
    <div className="min-h-screen  p-8 md:p-16">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Contact Form */}
        <form  className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
           
            className="w-full border border-gray-300 p-3 rounded"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-gray-300 p-3 rounded"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full border border-gray-300 p-3 rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-indigo-800 transition"
          >
            Send Message
          </button>

          
        </form>

        {/* Contact Details */}
        <div className="space-y-4 text-lg">
          <p>Computer Science Technology Club</p>
          <p><strong>Email:</strong> cstc@sau.int</p>
          <p><strong>Address:</strong> PCM Block, South Asian University, Maidan Garhi, New Delhi</p>
          <div className="flex gap-4 mt-4">
            <a href="https://instagram.com/cstc_sau" target='_blank' className="hover:text-blue-500"><Instagram/></a>
            <a href="https://github.com/cstcsau" target='_blank' className="hover:text-blue-500">< Github/></a>
            <a href="https://www.linkedin.com/company/cstcsau" target='_blank' className="hover:text-blue-500 linkedin"><Linkedin /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;