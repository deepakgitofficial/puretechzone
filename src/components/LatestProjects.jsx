import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/LocalData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const LatestProjects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const responsiveTab = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,

    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 5,

    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 3,

    },
  };
  const responsiveProject = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      // partialVisibilityGutter: 20,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      // partialVisibilityGutter: 16,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      // partialVisibilityGutter: 12,
    },
  };

  const categories = [
    "All",
    "E-commerce",
    "Corporate",
    "Technology",
  ];

  // Case-insensitive filter
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
        (project) =>
          project.category?.toLowerCase() === activeFilter.toLowerCase()
      );

  return (
    <section className="w-full mx-auto px-4 py-12 bg-gray-200">
      <h2 className="text-3xl text-center font-bold text-gray-900 mb-8">
        Latest Projects
      </h2>

      {/* Category Carousel */}
      <Carousel
        responsive={responsiveTab}
        infinite
        keyBoardControl
        swipeable
        draggable
        arrows={false}
        // partialVisible
        containerClass="pb-6 "
        itemClass="px-2"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-3 w-full rounded-full font-semibold whitespace-nowrap transition-all duration-300 transform hover:scale-105 ${activeFilter === category
              ? "bg-gradient-to-r from-[#12b2a6] to-[#0e8f86] text-white shadow-lg"
              : "bg-white text-gray-700 hover:bg-gray-100 shadow-md"
              }`}
          >
            {category}
          </button>
        ))}
      </Carousel>

      {/* Projects Grid */}
      <motion.div
        layout
        className=""
      >
        <Carousel
          responsive={responsiveProject}
          infinite
          autoPlay={false}
          // autoPlaySpeed={0}
          // customTransition="transform 2s linear"
          // transitionDuration={2000}
          showDots={false}
          draggable={true}
          swipeable={false}
          pauseOnHover={false}
          keyBoardControl={false}
          arrows={true}
          // partialVisible
          containerClass="py-6 "
          itemClass="px-2"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}

            >
              <div className=" relative shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2
              bg-white rounded-xl border  border-b-4 border-[#0e8f86]
              ">
                <Link to={`/projects/${project.id}`}>
                  {/* Image */}
                  <div className="relative md:h-96 h-80 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full  object-cover transition-transform duration-700 group-hover:scale-110 rounded-t-xl "
                    />
                    {/* Gradient Overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t  ${project.color} opacity-0  hover:opacity-100 transition-opacity duration-500`}
                    ></div>

                    {/* View Project Button */}
                    <div className="absolute   inset-0 flex items-center justify-center  group-hover:opacity-100 transition duration-500   ">



                    </div>

                    {/* Category Badge */}
                    {/* <div className="absolute top-4 right-4">
                    <span className="bg-white/80 backdrop-blur-sm text-gray-900 px-4 py-1 rounded-full text-sm font-semibold shadow">
                      {project.category}
                    </span>
                  </div> */}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#12b2a6] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags?.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-[#12b2a6] hover:text-white transition"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-end mt-3">

                      {/* <button className="  animate-pulse text-[#12b2a6]  transition text-sm ">
                        View Project
                      </button> */}
                    </div>
                  </div>

                  {/* Border Animation */}

                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#12b2a6] transition pointer-events-none"></div>
                </Link>
              </div>
            </motion.div>
          ))}
        </Carousel>
      </motion.div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold mb-2">No Projects Found</h3>
          <p className="text-gray-600">
            Try selecting a different category
          </p>
        </motion.div>
      )}
    </section>
  );
};

export default LatestProjects;
