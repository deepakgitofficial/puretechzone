import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Zap, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-primary/5 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div className="space-y-8 z-10">
            <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Crafting Exceptional <span className="text-primary">Web & Mobile Experiences</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              We specialize in high-performance web applications and native mobile solutions. From concept to deployment, we build digital products that scale and engage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="inline-flex justify-center items-center px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/contact" className="inline-flex justify-center items-center px-8 py-3 bg-white text-gray-700 font-semibold rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm hover:shadow-md">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Visual Element - Animated Code Window */}
          <div className="relative hidden lg:block perspective-1000">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            <div className="relative bg-gray-900 rounded-xl shadow-2xl border border-gray-800 p-2 transform rotate-y-6 hover:rotate-y-0 transition-transform duration-700">
              {/* Window Controls */}
              <div className="bg-gray-800 rounded-t-lg p-2 flex items-center gap-2 mb-2">
                <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                <div className="ml-4 text-xs text-gray-400 font-mono">App.jsx</div>
              </div>

              {/* Code Content */}
              <div className="p-4 font-mono text-sm space-y-1 bg-gray-900/50 rounded-b-lg overflow-hidden h-[300px]">
                <div className="text-gray-400"><span className="text-purple-400">import</span> React <span className="text-purple-400">from</span> <span className="text-green-400">'react'</span>;</div>
                <div className="text-gray-400"><span className="text-purple-400">import</span> {'{'} Mobile, Web {'}'} <span className="text-purple-400">from</span> <span className="text-green-400">'./Services'</span>;</div>
                <div className="h-4"></div>
                <div className="text-blue-400">const <span className="text-yellow-400">PureTechZone</span> = <span className="text-yellow-400">()</span> <span className="text-blue-400">=&gt;</span> {'{'}</div>
                <div className="pl-4 text-gray-300">
                  <span className="text-purple-400">return</span> (
                </div>
                <div className="pl-8 text-gray-300">
                  &lt;<span className="text-red-400">div</span> <span className="text-sky-300">className</span>=<span className="text-green-400">"future-tech"</span>&gt;
                </div>
                <div className="pl-12 text-gray-300">
                  &lt;<span className="text-yellow-400">Web</span> /&gt;
                </div>
                <div className="pl-12 text-gray-300">
                  &lt;<span className="text-yellow-400">Mobile</span> /&gt;
                </div>
                <div className="pl-12 flex items-center">
                  <span className="text-gray-500">&lt;!-- Building the Future --&gt;</span>
                  <span className="w-2 h-4 bg-primary ml-1 animate-pulse"></span>
                </div>
                <div className="pl-8 text-gray-300">
                  &lt;/<span className="text-red-400">div</span>&gt;
                </div>
                <div className="pl-4 text-gray-300">
                  );
                </div>
                <div className="text-blue-400">{'}'};</div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-3 rounded-lg shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce shadow-primary/20">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-semibold">Status</div>
                  <div className="text-sm font-bold text-gray-900">100% Secure</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
