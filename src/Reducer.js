// initial state of useReducer
export const initialState = {
    basket: [], 
    user: null,
}

// function to get total of basket
export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => amount + item.price, 0)

// reducer function
const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            }

        case 'EMPTY_BASKET':
            return{
                ...state,
                basket: []
            }

        case 'REMOVE_FORM_BASKET':
            const index=state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            )
            let newBasket = [...state.basket]
            if(index >= 0){
                newBasket.splice(index, 1)
            }else{
                console.warn(`Can't remove product (id: ${action.id}) as it's not in the basket!`)
            }
            return {
                ...state,
                basket: newBasket
            }

        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        default:
            return state
    }
}
export default reducer