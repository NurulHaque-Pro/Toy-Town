import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyInfo = () => {

    const toyInfo = useLoaderData();
    console.log(toyInfo);

    return (
        <div className='container mx-auto'>
            <div className='grid md:grid-cols-2 gap-8'>
                {/* Toy Image */}
                <div><img src={toyInfo.toyPhotoURL} alt="" /></div>
                {/* Toy Info */}
                <div></div>
            </div>
        </div>
    );
};

export default ToyInfo;