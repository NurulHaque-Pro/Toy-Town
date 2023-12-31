import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CategoryBox = () => {

    useEffect(() => {
        AOS.init();
      }, []);
      

    return (
        <div className='container mx-auto py-10 md:py-12 px-5 md:px-0'>
            <div data-aos="fade-up " data-aos-duration="1000" className='grid md:grid-cols-4 gap-5 '>
                <div className="card bg-base-100 shadow-xl image-full">
                    <figure><img className='' src="https://i.ibb.co/2nZN7HZ/s-l500.jpg" alt="Die-Cast-Cars" /></figure>
                    <div className="card-body grid items-center">
                        <h2 className="card-title font-extralight text-white">Die-Cast Cars</h2>
                        <p>Miniature metal cars with intricate details and movable parts, loved by collectors and enthusiasts.</p>
                        <div className="card-actions">
                            <Link to='/alltoys' className="btn btn-primary hover:bg-transparent hover:text-primary">View Toys</Link>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl image-full">
                    <figure><img className='' src="https://i.ibb.co/DWV6cTD/633aa67e629c4d1e634bc555-growsland-remote-control-car-rc-cars.jpg" alt="Remote-Controlled (RC) Cars" /></figure>
                    <div className="card-body grid items-center">
                        <h2 className="card-title text-white font-extralight">Remote-Controlled (RC) Cars</h2>
                        <p>Battery-powered cars controlled remotely, offering thrilling racing and maneuvering experiences.</p>
                        <div className="card-actions">
                            <Link to='/alltoys' className="btn btn-primary hover:bg-transparent hover:text-primary">View Toys</Link>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl image-full">
                    <figure><img className='' src="https://i.ibb.co/sQHT5zS/71071-Oym-IIL.jpg" alt="Track Sets" /></figure>
                    <div className="card-body grid items-center">
                        <h2 className="card-title text-white font-extralight">Track Sets</h2>
                        <p>Playsets with track layouts for toy cars to race on, featuring loops, curves, ramps, and more, providing exciting racing experiences.</p>
                        <div className="card-actions">
                            <Link to='/alltoys' className="btn btn-primary hover:bg-transparent hover:text-primary">View Toys</Link>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl image-full">
                    <figure><img className='' src="https://i.ibb.co/tB9Dq3p/6392e0d145095b638c3e23c3-take-apart-truck-toys-for-boys-and.png" alt="Construction Vehicle Toys" /></figure>
                    <div className="card-body grid items-center">
                        <h2 className="card-title text-white font-extralight">Construction Vehicle Toys</h2>
                        <p>Toy cars resembling real construction vehicles, allowing children to engage in imaginative play and simulate construction activities.</p>
                        <div className="card-actions">
                            <Link to='/alltoys' className="btn btn-primary hover:bg-transparent hover:text-primary">View Toys</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CategoryBox;