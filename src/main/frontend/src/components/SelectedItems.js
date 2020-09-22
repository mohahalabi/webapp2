import React from 'react'
import pizza from '../images/pizza_margherita.jpg';


const SelectedItems = ({ state }) => {

    const { sizes, ingredients, delivery, price } = state
    let badgeStyle = 'badge m-1 px-3';

    return (
        <>
            <img className="img-fluid rounded-circle m-1" src={pizza} width={80} alt="pizza" />
            <div className="" style={{ height: 40 }}>
                {sizes.map(size =>
                    size.selected &&
                    <span
                        className={badgeStyle + ' badge-primary w-75 py-2'}
                        key={size.name}>{size.name.toLowerCase()}{'  '}
                        <span className="badge badge-light">{size.price}{' CHF'}</span>
                    </span>
                )}
            </div>
            {/* <div className="mx-3 my-2 border-bottom " /> */}
            <div className="" style={{ height: 200 }}>
                <span>Ingredienti aggiunti:</span>
                {ingredients.map(ingredient =>
                    ingredient.selected &&
                    <span
                        className={badgeStyle + ' badge-success badge-pill w-75 mx-4 py-1'}
                        key={ingredient.name}>{ingredient.name.toLowerCase()}{'  '}
                        <span className="badge badge-light">{' +'}{ingredient.price}{' CHF'}</span>
                    </span>
                )}
            </div>
            <div className="m-3 border-bottom" />
            <div className="" style={{ height: 20 }}>
                <p >Consegna a domicilio: {delivery ? ' Sì' : ' No'}</p>
            </div>
            <div className=" mt-4 text-center p-2">
                <h5 className="text-info">{`Prezzo: ${price}  CHF`}</h5>
            </div>
        </>
    );
}


export default SelectedItems;
