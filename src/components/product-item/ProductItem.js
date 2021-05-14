import React from 'react'
import './ProductItem.css'

export const ProductItem = ({
    onAddToCart,
    onAddToWishList,
    product,
    isAddedToWishList,
    isAddedToCart,
    product: { id, price, title, description, image } }) => {

    return (
        <div className='wrapper'>
            <div >
                <h5>NUMBER:{id}</h5>
                <h5>PRICE:{price}</h5>
                <h5>TITLE:{title}</h5>
                <h5>DESCRIPTION:{description}</h5>
            </div>
            <div>
                <img className='logo' src={image} alt='logo' />
                <button style={{ background: isAddedToCart ? "red" : "green" }} onClick={() => onAddToCart(product)}>{isAddedToCart ? 'remove from cart' : 'add to cart'}</button>
                <button style={{ background: isAddedToWishList ? 'red' : 'green' }} onClick={() => onAddToWishList(product)}>{isAddedToWishList ? 'remove from wishlist' : 'add to wishlist'}</button>

            </div>

        </div>
    )
}
