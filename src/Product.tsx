import React from 'react'
import "./Product.css";

function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>The Lean startup</p>
                <p className="product__price">
                    <strong>1,500</strong>
                    <small>円</small>
                </p>
                <div className="product__raiting">
                    <p>⭐️</p>
                    <p>⭐️</p>
                    <p>⭐️</p>
                    <p>⭐️</p>
                </div>
            </div>

            <img src="https://m.media-amazon.com/images/I/41vP838nOUL._AC_SL520_.jpg" alt=""/>

            <button>Add to Basket</button>
        </div>
    )
}

export default Product
