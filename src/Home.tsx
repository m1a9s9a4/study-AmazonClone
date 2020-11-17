import React from 'react'
import './Home.css'
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img src="https://images-fe.ssl-images-amazon.com/images/G/09/kindle/journeys/MGVjYjdhYTct/MGVjYjdhYTct-OGVjNTJmZjgt-w3000._CB417511840_.jpg" alt="" className="home__image"/>

                <div className="home__row">
                    <Product />
                    <Product />
                </div>
                <div className="home__row">
                    {/* product */}
                    {/* product */}
                    {/* product */}
                </div>
                <div className="home__row">
                    {/* product */}
                </div>                                
            </div>
        </div>
    )
}

export default Home
