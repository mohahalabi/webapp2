import React, { } from 'react';
import { SELECT_SIZE } from '../state/types';


const PizzaSizeSelector = ({ sizes, dispatch }) => {

    const handleSize = (event) => {
        let value = event.target.value;
        dispatch({ type: SELECT_SIZE, payload: value });
    }

    return (
        <div className="">
            <div className="mb-4">
                <h6 className="text-info">1. Seleziona la dimensione</h6>
            </div>

            {sizes.length > 0 && sizes.map(size => (
                <label className="m-1" key={size.name}>
                    <input
                        className="m-1"
                        type="radio"
                        value={size.name}
                        checked={size.selected}
                        onChange={handleSize}
                    />
                    {size.name.toLowerCase()}
                </label>
            ))}
        </div>
    );
}

export default PizzaSizeSelector;
