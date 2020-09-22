import React, { useEffect, useReducer } from 'react';
import PizzaSizeSelector from './PizzaSizeSelector';
import PizzaIngredientsSelector from './PizzaIngredientsSelector';
import SelectedItems from './SelectedItems';
import Loader from './Loader';
import * as Types from "../state/types";
import reducer from '../state/reducer';
import { fetchPizzaInfo } from '../api/fetchRequests';
import Delivery from './Delivery';


const initialState = {
    pending: true,
    success: false,
    error: '',
    ingredients: [],
    sizes: [],
    delivery: false,
    price: 0
};


function PizzaConigurator() {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        setTimeout(() => {
            fetchPizzaInfo(dispatch);
        }, 1000);
    }, []);

    useEffect(() => {
        if (state.success) { // Prevent the first run
            dispatch({ type: Types.UPDATE_PRICE });
        }
    }, [state.ingredients, state.sizes, state.success]);

    if (state.pending) {
        return (
            <div className='container'>
                <div className="row justify-content-center align-items-center">
                    <Loader height={50} />
                </div>
            </div>
        )
    }

    return (
        <div className='container'>
            {state.success ?
                <div className="row justify-content-center align-items-stretch">
                    <div className="col-lg-5 bg-white shadow-sm m-2 py-4">
                        <div className="">
                            <PizzaSizeSelector
                                sizes={state.sizes}
                                dispatch={dispatch}
                            />
                            <div className="mx-2 my-3 border-bottom" />
                            <PizzaIngredientsSelector
                                ingredients={state.ingredients}
                                dispatch={dispatch}
                            />
                            <div className="mx-2 my-3 border-bottom" />
                            <Delivery
                                delivery={state.delivery}
                                dispatch={dispatch}
                            />
                        </div>
                    </div>
                    <div className="col-lg-3 bg-white shadow-sm m-2 text-center p-2">
                        <SelectedItems state={state} />
                    </div>
                </div>
                :
                <div className="row justify-content-center">
                    <div class="alert alert-danger p-1" role="alert">{state.error}</div>
                </div>}
        </div>

    );
}


export default PizzaConigurator;
