import React, { useEffect, useState } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"


const Gallery = () => {


    const [toysImage, setToysImage] = useState([]);

    useEffect(() => {
        fetch('https://toy-town-server-nurulhaque-pro.vercel.app/toys/')
            .then(res => res.json())
            .then(data => {
                const toyImages = data.map(toy => toy.toyPhotoURL);
                setToysImage(toyImages.slice(0, 8));
            })
            .catch(error => {
                console.log('Error fetching toy images:', error);
            });
    }, []);

    const images = toysImage;


    return (
        <div className='bg-green-50'>
            <div className='container mx-auto px-5 py-10 md:p-14'>
                <div className="text-center mb-10">
                    <h1 className="text-4xl text-primary underline">Toy Gallery</h1>
                </div>
                <div>
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 4 }}
                    >
                        <Masonry gutter='10px' >
                            {images.map((image, i) => (
                                <img
                                    className='border rounded'
                                    key={i}
                                    src={image}
                                    style={{ width: "100%", display: "block" }}
                                    alt=""
                                />
                            ))}
                        </Masonry>
                    </ResponsiveMasonry>
                </div>
            </div>
        </div>
    );
};

export default Gallery;