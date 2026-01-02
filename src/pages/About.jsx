import React from 'react';
import { Target, Eye, Heart, Users, CheckCircle, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Pure Tech Zone</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Innovating the future, one solution at a time.
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Pure Tech Zone is a forward-thinking technology agency dedicated to setting new standards in the digital world. Founded on the principles of innovation and excellence, we specialize in delivering high-quality web and mobile solutions that empower businesses to scale.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our team consists of passionate developers, designers, and strategists who believe in the power of technology to solve real-world problems. We don't just build apps; we build relationships and long-term success for our clients.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-gray-700">Expert Team</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-gray-700">Agile Process</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-gray-700">Modern Tech</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-gray-700">Global Reach</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide cutting-edge digital solutions that drive business growth and operational efficiency for enterprises of all sizes.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be a global leader in technology innovation, recognized for our quality, integrity, and client-centric approach.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-pink-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Heart className="h-7 w-7 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Core Values</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  <span>Innovation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  <span>Transparency</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  <span>Quality</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Why We Are Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6">
              <Users className="h-10 w-10 text-primary mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Dedicated Teams</h4>
              <p className="text-gray-500 text-sm">We assign dedicated experts to your project for 100% focus.</p>
            </div>
            <div className="p-6">
              <Lightbulb className="h-10 w-10 text-yellow-500 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Creative Solutions</h4>
              <p className="text-gray-500 text-sm">We think outside the box to solve complex challenges.</p>
            </div>
            <div className="p-6">
              <Target className="h-10 w-10 text-red-500 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Result Oriented</h4>
              <p className="text-gray-500 text-sm">Our primary goal is to deliver measurable results.</p>
            </div>
            <div className="p-6">
              <CheckCircle className="h-10 w-10 text-green-500 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Transparency</h4>
              <p className="text-gray-500 text-sm">No hidden costs or surprises. Clear communication always.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
