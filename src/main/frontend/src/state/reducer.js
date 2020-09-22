import * as Types from "./types";


export default function reducer(state, action) {
    switch (action.type) {
        case Types.FETCH_REQUEST:
            return {
                ...state,
                pending: true
            };
        case Types.FETCH_SUCCESS:
            return {
                ...state,
                pending: false,
                success: true,
                ingredients: action.payload.ingredients,
                sizes: action.payload.sizes
            };
        case Types.FETCH_FAILURE:
            return {
                ...state,
                pending: false,
                success: false,
                error: action.payload
            };
        case Types.SELECT_SIZE:
            return {
                ...state,
                sizes: state.sizes.map((size =>
                    size.name === action.payload
                        ?
                        { ...size, selected: true }
                        :
                        { ...size, selected: false }
                )),
            };
        case Types.SELECT_DELIVERY:
            return {
                ...state,
                delivery: action.payload === 'NO' ? false : true
            };
        case Types.TOGGLE_INGREDIENT:
            return {
                ...state,
                ingredients: state.ingredients.map((ingredient =>
                    ingredient.name === action.payload
                        ?
                        { ...ingredient, selected: !ingredient.selected }
                        : ingredient
                )),
            };
        case Types.UPDATE_PRICE:
            let price = 0;
            state.ingredients.forEach((ingredient => ingredient.selected && (price += ingredient.price)));
            state.sizes.forEach((size => size.selected && (price += size.price)));
            return {
                ...state,
                price
            };
        default:
            return state;
    }
}