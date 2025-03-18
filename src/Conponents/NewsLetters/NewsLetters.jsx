import React from 'react'
import '../NewsLetters/NewLetters.css'

const NewsLetters = () => {
    return (
        <div className='newsletter'>
            <h1>Get exclusiv Offers from your Email</h1>
            <p>Subscribe to Our newsletter and stay Updated</p>
            <div>
                <input type="email" placeholder='Enter your email Id' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetters;