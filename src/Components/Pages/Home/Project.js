import React from 'react';

const Project = ({ project }) => {

    const { name, image, live, client, technology, about } = project;
    return (
        <div class="card w-96 gap-10 bg-base-100 shadow-2xl rounded-3xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="text-center font-bold">{name}</h2>

                <div class="card-actions  justify-center w-full ">
                    <div class="btn btn-primary rounded-full w-full">Details</div>

                </div>
            </div>
        </div>
    );
};

export default Project;