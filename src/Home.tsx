import React from 'react'
import './Home.css'
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img src="https://images-fe.ssl-images-amazon.com/images/G/09/kindle/journeys/MGVjYjdhYTct/MGVjYjdhYTct-OGVjNTJmZjgt-w3000._CB417511840_.jpg" alt="" className="home__image"/>

                <div className="home__row">
                    <Product 
                        title="test1"
                        price={1500}
                        rate={5}
                        image="https://m.media-amazon.com/images/I/41vP838nOUL._AC_SL520_.jpg" 
                    />
                    <Product 
                        title="test2"
                        price={1000}
                        rate={2}
                        image="https://m.media-amazon.com/images/I/41vP838nOUL._AC_SL520_.jpg" 
                    />                    
                </div>
                <div className="home__row">
                    <Product 
                        title="test3"
                        price={2500}
                        rate={4}
                        image="https://m.media-amazon.com/images/I/41vP838nOUL._AC_SL520_.jpg" 
                    />
                    <Product 
                        title="tes3"
                        price={2500}
                        rate={4}
                        image="https://m.media-amazon.com/images/I/41vP838nOUL._AC_SL520_.jpg" 
                    />
                </div>
                <div className="home__row">
                    {/* product */}
                </div>                                
            </div>
        </div>
    )
}

export default Home
