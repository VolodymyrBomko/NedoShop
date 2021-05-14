import React from 'react'
import { ProductItem } from '../product-item'
import { useDispatch, useSelector } from 'react-redux'
import { toggleItemInCart, toggleItemInWishlist } from '../../redux'
import './ProductList.css'

export default function ProductList({ products }) {

    const dispatch = useDispatch();
    const wishlist = useSelector(({ wishlist: { wishlist } }) => wishlist)
    const cart = useSelector(({ cart: { cart } }) => cart)
    const onAddToCart = (product) => {
        dispatch(toggleItemInCart(product))
    };
    const onAddToWishList = (product) => {
        dispatch(toggleItemInWishlist(product))

    };


    return (
        <div className='list'>
            {products.map(product => (
                <ProductItem
                    isAddedToWishList={!!wishlist.find(({ id }) => id === product.id)}
                    isAddedToCart={!!cart.find(({ id }) => id === product.id)}
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                    onAddToWishList={onAddToWishList}>

                </ProductItem>
            ))}
        </div>
    )
}

