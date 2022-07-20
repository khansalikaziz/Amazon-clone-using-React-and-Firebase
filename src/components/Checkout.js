import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';

const Checkout = () => {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img className='chekout__ad' src='https://firebasestorage.googleapis.com/v0/b/by-salik.appspot.com/o/Asset%2Fad.jpg?alt=media&token=d39ce4be-bee9-47e3-9cb7-bc6f0791edd2' alt="" />
                <div>
                    {user && <h3>{`Hello, ${user?.email}`}</h3>}
                    <h2 className='checkout__title'>Your shopping Basket</h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                    {/* shopping basket */}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />

            </div>
        </div>
    )
}

export default Checkout