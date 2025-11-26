import { useState } from 'react';
import { Mail, Phone, Send, Clock, MapPin } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      organization: '',
      phone: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      detail: 'info@magresourcerevolution .com',
      link: 'mailto:info@magresourcerevolution.com',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      detail: '+91 78680 23276',
      link: 'tel:+919876543210',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      detail: 'Monday - Friday 8am - 6pm  Saturday 8am - 2pm',
      link: '#',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      detail: 'VQ7P+WPQ, Thavalakuppam, Puducherry 605007, India',
      link: 'https://maps.app.goo.gl/gjDg7A2Mk7SP9Qhc8',
    },
  ];

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#2D5BFF]/5 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6">
            Get In <span className="text-[#2D5BFF]">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our programs? Want to discuss a custom training solution? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="p-6 bg-white rounded-2xl border-none shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-[#2D5BFF]/10 w-14 h-14 rounded-xl flex items-center justify-center text-[#2D5BFF] mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg text-gray-900 mb-2">{info.title}</h3>
                <a
                  href={info.link}
                  className="text-gray-600 hover:text-[#2D5BFF] transition-colors duration-300"
                >
                  {info.detail}
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">Send Us a Message</h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-gray-300 focus:border-[#2D5BFF] focus:ring-[#2D5BFF]"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-gray-300 focus:border-[#2D5BFF] focus:ring-[#2D5BFF]"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm mb-2 text-gray-700">
                    Organization
                  </label>
                  <Input
                    id="organization"
                    name="organization"
                    type="text"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-gray-300 focus:border-[#2D5BFF] focus:ring-[#2D5BFF]"
                    placeholder="Your Company Name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm mb-2 text-gray-700">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border-gray-300 focus:border-[#2D5BFF] focus:ring-[#2D5BFF]"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border-gray-300 focus:border-[#2D5BFF] focus:ring-[#2D5BFF] resize-none"
                    placeholder="Tell us about your training needs..."
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#2D5BFF] hover:bg-[#1E40CC] text-white py-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>

            {/* Map / Additional Info */}
            <div className="space-y-8">
              <Card className="p-8 bg-white rounded-3xl border-none shadow-lg">
                <h3 className="text-2xl text-gray-900 mb-4">Why Contact Us?</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#2D5BFF] rounded-full mt-2"></div>
                    <span>Get personalized program recommendations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#2D5BFF] rounded-full mt-2"></div>
                    <span>Request a custom training proposal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#2D5BFF] rounded-full mt-2"></div>
                    <span>Schedule a consultation with our experts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#2D5BFF] rounded-full mt-2"></div>
                    <span>Discuss collaboration opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#2D5BFF] rounded-full mt-2"></div>
                    <span>Learn about pricing and packages</span>
                  </li>
                </ul>
              </Card>

              {/* FAQ Card */}
              <Card className="p-8 bg-gradient-to-br from-[#2D5BFF] to-[#1E40CC] text-white rounded-3xl border-none shadow-lg">
                <h3 className="text-2xl mb-4">Quick Response</h3>
                <p className="text-lg opacity-90">
                  Our team typically responds to inquiries within 24 hours during business days. For urgent matters, please call us directly.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}