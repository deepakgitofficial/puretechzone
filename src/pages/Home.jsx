import React, { lazy, Suspense, useEffect } from 'react'
import Loader from '../components/Loader'
import { Monitor, Smartphone, PenTool, Server, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  SiWordpress, SiPhp, SiJavascript, SiReact, SiNodedotjs,
  SiTypescript, SiTailwindcss, SiNextdotjs, SiMongodb,
  SiMysql, SiFlutter, SiGraphql, SiShopify, SiWoocommerce
} from "react-icons/si";

const Hero = lazy(() => import('../components/Hero'))
const LatestProjects = lazy(() => import('../components/LatestProjects'))


const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);


  const services = [
    { title: 'Website Development', icon: <Monitor className="h-8 w-8 text-primary" />, desc: 'Custom websites built with modern technologies like React, Node.js, and more.' },
    // { title: 'App Development', icon: <Smartphone className="h-8 w-8 text-purple-600" />, desc: 'Native and cross-platform mobile applications for iOS and Android.' },
    { title: 'Graphics Design', icon: <PenTool className="h-8 w-8 text-pink-600" />, desc: 'Custom graphics and UI/UX design for your digital products.' },
    { title: 'Websites  Maintenance', icon: <Server className="h-8 w-8 text-green-600" />, desc: 'Custom websites maintence with a focus on performance and security.' },
  ];


  const technologies = [
    { name: "WordPress", icon: SiWordpress },
    { name: "PHP", icon: SiPhp },
    { name: "JavaScript", icon: SiJavascript },
    { name: "React", icon: SiReact },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "MongoDB", icon: SiMongodb },
    { name: "MySQL", icon: SiMysql },
    { name: "React Native", icon: SiReact },
    { name: "Flutter", icon: SiFlutter },
    { name: "GraphQL", icon: SiGraphql },
    { name: "Shopify", icon: SiShopify },
    { name: "WooCommerce", icon: SiWoocommerce },
  ];


  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
    tablet: { breakpoint: { max: 1024, min: 640 }, items: 3 },
    mobile: { breakpoint: { max: 640, min: 0 }, items: 2 }
  };

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Hero />

        <LatestProjects />
        {/* Services Preview */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">We provide a comprehensive range of digital services to help your business grow and thrive in the modern age.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="p-6 bg-white rounded-xl shadow-lg border border-b-4 border-[#0e8f86]  hover:shadow-xl transition-shadow group cursor-pointer">
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg w-fit group-hover:bg-primary/10 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{service.desc}</p>
                  <Link to="/services" className="text-primary font-medium text-sm inline-flex items-center hover:text-primary-dark">
                    Learn More <ArrowRight className="h-3 w-3 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Pure Tech Zone?</h2>
                <p className="text-gray-600 mb-8">
                  At <strong>Pure Tech Zone</strong>, you don’t just get a developer — you get a dedicated partner focused on your digital success. Every project is personally handled by Deepak Kashyap to ensure quality, transparency, and reliable results.
                </p>
                <div className="space-y-4">
                  {[
                    'Client-Focused Approach',
                    'Agile Methodology',
                    'Experienced Team',
                    'Future-Proof Technology',
                    '24/7 Support & Maintenance'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link to="/about" className="inline-block px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
                    More About Us
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 transform skew-y-6 rounded-3xl shadow-xl"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-100 p-4 rounded-xl text-center">
                      <h4 className="text-3xl font-bold text-primary mb-1">50+</h4>
                      <p className="text-sm text-gray-500">Projects Completed</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-xl text-center">
                      <h4 className="text-3xl font-bold text-purple-600 mb-1">98%</h4>
                      <p className="text-sm text-gray-500">Client Satisfaction</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-xl text-center">
                      <h4 className="text-3xl font-bold text-pink-600 mb-1">5+</h4>
                      <p className="text-sm text-gray-500">Years Experience</p>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-xl text-center">
                      <h4 className="text-3xl font-bold text-green-600 mb-1">24/7</h4>
                      <p className="text-sm text-gray-500">Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">

            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Technologies We Use
            </h2>

            <Carousel
              responsive={responsive}
              infinite
              autoPlay
              autoPlaySpeed={3000}
              customTransition="transform 8s linear"
              transitionDuration={8000}
              arrows={false}
              showDots={false}
              draggable={false}
              swipeable={false}
              pauseOnHover={false}
              keyBoardControl={false}
              containerClass="pb-6"
              itemClass="px-3"
            >
              {technologies.map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  className="flex items-center justify-center gap-2
              px-6 py-3 bg-gray-50 rounded-full border border-gray-200
              shadow-sm hover:border-primary/50 hover:text-primary
              transition-all"
                >
                  <Icon size={18} />
                  <span className="font-medium">{name}</span>
                </div>
              ))}
            </Carousel>

          </div>
        </section>

        {/* CTA Section */}
        {/* <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Build Your Digital Future?</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and how we can help you achieve your business goals with our expert solutions.
            </p>
            <Link to="/contact" className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-colors">
              Start A Project
            </Link>
          </div>
        </section> */}
      </Suspense>
    </>
  );
};

export default Home;
