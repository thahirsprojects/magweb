import { ArrowRight, Users, Target, Award, TrendingUp, Instagram } from 'lucide-react';

import { Button } from '../ui/button';
import { Card } from '../ui/card';
import img1 from '../../assets/img1.JPG';
import img2 from '../../assets/img2.JPG';
import img3 from '../../assets/img3.JPG';
import img4 from '../../assets/img4.JPG';
import img6 from '../../assets/img6.JPG';
interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Trainers',
      description: 'Learn from industry professionals with years of real-world experience.',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Tailored Programs',
      description: 'Customized training solutions designed for your specific needs.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Certified Courses',
      description: 'Gain recognized certifications that enhance your professional profile.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Proven Results',
      description: 'Track record of transforming individuals and organizations.',
    },
  ];

  const instagramPosts = [
    { id: 1, image: img1 },
    { id: 2, image: img2 },
    { id: 3, image: img3 },
    { id: 4, image: img4 },
    
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 md:pt-24 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 md:space-y-8">
             <h1 className="text-4xl font-semibold md:text-5xl lg:text-6xl text-gray-900">
  Nurturing <br/>the <span className="text-[#2D5BFF]">leaders</span> of tomorrow
</h1>

              <p className="text-lg md:text-xl text-gray-600">
                Transform your workforce and students with comprehensive soft skill training programs designed for the modern professional landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => onNavigate('Services')}
                  className="bg-[#2D5BFF] hover:bg-[#1E40CC] text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-[0_20px_60px_-15px_rgba(45,91,255,0.5)] hover:scale-105 transition-all duration-300 group"
                >
                  Explore Services
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  onClick={() => onNavigate('Contact')}
                  variant="outline"
                  className="border-2 border-[#2D5BFF] text-[#2D5BFF] hover:bg-[#2D5BFF] hover:text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-[0_20px_60px_-15px_rgba(45,91,255,0.3)] hover:scale-105 transition-all duration-300"
                >
                  Get Started
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={img6}
                  alt="Professional training session"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="bg-[#2D5BFF] p-3 rounded-xl">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Trusted by</p>
                    <p className="text-xl text-gray-900">50+ Organizations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
              Why Choose <span className="text-[#2D5BFF]">Mag Resouce Revolution</span>?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional training experiences that create lasting impact.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 md:p-8 bg-white rounded-2xl  shadow-md border-gray-100 hover:border-[#2D5BFF] hover:-translate-y-2 transition-all duration-300 cursor-pointer  hover:shadow-blue-300"
              >
                <div className="bg-[#2D5BFF]/10 w-16 h-16 rounded-xl flex items-center justify-center text-[#2D5BFF] mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-[#2D5BFF] to-[#1E40CC]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            Ready to Transform Your Team?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Join hundreds of organizations that trust Mag Resouce Revolution for their soft skills training needs.
          </p>
          <Button
            onClick={() => onNavigate('Contact')}
            className="bg-white text-[#2D5BFF] hover:bg-gray-100 px-8 py-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Instagram className="w-8 h-8 text-[#2D5BFF]" />
              <h2 className="text-3xl md:text-4xl text-gray-900">Follow Our Journey</h2>
            </div>
            <p className="text-lg text-gray-600">Stay updated with our latest workshops and success stories</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {instagramPosts.map((post) => (
              <div
                key={post.id}
                className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <img 
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-[#2D5BFF]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="w-12 h-12 text-white" />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://www.instagram.com/mag_resource_revolution/?igsh=aXJwNnZreDgxY2Rv&utm_source=qr#"
              target="_blank"
              className="inline-flex items-center gap-2 text-[#2D5BFF] hover:text-[#1E40CC] transition-colors duration-300"
            >
              <span className="text-lg">mag_resource_revolution</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      
    </div>
  );
}