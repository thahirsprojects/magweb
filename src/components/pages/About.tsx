import React from 'react';
import { Target, Eye, Award, Users, Briefcase } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import mamPic from '../../assets/Mam-pic.jpg';
import sirPic from '../../assets/Sir-pic.jpg';

export default function About() {
  const values = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Excellence',
      description: 'We strive for the highest quality in every training program we deliver.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and collective growth.',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Impact',
      description: 'We measure success by the transformation we create in people.',
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Professionalism',
      description: 'We maintain the highest standards of professional conduct.',
    },
  ];

  const team = [
    {
      name: 'Deva Kiruba',
      role: 'Director / Founder',
      image: mamPic,
      bio:
        'Deva has over 16 years of Hospitality and Technical head-hunting expertise. With over a decade and a half of people handling skills and diverse industry expertise across US, Canada, Australian and Pan-Asian market. She brings in high command in communication and expertise in Tech and Non-Tech Career Guidance for the Early career graduates and the Experienced. Her core strengths are Negotiation and People skills.',
    },
    {
      name: 'Aravind Murugan',
      role: 'Director / co founder',
      image: sirPic,
      bio:
        'Aravind is an Engineer with over a decade of Technical and Non -Technical head-hunting Global Resource across US, Canada, Australian and Pan-Asian market. He has been the Dealmaker for most of the Hi-Tech and Fin-Tech Clients he worked with globally. He converts the demanding clients to a workable prospect. He carries a strong Client and Vendor management expertise. Closing the Deals and Stakeholder Management are his core strength.',
    },
  ];

  return (
    <div className="min-h-screen pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-[#2D5BFF]/5 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6">
              About <span className="text-[#2D5BFF]">MAGRR</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We are dedicated to empowering individuals and organizations through transformative soft skills training that drives real-world success.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2010, MAGRR emerged from a simple yet powerful vision: to bridge the gap between academic knowledge and essential soft skills required in the professional world.
                </p>
                <p>
                  Over the past 15 years, we've grown from a small training consultancy to a leading provider of soft skills development programs, serving over 500 organizations and impacting more than 50,000 professionals across industries.
                </p>
                <p>
                  Our approach combines proven methodologies with innovative techniques, ensuring that every participant gains practical skills they can immediately apply in their professional lives.
                </p>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800"
                alt="MAGRR office"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <Card className="p-8 md:p-12 bg-white rounded-3xl border-none shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="bg-[#2D5BFF]/10 w-16 h-16 rounded-2xl flex items-center justify-center text-[#2D5BFF] mb-6">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg">
                To empower individuals and organizations with essential soft skills that drive professional excellence, foster collaboration, and create lasting positive impact in the workplace.
              </p>
            </Card>
            <Card className="p-8 md:p-12 bg-white rounded-3xl border-none shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="bg-[#2D5BFF]/10 w-16 h-16 rounded-2xl flex items-center justify-center text-[#2D5BFF] mb-6">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg">
                To be the global leader in soft skills training, recognized for transforming workplaces and educational institutions through innovative, impactful, and sustainable learning solutions.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg md:text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 md:p-8 bg-white rounded-2xl border-2 border-gray-100 hover:border-[#2D5BFF] shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-[#2D5BFF]/10 w-12 h-12 rounded-xl flex items-center justify-center text-[#2D5BFF] mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">Meet Our Leadership</h2>
            <p className="text-lg md:text-xl text-gray-600">Experienced professionals dedicated to your success</p>
          </div>

          {/* grid: items-start makes all cards align to the top */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto items-start">
            {team.map((member, index) => (
              <Card
                key={index}
                className="bg-white rounded-3xl border-none shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group cursor-pointer flex flex-col h-full"
              >
                {/* image wrapper: relative so overlay can be absolute */}
                <div className="relative w-full h-72 md:h-96 overflow-hidden">
                  {/* If your ImageWithFallback forwards className to its <img>, this will apply correctly.
                      If you find styling isn't applied, temporarily swap to <img src={member.image} ... /> to test. */}
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover block"
                  />
                  <div className="absolute inset-0 pointer-events-none bg-linear-to-t from-[#2D5BFF]/90 via-[#2D5BFF]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-8 grow">
                  <h3 className="text-2xl text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-[#2D5BFF] mb-4">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
