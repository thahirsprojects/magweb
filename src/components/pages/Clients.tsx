import { useState, useMemo } from 'react';
import { Building2, GraduationCap, Award, Users, CheckCircle, Star, Quote, Factory, Laptop, Briefcase, BookOpen as BookIcon, Hospital, Search, TrendingUp, Target, Zap } from 'lucide-react';

import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';

interface ClientsProps {
  onNavigate: (page: string) => void;
}

interface Client {
  id: number;
  name: string;
  logo: string;
  category: string;
  sector: 'private' | 'public';
  industry: string;
}

export default function Clients({ onNavigate }: ClientsProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const stats = [
    {
      number: '500+',
      label: 'Clients Served',
      description: 'Across industries and sectors',
    },
    {
      number: '15K+',
      label: 'Professionals Trained',
      description: 'Individual lives transformed',
    },
    {
      number: '98%',
      label: 'Satisfaction Rate',
      description: 'Client retention and referrals',
    },
    {
      number: '25+',
      label: 'Countries Reached',
      description: 'Global training presence',
    },
  ];

  // Client categories for filtering
  const categories = [
    { id: 'all', name: 'All Clients', icon: <Building2 className="w-4 h-4" /> },
    { id: 'technology', name: 'Technology', icon: <Laptop className="w-4 h-4" /> },
    { id: 'finance', name: 'Finance', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'education', name: 'Education', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'healthcare', name: 'Healthcare', icon: <Hospital className="w-4 h-4" /> },
    { id: 'manufacturing', name: 'Manufacturing', icon: <Factory className="w-4 h-4" /> },
  ];

  // Industries list
  const industries = {
    private: [
      'Information Technology',
      'Finance & Banking',
      'Manufacturing',
      'Consulting',
      'Aviation & Logistics',
      'Healthcare',
      'Retail & E-commerce',
      'Telecommunications',
    ],
    public: [
      'Education & Universities',
      'Government Agencies',
      'Public Safety',
      'Research Institutions',
      'Non-Profit Organizations',
    ],
  };

  // Sample clients data (in a real app, this would come from an API)
  const clients: Client[] = [
    { id: 1, name: 'MRF Tires', logo: 'https://images.unsplash.com/photo-1709566805402-597ae1e3083d?w=200', category: 'manufacturing', sector: 'private', industry: 'Manufacturing' },
    { id: 2, name: 'NLC India Ltd', logo: 'https://images.unsplash.com/photo-1709566805402-597ae1e3083d?w=200', category: 'manufacturing', sector: 'public', industry: 'Government Agencies' },
    { id: 3, name: 'PMIST', logo: 'https://images.unsplash.com/photo-1709566805402-597ae1e3083d?w=200', category: 'education', sector: 'public', industry: 'Education & Universities' },
    { id: 4, name: 'TechVision Solutions', logo: 'https://images.unsplash.com/photo-1709566805402-597ae1e3083d?w=200', category: 'technology', sector: 'private', industry: 'Information Technology' },
    { id: 5, name: 'Global Finance Corp', logo: 'https://images.unsplash.com/photo-1709566805402-597ae1e3083d?w=200', category: 'finance', sector: 'private', industry: 'Finance & Banking' },
    { id: 6, name: 'Premier University', logo: 'https://images.unsplash.com/photo-1709566805402-597ae1e3083d?w=200', category: 'education', sector: 'public', industry: 'Education & Universities' },
    { id: 7, name: 'HealthCare Plus', logo: 'https://images.unsplash.com/photo-1709566805402-597ae1e3083d?w=200', category: 'healthcare', sector: 'private', industry: 'Healthcare' },
    { id: 8, name: 'InnovateCorp', logo: 'https://images.unsplash.com/photo-1709566805402-597ae1e3083d?w=200', category: 'technology', sector: 'private', industry: 'Information Technology' },
    { id: 9, name: 'State University System', logo: 'https://images.unsplash.com/photo-1709566805402-597ae1e3083d?w=200', category: 'education', sector: 'public', industry: 'Education & Universities' },
    { id: 10, name: 'MediCare Solutions', logo: 'https://images.unsplash.com/photo-1709566805402-597ae1e3083d?w=200', category: 'healthcare', sector: 'private', industry: 'Healthcare' },
  ];

  // Filter clients based on selected filters and search
  const filteredClients = useMemo(() => {
    return clients.filter((client) => {
      const matchesCategory = selectedCategory === 'all' || client.category === selectedCategory;
      
      return matchesCategory;
    });
  }, [selectedCategory, clients]);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Chief Learning Officer',
      company: 'TechVision Solutions',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300',
      quote: 'MAGRR has been instrumental in transforming our leadership pipeline. Their tailored approach to soft skills training resulted in a 40% improvement in our employee engagement scores within six months.',
      rating: 5,
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Dean of Business',
      company: 'Global University',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300',
      quote: 'The partnership with MAGRR elevated our career readiness programs to world-class standards. Our graduates now enter the workforce with confidence and the practical skills employers demand.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'VP of Human Resources',
      company: 'InnovateCorp',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300',
      quote: 'We chose MAGRR for their proven methodology and industry expertise. The measurable impact on our team collaboration and communication has exceeded all expectations. Truly exceptional service.',
      rating: 5,
    },
  ];

  const caseStudies = [
    {
      company: 'Global Tech Corporation',
      industry: 'Technology',
      challenge: 'Needed to enhance leadership capabilities across 200+ managers in multiple countries',
      solution: 'Custom 12-week leadership development program with virtual and in-person components',
      results: [
        '85% improvement in team collaboration scores',
        '92% participant satisfaction rating',
        '40% increase in internal promotion readiness',
      ],
      image: 'https://images.unsplash.com/photo-1642522029691-029b5a432954?w=800',
    },
    {
      company: 'Premier University Network',
      industry: 'Education',
      challenge: 'Students lacked practical soft skills for competitive job market entry',
      solution: 'Comprehensive career readiness program integrated into final-year curriculum',
      results: [
        '78% increase in job placement rates',
        '95% employer satisfaction with graduates',
        '50+ corporate recruitment partnerships',
      ],
      image: 'https://images.unsplash.com/flagged/photo-1576485436509-a7d286952b65?w=800',
    },
    {
      company: 'International Finance Group',
      industry: 'Finance',
      challenge: 'Expanding to Asian markets required cross-cultural communication excellence',
      solution: 'Targeted globalization services with cultural intelligence workshops',
      results: [
        '60% faster market penetration',
        'Zero cultural miscommunication incidents',
        '90% team confidence in global operations',
      ],
      image: 'https://images.unsplash.com/photo-1653566031535-bcf33e1c2893?w=800',
    },
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Customized Solutions',
      description: 'Every program tailored to your specific industry, culture, and objectives',
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Proven Methodology',
      description: 'Data-driven approaches backed by research and measurable outcomes',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Expert Trainers',
      description: 'Industry veterans with real-world experience and academic credentials',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Flexible Delivery',
      description: 'In-person, virtual, or hybrid formats to suit your needs',
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Ongoing Support',
      description: 'Continuous assistance and progress tracking beyond program completion',
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Certification',
      description: 'Recognized credentials that add value to your team members',
    },
  ];

  const resetFilters = () => {
    setSelectedCategory('all');
  };

  return (
    <div className="min-h-screen pt-16 md:pt-20 bg-white">
      {/* Hero Section */}
      
      
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-[#2D5BFF]/10 text-[#2D5BFF] hover:bg-[#2D5BFF]/20 px-4 py-2 border-none">
              Trusted Worldwide
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-7xl text-gray-900 mb-6">
              Empowering <span className="text-[#2D5BFF]">Organizations</span>
              <br />
              Around the Globe
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Leading corporations, universities, and institutions choose MAGRR to transform their teams through world-class soft skills training
            </p>
          </div>

          {/* Stats Grid 
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-16">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="p-6 md:p-8 bg-white rounded-2xl border-gray-100 hover:border-[#2D5BFF] shadow-lg hover:shadow-blue-300 hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="flex flex-col">
                  <p className="text-4xl md:text-5xl text-[#2D5BFF] mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </p>
                  <h3 className="text-base md:text-lg text-gray-900 mb-2">{stat.label}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{stat.description}</p>
                </div>
              </Card>
            ))}
          </div>*/}
        </div>
      

      {/* Client Portfolio Section with Filters */}
     {/* <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
              Our Client Portfolio
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Explore the diverse range of organizations we've partnered with
            </p>
          </div> 

          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-[#2D5BFF] text-white shadow-lg hover:shadow-[0_10px_30px_-10px_rgba(45,91,255,0.5)]'
                    : 'border-2 border-gray-200 hover:border-[#2D5BFF] hover:bg-[#2D5BFF]/5'
                }`}
              >
                <span className="flex items-center gap-2">
                  {category.icon}
                  {category.name}
                </span>
              </Button>
            ))}
          </div>

          
          <div className="text-center mb-8">
            <p className="text-gray-600">
              Showing <span className="text-[#2D5BFF]">{filteredClients.length}</span> of{' '}
              <span className="text-[#2D5BFF]">{clients.length}</span> clients
            </p>
          </div>

          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {filteredClients.map((client) => (
              <Card
                key={client.id}
                className="p-6 bg-white rounded-2xl border-gray-100 hover:border-[#2D5BFF] shadow-lg hover:shadow-blue-300 hover:-translate-y-2 transition-all duration-300 group cursor-pointer relative"
              >
                
                <Badge 
                  className={`absolute top-3 right-3 px-2 py-1 text-xs border-none ${
                    client.sector === 'private' 
                      ? 'bg-emerald-100 text-emerald-700' 
                      : 'bg-blue-100 text-blue-700'
                  }`}
                >
                  {client.sector === 'private' ? 'Private' : 'Public'}
                </Badge>
                
                <div className="aspect-square flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-linear-to-br from-[#2D5BFF]/0 to-[#2D5BFF]/0 group-hover:from-[#2D5BFF]/5 group-hover:to-[#2D5BFF]/10 rounded-xl transition-all duration-300"></div>
                    <div className="relative flex items-center justify-center h-full group-hover:scale-110 transition-transform duration-300">
                      <Building2 className="w-12 h-12 text-gray-300 group-hover:text-[#2D5BFF] transition-colors duration-300" />
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-900 group-hover:text-[#2D5BFF] transition-colors duration-300">
                    {client.name}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          
          {filteredClients.length === 0 && (
            <div className="text-center py-16">
              <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-2xl text-gray-900 mb-2">No clients found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your filters or search query
              </p>
              <Button
                onClick={resetFilters}
                className="bg-[#2D5BFF] text-white hover:bg-[#1E40CC] px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section> */}

      {/* Featured Case Studies */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-4 bg-[#2D5BFF]/10 text-[#2D5BFF] border-none px-4 py-2">
              Featured Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Real transformations, measurable results, lasting impact
            </p>
          </div>
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-white rounded-3xl border-gray-100 hover:border-[#2D5BFF] shadow-lg hover:shadow-blue-300 hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img
                      src={study.image}
                      alt={study.company}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  <div className={`p-8 md:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <Badge className="mb-4 bg-[#2D5BFF]/10 text-[#2D5BFF] border-none w-fit px-3 py-1">
                      {study.industry}
                    </Badge>
                    <h3 className="text-2xl md:text-3xl text-gray-900 mb-4">{study.company}</h3>
                    <div className="space-y-4 mb-6">
                      <div>
                        <p className="text-sm text-[#2D5BFF] mb-1">Challenge</p>
                        <p className="text-gray-700">{study.challenge}</p>
                      </div>
                      <div>
                        <p className="text-sm text-[#2D5BFF] mb-1">Solution</p>
                        <p className="text-gray-700">{study.solution}</p>
                      </div>
                      <div>
                        <p className="text-sm text-[#2D5BFF] mb-2">Results</p>
                        <ul className="space-y-2">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-[#2D5BFF] shrink-0 mt-0.5" />
                              <span className="text-gray-700">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section> 

      {/* Client Testimonials */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-4 bg-[#2D5BFF]/10 text-[#2D5BFF] border-none px-4 py-2">
              Client Reviews
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Hear directly from leaders who have experienced the MAGRR difference
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 bg-white rounded-3xl border-gray-100 hover:border-[#2D5BFF] shadow-lg hover:shadow-blue-300 hover:-translate-y-2 transition-all duration-300 relative"
              >
                <Quote className="w-10 h-10 text-[#2D5BFF]/20 absolute top-6 right-6" />
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#2D5BFF] text-[#2D5BFF]" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="w-14 h-14 rounded-full overflow-hidden shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-[#2D5BFF]">{testimonial.company}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Organizations Choose MAGRR */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
              Why Organizations Choose MAGRR
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions backed by expertise, innovation, and proven results
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-8 bg-white rounded-2xl border-gray-100 hover:border-[#2D5BFF] shadow-lg hover:shadow-blue-300 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-linear-to-br from-[#2D5BFF]/10 to-[#2D5BFF]/5 w-14 h-14 rounded-2xl flex items-center justify-center text-[#2D5BFF] mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}