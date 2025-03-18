import React from 'react'
import Hero from '../Conponents/Hero/Hero';
import Popular from '../Conponents/Popular/popular';
import Offers from '../Conponents/Offers/Offers';
import NewCollections from '../Conponents/NewCollections/NewCollections';
import NewsLetters from '../Conponents/NewsLetters/NewsLetters';

export const Shop = () => {
    return (
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollections/>
            <NewsLetters/>
        </div>
    )
}

export default Shop;