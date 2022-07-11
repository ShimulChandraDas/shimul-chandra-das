import React from 'react';

const DetailsModal = ({ projectDetails }) => {
    const { name, image, live, client, technology, about } = projectDetails;
    return (
        <div>
            <input type="checkbox" id="details-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="details-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg"> {name}</h3>

                    <div className='flex'>
                        <figure><img src={image} alt="Shoes" /></figure>

                        <div>
                            <p class="py-4">{about}</p>
                            <p class="py-4">{technology}</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default DetailsModal;