import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';


const CheckoutProduct = ({ id, image, title, price, rating, hideButton }) => {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        //remove item from basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt="" />
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) => (
                        <img className='img' src='https://firebasestorage.googleapis.com/v0/b/by-salik.appspot.com/o/Asset%2Fstar.png?alt=media&token=62073c1b-2e6e-49ff-880c-db3bd2c2065f' alt="" />
                    ))}

                </div>
                {!hideButton && <button onClick={removeFromBasket}>Remove from Basket</button>}

            </div>
        </div>
    )
}

export default CheckoutProduct