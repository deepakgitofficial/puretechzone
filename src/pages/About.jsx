import React from 'react';
import { Target, Eye, Heart, Users, CheckCircle, Lightbulb } from 'lucide-react';
import dpkImg from '../components/assets/images/dpk1.jpg';

const About = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-primary py-16 text-white text-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Pure Tech Zone</h1>
          <p className="ext-primary-foreground/90 max-w-2xl mx-auto">
            Innovating the future, one solution at a time.
          </p>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10">

            {/* Image */}
            <div className="w-full md:w-1/3 flex justify-center ">
              <div className=' pb-1 rounded-full bg-primary-dark border border-primary-dark '>

                <img
                  src={dpkImg}
                  alt="Founder - Pure Tech Zone"
                  className=" w-[160px] h-[160px]  sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px]   rounded-[300px] shadow-xl object-cover "
                />
              </div>
            </div>


            {/* Content */}
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Welcome to Pure Tech Zone
              </h2>

              <p className="text-gray-600 mb-5 leading-relaxed text-sm sm:text-base">
                Hi, I’m <strong>Deepak Kashyap</strong>, founder and web developer behind Pure Tech Zone.
                I help businesses, startups, and individuals build professional, responsive,
                and user-friendly websites that strengthen their online presence.
              </p>

              <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                My goal is to help businesses, startups, and individuals build a strong
                online presence with affordable, professional, and customized web solutions.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <span className="text-gray-700 text-sm sm:text-base">
                    Responsive & user-friendly websites
                  </span>
                </div>

                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <span className="text-gray-700 text-sm sm:text-base">
                    Affordable & high-quality web solutions
                  </span>
                </div>

                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <span className="text-gray-700 text-sm sm:text-base">
                    Reliable ongoing support
                  </span>
                </div>

                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <span className="text-gray-700 text-sm sm:text-base">
                    Long-term collaboration
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To create modern, responsive, and high-quality websites that help businesses, startups, and individuals build a strong digital presence while keeping solutions affordable, reliable, and result-focused.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become a trusted web development brand known for creativity, transparency, and client satisfaction by delivering impactful digital solutions with a personal approach.
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
                  <span>Quality & Professionalism</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  <span>Transparency & Honest Communication</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  <span>Client Satisfaction First</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  <span>Reliability & Long-Term Support</span>
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
            <div className="p-6 border rounded-lg hover:border-primary">
              <Users className="h-10 w-10 text-primary mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Personal Attention</h4>
              <p className="text-gray-500 text-sm">Every project is handled directly by me, ensuring clear communication, full focus, and consistent quality from start to finish.</p>
            </div>
            <div className="p-6 border rounded-lg hover:border-primary">
              <Lightbulb className="h-10 w-10 text-yellow-500 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Creative & Practical Solutions</h4>
              <p className="text-gray-500 text-sm">I combine modern design with smart development strategies to create websites that are both visually appealing and highly functional.</p>
            </div>
            <div className="p-6 border rounded-lg hover:border-primary">
              <Target className="h-10 w-10 text-red-500 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Result-Focused Approach</h4>
              <p className="text-gray-500 text-sm">My goal is not just to build websites, but to deliver solutions that support business growth, user engagement, and real outcomes.</p>
            </div>
            <div className="p-6 border rounded-lg hover:border-primary">
              <CheckCircle className="h-10 w-10 text-green-500 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Transparency & Trust</h4>
              <p className="text-gray-500 text-sm">No hidden costs, no confusion — just honest communication, clear timelines, and reliable support throughout the project.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
