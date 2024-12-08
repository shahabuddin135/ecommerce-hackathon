
import Banner from '@/components/shop-sections/Banner';
import FilterBar from '@/components/shop-sections/FilterBar';
import Pagination from '@/components/shop-sections/Pagination';
import ShopGrid from '@/components/shop-sections/shopGrid';
import React from 'react'
import SecondBanner from '@/components/shop-sections/SecondBanner';

const Shop = () => {
    return (
        <main>

        <Banner />
        <FilterBar />
        <ShopGrid/>
        <Pagination/>
        <SecondBanner/>
        </main>
    )
}

export default Shop;