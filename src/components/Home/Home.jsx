import React from 'react';
import HomeBanner from './HomeBanner';
import CategoryBox from './CategoryBox';
import ShopByCategory from './ShopByCategory';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <CategoryBox></CategoryBox>
            <ShopByCategory></ShopByCategory>
        </div>
    );
};

export default Home;