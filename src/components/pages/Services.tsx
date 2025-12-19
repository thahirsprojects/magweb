import { Check, ArrowRight, Users, BookOpen, MessageSquare, Globe, Briefcase, GraduationCap } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      icon: <Users className="w-6 h-6" />,
      category: 'Talent Acquisition ',
      title: 'Recruitment Consultation',
      duration: 'Flexible',
      format: 'Customized',
      description: 'Strategic recruitment solutions to help you find and hire the best talent for your organization.',
      
      popular: true,
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      category: 'Professional Development',
      title: 'Upskilling Resources',
      duration: 'Ongoing',
      format: 'Hybrid',
      description: 'Comprehensive learning resources and programs designed to upgrade your team\'s skills and competencies.',
     
      popular: false,
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      category: 'Core Training',
      title: 'Soft Skills Training',
      duration: '8-12 weeks',
      format: 'In-person & Online',
      description: 'Comprehensive soft skills development programs that enhance communication, leadership, and teamwork.',
     
      popular: true,
    },
    {
      icon: <Globe className="w-6 h-6" />,
      category: 'International Expansion',
      title: 'Globalization Services',
      duration: 'Customized',
      format: 'Comprehensive',
      description: 'Support your organization\'s global expansion with cross-cultural training and international business strategies.',
      
      popular: false,
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      category: 'Individual Development',
      title: 'Career Coaching',
      duration: '3-6 months',
      format: '1-on-1 Sessions',
      description: 'Personalized career guidance to help professionals achieve their career goals and maximize their potential.',
     
      popular: false,
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      category: 'Student Success',
      title: 'Early Career Guidance',
      duration: '4-8 weeks',
      format: 'Group & Individual',
      description: 'Comprehensive support for students and recent graduates transitioning into the professional world.',
     
      popular: false,
    },
  ];

  const customSolutions = [
    {
      title: 'Industry-Specific Solutions',
      description: 'Tailored services designed for your industry requirements',
    },
    {
      title: 'On-Site Consulting',
      description: 'Bring our expertise directly to your organization',
    },
    {
      title: 'Long-term Engagement',
      description: 'Ongoing support and strategic advisory services',
    },
  ];

  return (
    <div className="min-h-screen pt-16 md:pt-20 bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-[#2D5BFF]/5 via-white to-[#2D5BFF]/5"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <Badge className="mb-6 bg-[#2D5BFF]/10 text-[#2D5BFF] hover:bg-[#2D5BFF]/20 px-4 py-2 border-none">
              Comprehensive Training Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-7xl text-gray-900 mb-6">
              Our <span className="text-[#2D5BFF]">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              From recruitment consultation to career coaching, we offer comprehensive solutions tailored to your organizational and individual development needs.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
  key={index}
  className="group p-5 bg-white rounded-2xl border-none shadow-lg hover:shadow-blue-300 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden flex flex-col"
>

                {service.popular && (
                  <Badge className="absolute top-4 right-4 text-xs bg-[#2D5BFF] text-white px-3 py-1 rounded-full">
                    Popular
                  </Badge>
                )}
                <div className="bg-[#2D5BFF]/10 w-14 h-10 rounded-xl flex items-center justify-center text-[#2D5BFF] mb-4">
                  {service.icon}
                </div>
                <p className="text-sm text-[#2D5BFF] mb-2 p-[5px] ">{service.category}</p>
                <h3 className="text-lg text-gray-900 mb-2">{service.title}</h3>
                <div className="flex gap-2 mb-3">
                  <Badge variant="outline" className="border-gray-300 text-gray-600">
                    {service.duration}
                  </Badge>
                  <Badge variant="outline" className="border-gray-300 text-gray-600">
                    {service.format}
                  </Badge>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
               

             
 </Card>
      ))}
     </div>
      </div>
      </section>

      
      
    </div>
  );
}
