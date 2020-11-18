import React from 'react'
import "./Product.css";

interface Props {
    title: string;
    price: number;
    rate: number;
    image: string;
}

function Product(props: Props) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{props.title}</p>
                <p className="product__price">
                    <strong>{props.price}</strong>
                    <small>円</small>
                </p>
                <div className="product__raiting">
                    {Array(props.rate).fill('⭐️').map((v, i) => {
                        return <p>{v}</p>
                    })}
                </div>
            </div>

            <img src={props.image} alt={props.title} />

            <button>Add to Basket</button>
        </div>
    )
}

export default Product
