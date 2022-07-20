import React from 'react'
import './Product.css'
import { useStateValue } from "./StateProvider";


const Product = ({ id, title, image, price, rating }) => {
    const [{ basket }, dispatch] = useStateValue();



    const addToBasket = () => {
        //dispatch the item into data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }

    return (
        <div className='product'>
            <div className="product__info">
                <p className='text__size'>{title}</p>
                <p className="product__price">
                    <small style={{ color: 'brown' }}>₹ </small>
                    <strong style={{ color: 'brown' }}>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        // <p>⭐</p>
                        <img className='img' src='https://firebasestorage.googleapis.com/v0/b/by-salik.appspot.com/o/Asset%2Fstar.png?alt=media&token=62073c1b-2e6e-49ff-880c-db3bd2c2065f' alt="" />
                    ))}

                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product