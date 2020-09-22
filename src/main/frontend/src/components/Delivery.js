import React from 'react'
import {SELECT_DELIVERY} from '../state/types';

const Delivery = ({ delivery, dispatch }) => {

    const handleDelivery = (event) => {
        let value = event.target.value;
        dispatch({ type: SELECT_DELIVERY, payload: value });
    };

    return (
        <div className="m-1">
            <div className="p-2">
                <h6 className="text-info">3. Consegna</h6>
            </div>
            <label className="m-1" >
                <input
                    className="m-1"
                    type="radio"
                    value={'NO'}
                    checked={delivery === false}
                    onChange={handleDelivery} />
                Ritiro in pizzeria
                </label>
            <label className="m-1" >
                <input
                    className="m-1"
                    type="radio"
                    value={'YES'}
                    checked={delivery === true}
                    onChange={handleDelivery} />
                Consegna a domicilio
                </label>
        </div>
    );
};

export default Delivery;
