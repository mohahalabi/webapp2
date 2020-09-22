import axios from 'axios';
import * as Types from "../state/types";


export const fetchPizzaInfo = async (dispatch) => {
    dispatch({ type: Types.FETCH_REQUEST });
    try {
        let response = await axios.get('api/pizzaSizes');
        let sizes = await response.data;
        sizes.forEach((size, index) => index === 1 ? size.selected = true : size.selected = false);

        response = await axios.get('api/pizzaIngredients');
        let ingredients = await response.data;
        ingredients.forEach(ingredient => ingredient.selected = false);

        dispatch({ type: Types.FETCH_SUCCESS, payload: { ingredients, sizes } });

    } catch (error) {
        dispatch({
            type: Types.FETCH_FAILURE,
            payload: 'Qualcosa è andato storto: ' + error.message
        });
    }
};
