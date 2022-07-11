import React from 'react';

const Project = ({ project, setProjectDetails }) => {
    const { name, image, live, client, technology, about } = project;

    // const detailsHandel = () => {
    //     console.log('clicked details');
    // }
    return (
        <div className="card w-96 gap-10 bg-base-100 shadow-2xl rounded-3xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-center font-bold">{name}</h2>

                <div className="card-actions  justify-center w-full ">
                    <label
                        onClick={() => setProjectDetails(project)}
                        htmlFor="details-modal"
                        className="btn btn-primary rounded-full w-full">
                        Details
                    </label>

                </div>
            </div>
        </div>
    );
};

export default Project;