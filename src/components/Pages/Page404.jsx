import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import page404Img from '../../assets/error-404.json';

const Page404 = () => {
    return (
        <div>
            <main class="h-[450px] pt-10 w-full flex flex-col items-center">
                <Lottie className='w-[300px] md:w-[400px] mx-auto' animationData={page404Img} loop={true} />
                <p className="text-xl text-center font-semibold md:text-3xl">Oops! It looks like the page you're trying to access isn't available.</p>
                <button class="mt-10">

                    <Link className="font-medium btn btn-outline btn-primary" to="/">Go Home</Link>
                </button>

            </main>
        </div>
    );
};

export default Page404;