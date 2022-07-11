import React from 'react';

const DetailsModal = ({ projectDetails }) => {
    const { name, image, live, client, technology, about } = projectDetails;
    return (
        <div>
            <input type="checkbox" id="details-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="details-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg"> {name}</h3>

                    <div className='flex flex-b'>
                        <figure><img src={image} alt="Shoes" /></figure>
                        <div>
                            <p className="py-4">{about}</p>
                            <p className="py-4">{technology}</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default DetailsModal;