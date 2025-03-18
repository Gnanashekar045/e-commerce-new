import React from 'react'
import Hero from '../Conponents/Hero/Hero';
import Popular from '../Conponents/Popular/popular';
import Offers from '../Conponents/Offers/Offers';
import NewCollections from '../Conponents/NewCollections/NewCollections';

export const Shop = () => {
    return (
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollections/>
        </div>
    )
}

export default Shop;