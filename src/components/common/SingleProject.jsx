import React from 'react'
import { projects } from '../../data/LocalData'
import { useParams } from 'react-router-dom';


const SingleProject = () => {
  const { id } = useParams();

  const project = projects.find((project) => project.id === parseInt(id));
  console.log(project);

  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-8'>
      <div className='flex  '>
        <div className='w-3/5 mr-4 border border-primary rounded-md p-1'>
          <img src={project.image} alt={project.title} className='w-full h-full object-cover' />

        </div>
        <div className='w-2/5 mt-24 '>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>{project.title}</h2>
          <p className='text-gray-600 mb-6'>{project.description}</p>
          {/* <a href={project?.liveLink} target="_blank" rel="noopener noreferrer" className='text-primary font-medium hover:underline'>Live Demo</a> */}
        </div>


      </div>

    </div>
  )
}

export default SingleProject

