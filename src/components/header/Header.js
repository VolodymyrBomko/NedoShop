import React, { useMemo } from 'react'
import { useSelector } from 'react-redux';

export default function Header() {
    const { cart, wishlist } = useSelector(({ cart: { cart }, wishlist: { wishlist } }) => ({
        wishlist,
        cart
    }));

    const cartPriceArr = cart.map((el) => el.price);
    const totalCartPrice = useMemo(() =>
        cartPriceArr.reduce((acc, el) => el += acc, 0),
        [cartPriceArr]
    )

    const wishlistPriceArr = wishlist.map((el) => el.price);
    const totalWishlistPrice = useMemo(() =>
        wishlistPriceArr.reduce((acc, el) => el += acc, 0),
        [wishlistPriceArr]
    )

    return (
        <header className='d-flex justify-between align-center'>
            <h2>Hello in nedoshop</h2>
            <div className='d-flex justify-between'>
                <div title={totalCartPrice} className='mx-10'>cart:{cart.length}</div>
                <div title={totalWishlistPrice} className='mx-10'>wishlist:{wishlist.length}</div>
            </div>
        </header>
    )
}
