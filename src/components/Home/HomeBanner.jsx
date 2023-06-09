import React from 'react';
import headerBg1 from '../../assets/Header-Bg1-1300x700.jpg';
import headerBg2 from '../../assets/Header-Bg2-1300x700.jpg';
import headerBg3 from '../../assets/Header-Bg1-1300x700.jpg';
import headerBg4 from '../../assets/Header-Bg1-1300x700.jpg';
import { Link } from 'react-router-dom';

const HomeBanner = () => {
    return (
        <div>
            <div className="carousel w-full">
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
            </div>
        </div>
    );
};

export default HomeBanner;