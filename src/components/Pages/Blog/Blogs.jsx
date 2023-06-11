import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Blogs = () => {

    const blogs = useLoaderData();
    console.log(blogs);

    return (
        <div className='container mx-auto py-12'>
            <div className="text-center mb-10">
                <h1 className="text-4xl underline text-primary">Blogs</h1>
            </div>
            <div className=''>
                {
                    blogs.map(blog => (
                        <div>
                            <div className="card mb-12 grid gap-2 md:grid-cols-3 bg-base-100 shadow-xl">
                                <figure className='col-span-1'><img className='w-full h-full' src={blog.image} alt={blog.question} /></figure>
                                <div className="card-body col-span-2">
                                    <h2 className="card-title font-light"><span className='text-primary'>Q:</span> {blog.question}</h2>
                                    <p><span className='font-bold'>Answer:</span> {blog.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Blogs;