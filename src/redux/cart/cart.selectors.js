import { createSelector } from 'reselect';

//get state of cart
const selectCart = state => state.cart;

//declare variable to get number of items in cart
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

//function that counts and updates number of items in cart
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
            0
        )
);