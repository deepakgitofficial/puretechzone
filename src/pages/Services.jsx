import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Smartphone, PenTool, Server, ShoppingCart, Settings, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      icon: <Monitor className="h-10 w-10 text-primary" />,
      desc: 'We build high-performance, secure, and scalable websites using the latest technologies like React, Node.js, and PHP. From simple landing pages to complex enterprise web apps.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'CMS Integration']
    },
    {
      title: 'Mobile App Development',
      icon: <Smartphone className="h-10 w-10 text-purple-600" />,
      desc: 'Native and cross-platform mobile apps that provide a seamless user experience on iOS and Android devices. We use React Native and Flutter for efficiency.',
      features: ['iOS & Android', 'Cross-Platform', 'UI/UX Focused', 'App Store Publishing']
    },
    {
      title: 'UI/UX Design',
      icon: <PenTool className="h-10 w-10 text-pink-600" />,
      desc: 'User-centric design that creates intuitive and engaging digital experiences. We focus on aesthetics, usability, and brand consistency.',
      features: ['Wireframing', 'Prototyping', 'User Research', 'Brand Identity']
    },
    {
      title: 'API & Backend',
      icon: <Server className="h-10 w-10 text-green-600" />,
      desc: 'Robust backend solutions and API integrations to power your applications. We ensure security, scalability, and smooth data flow.',
      features: ['REST & GraphQL', 'Database Design', 'Cloud Deployment', 'Security Audit']
    },
    {
      title: 'E-commerce Solutions',
      icon: <ShoppingCart className="h-10 w-10 text-orange-600" />,
      desc: 'Custom e-commerce platforms or Shopify/WooCommerce integrations to help you sell online effectively and securely.',
      features: ['Payment Gateways', 'Inventory Management', 'User Dashboards', 'Analytics']
    },
    {
      title: 'Maintenance & Optimization',
      icon: <Settings className="h-10 w-10 text-gray-600" />,
      desc: 'Keep your digital assets running smoothly with our maintenance and optimization services. We monitor, update, and improve performance.',
      features: ['Security Updates', 'Speed Optimization', 'Bug Fixes', 'Regular Backups']
    }
  ];

  return (
    <div className="bg-white">
      <div className="bg-primary py-16 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-primary-foreground/90 max-w-2xl mx-auto">
          Comprehensive technology solutions tailored to your business needs.
        </p>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all p-8 flex flex-col group">
              <div className="mb-6 bg-gray-50 rounded-lg w-fit p-4 group-hover:bg-primary/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{service.desc}</p>

              <ul className="mb-8 space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-500">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link to="/contact" className="inline-flex items-center justify-center px-4 py-2 border border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors">
                Request a Quote
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-gray-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Need a Custom Solution?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We understand that every business is unique. Contact us to discuss your specific requirements and get a tailored proposal.
          </p>
          <Link to="/contact" className="inline-flex items-center px-8 py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors">
            Talk to Our Experts <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
