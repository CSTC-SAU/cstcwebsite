import React, { useState, useEffect } from 'react';
import {
  Users,
  Mail,
  MessageSquare,
  MapPin,
  Phone,
  Calendar,
  Clock,
  Send,
  Loader2,
  Instagram,
  Github,
  Linkedin
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12 md:px-8 md:py-24">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have questions or want to get involved? Reach out to us through the form below or using our contact details.
          </p>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-2xl shadow-2xl border border-gray-700">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-300 mb-2 font-medium flex items-center">
                <Users size={18} className="mr-2 text-blue-400" /> Full Name
              </label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Enter Your Name"
                className={`w-full bg-gray-700 text-white border ${errors.name ? 'border-red-500' : 'border-gray-600'} p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition`}
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-300 mb-2 font-medium flex items-center">
                <Mail size={18} className="mr-2 text-blue-400" /> Email Address
              </label>
              <input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="abc@example.com"
                className={`w-full bg-gray-700 text-white border ${errors.email ? 'border-red-500' : 'border-gray-600'} p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition`}
              />
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-300 mb-2 font-medium flex items-center">
                <MessageSquare size={18} className="mr-2 text-blue-400" /> Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here..."
                rows={5}
                className={`w-full bg-gray-700 text-white border ${errors.message ? 'border-red-500' : 'border-gray-600'} p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition`}
              ></textarea>
              {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center disabled:opacity-70 group"
            >
              {isSubmitting ? (
                <Loader2 size={20} className="animate-spin mr-2" />
              ) : (
                <Send size={18} className="mr-2 transition-transform group-hover:translate-x-1" />
              )}
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitSuccess && (
              <div className="mt-4 p-4 bg-green-900/30 text-green-400 rounded-lg border border-green-700/50">
                Message sent successfully! We’ll get back to you soon.
              </div>
            )}
          </form>

          {/* Contact Details */}
          <div className="space-y-8">
            <div className="bg-gray-800 p-6 rounded-2xl shadow-2xl border border-gray-700">
              <h2 className="text-2xl font-bold text-gray-200 mb-6 flex items-center">
                <Users size={24} className="text-white mr-3" /> Club Information
              </h2>

              <div className="space-y-5 text-gray-300">
                <div className="flex items-start group">
                  <Mail size={20} className="text-blue-400 mr-4 group-hover:text-white transition" />
                  <div>
                    <p className="font-medium text-gray-200">Email</p>
                    <a href="mailto:cstc@sau.int" className="text-blue-400 hover:text-blue-300 hover:underline transition">cstc@sau.int</a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <MapPin size={20} className="text-red-400 mr-4 group-hover:text-white transition" />
                  <div>
                    <p className="font-medium text-gray-200">Address</p>
                    <p>PCM Block, South Asian University, Rajpur Road, Maidan Garhi, New Delhi 110068</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <Phone size={20} className="text-green-400 mr-4 group-hover:text-white transition" />
                  <div>
                    <p className="font-medium text-gray-200">Phone</p>
                    <p>+91 12345 67890</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-2xl shadow-2xl border border-gray-700">
              <h2 className="text-2xl font-bold text-gray-200 mb-6 flex items-center">
                <Calendar size={24} className="text-white mr-3" /> Connect With Us
              </h2>

              <div className="mb-8">
                <p className="text-gray-400 mb-4">Follow us on social media for updates:</p>
                <div className="flex gap-5">
                  <a href="https://instagram.com/cstc_sau" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-fuchsia-600 to-pink-700 p-3 rounded-full text-white hover:shadow-xl transition-all duration-300 hover:scale-110" aria-label="Instagram">
                    <Instagram size={24} />
                  </a>
                  <a href="https://github.com/cstcsau" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-3 rounded-full text-white hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-gray-600" aria-label="GitHub">
                    <Github size={24} />
                  </a>
                  <a href="https://www.linkedin.com/company/cstcsau" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-blue-700 to-blue-900 p-3 rounded-full text-white hover:shadow-xl transition-all duration-300 hover:scale-110" aria-label="LinkedIn">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-gray-400 mb-3">Find us on campus:</p>
                <div className="rounded-xl overflow-hidden h-64 border-2 border-gray-700">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.348288000745!2d77.19932231508032!3d28.5313213824581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1d4cc305677%3A0xe466806ab30781ab!2sSouth%20Asian%20University!5e0!3m2!1sen!2sin!4v1718899547197!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SAU Location Map"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center text-gray-500">
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
