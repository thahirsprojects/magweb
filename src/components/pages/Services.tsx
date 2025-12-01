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
      category: 'Talent Acquisition',
      title: 'Recruitment Consultation',
      duration: 'Flexible',
      format: 'Customized',
      description: 'Strategic recruitment solutions to help you find and hire the best talent for your organization.',
      features: [
        'Talent sourcing and screening',
        'Interview process optimization',
        'Employer branding strategies',
        'Candidate assessment frameworks',
        'Recruitment analytics and insights',
      ],
      popular: true,
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      category: 'Professional Development',
      title: 'Upskilling Resources',
      duration: 'Ongoing',
      format: 'Hybrid',
      description: 'Comprehensive learning resources and programs designed to upgrade your team\'s skills and competencies.',
      features: [
        'Customized learning pathways',
        'Online course libraries',
        'Skills gap analysis',
        'Professional certification support',
        'Performance tracking tools',
      ],
      popular: false,
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      category: 'Core Training',
      title: 'Soft Skills Training',
      duration: '8-12 weeks',
      format: 'In-person & Online',
      description: 'Comprehensive soft skills development programs that enhance communication, leadership, and teamwork.',
      features: [
        'Leadership and management skills',
        'Effective communication techniques',
        'Emotional intelligence development',
        'Team collaboration strategies',
        'Conflict resolution training',
      ],
      popular: true,
    },
    {
      icon: <Globe className="w-6 h-6" />,
      category: 'International Expansion',
      title: 'Globalization Services',
      duration: 'Customized',
      format: 'Comprehensive',
      description: 'Support your organization\'s global expansion with cross-cultural training and international business strategies.',
      features: [
        'Cross-cultural communication',
        'Global market entry strategies',
        'International team management',
        'Cultural sensitivity training',
        'Global compliance and ethics',
      ],
      popular: false,
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      category: 'Individual Development',
      title: 'Career Coaching',
      duration: '3-6 months',
      format: '1-on-1 Sessions',
      description: 'Personalized career guidance to help professionals achieve their career goals and maximize their potential.',
      features: [
        'Career path planning',
        'Personal branding strategies',
        'Job search optimization',
        'Interview preparation',
        'Leadership development coaching',
      ],
      popular: false,
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      category: 'Student Success',
      title: 'Early Career Guidance',
      duration: '4-8 weeks',
      format: 'Group & Individual',
      description: 'Comprehensive support for students and recent graduates transitioning into the professional world.',
      features: [
        'Career exploration and planning',
        'Resume and cover letter writing',
        'Professional networking skills',
        'Interview and workplace etiquette',
        'First job success strategies',
      ],
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

      {/* Services Grid */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 bg-white rounded-3xl border-gray-100 hover:border-[#2D5BFF] shadow-lg hover:shadow-blue-300 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden flex flex-col"
              >
                {service.popular && (
                  <Badge className="absolute top-6 right-6 bg-[#2D5BFF] text-white px-3 py-1 rounded-full">
                    Popular
                  </Badge>
                )}
                <div className="bg-[#2D5BFF]/10 w-14 h-14 rounded-2xl flex items-center justify-center text-[#2D5BFF] mb-4">
                  {service.icon}
                </div>
                <p className="text-sm text-[#2D5BFF] mb-2">{service.category}</p>
                <h3 className="text-2xl text-gray-900 mb-3">{service.title}</h3>
                <div className="flex gap-4 mb-4">
                  <Badge variant="outline" className="border-gray-300 text-gray-600">
                    {service.duration}
                  </Badge>
                  <Badge variant="outline" className="border-gray-300 text-gray-600">
                    {service.format}
                  </Badge>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-3 mb-6 grow">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-[#2D5BFF] shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* AWS-style minimal CTA */}
                <Button
                  onClick={() => onNavigate('Contact')}
                  variant="ghost"
                  className="mt-auto px-0 py-0 h-auto bg-transparent shadow-none hover:bg-transparent text-gray-900 font-medium flex items-center gap-1.5 transition-all duration-300"
                >
                  {/* Text slides in when card hovered; hidden (width 0) otherwise */}
                  <span
                    className="
                      inline-block overflow-hidden whitespace-nowrap
                      max-w-0 group-hover:max-w-[120px]
                      transition-all duration-300
                    "
                  >
                    <span
                      className="
                        inline-block -translate-x-3 group-hover:translate-x-0
                        transition-transform duration-300
                      "
                    >
                      Learn more
                    </span>
                  </span>

                  {/* Arrow always visible, nudges right on hover */}
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
              Custom Solutions
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              We also offer tailored services to meet your specific needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {customSolutions.map((solution, index) => (
              <Card
                key={index}
                className="p-8 bg-white rounded-2xl border-2 border-gray-100 hover:border-[#2D5BFF] shadow-md hover:shadow-blue-300 hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <h3 className="text-xl text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
              Our Service Process
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              A proven methodology for maximum impact
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'We understand your unique needs and goals' },
              { step: '02', title: 'Strategy', description: 'Custom solution development for your objectives' },
              { step: '03', title: 'Implementation', description: 'Expert delivery with measurable outcomes' },
              { step: '04', title: 'Support', description: 'Ongoing engagement and continuous improvement' },
            ].map((item, index) => (
              <div key={index} className="relative text-center group">
                <div className="bg-[#2D5BFF]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#2D5BFF] transition-colors duration-300">
                  <span className="text-2xl text-[#2D5BFF] group-hover:text-white transition-colors duration-300">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                {index < 3 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 text-gray-300 w-8 h-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
