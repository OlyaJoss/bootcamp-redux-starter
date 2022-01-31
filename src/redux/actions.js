
export function addToCart(id) {
    return {
        type: 'ADD_TO_CART',
        payload: {
            id: id,
        }
    }
}

export function delFromCart(id) {
    return {
        type: 'DEL_FROM_CART',
        payload: {
            id: id,
        }
    }
}