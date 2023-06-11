import React, { useEffect } from 'react';
import headerBg1 from '../../assets/Header-Bg1-1300x700.jpg';
import headerBg2 from '../../assets/Header-Bg2-1300x700.jpg';
import headerBg3 from '../../assets/Header-Bg1-1300x700.jpg';
import headerBg4 from '../../assets/Header-Bg1-1300x700.jpg';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeBanner = () => {

    useEffect(() => {
        AOS.init();
      }, []);
      

    return (
        <div>
            {/* <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full h-[520px]">
                    <img src={headerBg1} className="w-full" />
                    <div className="absolute bg-gradient-to-r from-[#00000075] flex justify-between transform ">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <div>
                                <h2 className='text-6xl font-bold text-white'>Discover Endless Fun</h2>
                                <p className='text-white'>Where imagination comes to life - explore a world of exciting toys and endless play possibilities.</p>
                                <Link to='/login' className=" font-medium text-[white] px-8 py-3 bg-primary border border-primary hover:bg-[#ff6a3d00] hover:text-primary rounded">View All Toys</Link>
                            </div>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>

                </div>
                <div id="slide2" className="carousel-item relative w-full h-[520px]">
                    <img src={headerBg2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-[520px]">
                    <img src={headerBg3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div> */}

            <div>
                <div className="hero h-[500px]" style={{ backgroundImage: `url(${headerBg2})` }}>
                    <div className="hero-overlay bg-black bg-opacity-70"></div>
                    <div  data-aos="fade-up" data-aos-duration="1000" className="hero-content text-white">
                        <div className="px-3 max-w-2xl text-center">
                            <h1 className="mb-5 md:text-xl text-primary">Discover Endless Fun...</h1>
                            <h1 className="mb-5 text-white text-4xl md:text-5xl "> Where Imagination Comes to Life!</h1>
                            <p className="mb-8">Explore a world of joy and excitement at Toy Town! From classic favorites to the latest trends, our vast collection of toys guarantees endless fun for all ages.</p>
                            <Link to='/alltoys' className="px-10 font-medium btn btn-primary hover:bg-transparent hover:text-primary">
                                All Toys
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HomeBanner;