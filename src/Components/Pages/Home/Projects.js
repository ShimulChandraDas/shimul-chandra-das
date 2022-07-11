import React, { useEffect, useState } from 'react';
import DetailsModal from './DetailsModal';
import Project from './Project';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [projectDetails, setProjectDetails] = useState(null)

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, [])

    return (
        <div className='py-10 my-10 container mx-auto'>
            <h4 className='font-bold text-3xl uppercase text-center'>My latest Project</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-5 gap-8 px-3 md:px-0  '>
                {
                    projects.map(project => <Project
                        key={project._id}
                        project={project}
                        setProjectDetails={setProjectDetails}
                    ></Project>)
                }
            </div>
            {projectDetails && <DetailsModal projectDetails={projectDetails}></DetailsModal>}
            <div className='card-actions  justify-end'>
                <button className='btn btn-primary btn-link font-bold text-2xl'>See More ------></button>
            </div>
        </div>
    );
};

export default Projects;