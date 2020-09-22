import React from 'react';
import {TOGGLE_INGREDIENT} from '../state/types';

const iconSize = 24;

const PizzaIngredientsSelector = ({ ingredients, dispatch }) => {

    const toggleIngredient = (event) => {
        dispatch({ type: TOGGLE_INGREDIENT, payload: event.target.value });
    };

    return (
        <>
            <div className="mb-4">
                <h6 className="text-info">2. Aggiungi ingredienti</h6>
            </div>
            {ingredients.map(ingredient => (
                <div className="my-3" key={ingredient.name}>
                    <input type="checkbox"
                        className="m-2 align-middle"
                        value={ingredient.name}
                        checked={ingredient.selected}
                        onChange={toggleIngredient} />
                    <span>
                        <img className="mr-2" src={ingredient.imageUrl} width={iconSize} alt={ingredient.name}/>
                        {ingredient.name.toLowerCase()}
                    </span>
                </div>
            ))}
        </>
    )
};


export default PizzaIngredientsSelector;
