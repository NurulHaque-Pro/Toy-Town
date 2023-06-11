import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ToyInfo = () => {

    const toyInfo = useLoaderData();
    console.log(toyInfo);

    return (
        <div className='container mx-auto'>
            <div className='grid md:grid-cols-2 items-center gap-8'>
                {/* Toy Image */}

                <div>
                    <img className='w-3/4' src={toyInfo?.toyPhotoURL} alt="" />
                </div>

                {/* Toy Info */}
                <div className=''>
                    <h3 className='text-xl mb-2'>{toyInfo?.toyTitle}</h3>
                    <p className='font-semibold mb-2'>Category: <span className='text-primary'>{toyInfo?.category}</span></p>
                    <p className='font-semibold mb-2'>Price: <span className='font-normal'>${toyInfo?.price}</span></p>
                    <p className='font-semibold mb-2'>Quantity: <span className='font-normal'>{toyInfo?.quantity} pieces</span></p>
                    <p className='font-semibold mb-2'>Rating: <span className='font-normal'>{toyInfo?.rating}</span></p>
                    <p className='font-semibold mb-2'>Seller: <span className='font-normal'>{toyInfo?.name}</span></p>
                    <p className='font-semibold mb-2'>Seller Email: <span className='font-normal'>{toyInfo?.email}</span></p>
                    <div className='mt-5'>
                        <Link className='btn btn-primary px-6'>Buy Now</Link>
                    </div>

                </div>
            </div>
            <div className='p-7 border-t'>
                <p className='font-semibold'>Description: <span className='font-normal'>{toyInfo?.description}</span></p>
            </div>
        </div>
    );
};

export default ToyInfo;