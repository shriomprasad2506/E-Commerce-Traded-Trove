export const addDecimals = (num) => {
    return Math.round((num*100)/100).toFixed(2)
}

export const updateCart = (state) => {
     // Calculate Items Price
     state.itemsPrice = addDecimals(state.cartItems.reduce((acc,item) => acc + item.price * item.qty, 0))

     // Calculate Shipping Price (if order )
     state.shippingPrice = addDecimals(state.itemsPrice> 100? 0 : 10)

     // Calculate tax Price
     state.taxPrice = addDecimals(Number((0.15* state.itemsPrice).toFixed(2)))

     // Calculate Total Price
     state.totalPrice = (Number(state.itemsPrice) + Number(state.shippingPrice) + Number(state.taxPrice)).toFixed(2)

     localStorage.setItem('cart',JSON.stringify(state))
}