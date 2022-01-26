export default function addToCard(id) {
    return {
        type: 'ADD_TO_CART',
        payload: {
          id: id,
        }
    }
}