import React from 'react';
import HomeBanner from './HomeBanner';
import CategoryBox from './CategoryBox';
import ShopByCategory from './ShopByCategory';
import Gallery from './Gallery';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <CategoryBox></CategoryBox>
            <ShopByCategory></ShopByCategory>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;