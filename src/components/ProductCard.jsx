import React from "react";

export default function ProductCard (props) {
    const {products: {name, price, _id}, onDelete} = props;
    
    return (
        <div>
            <p>{name}</p>
            <p>{price}</p>
            <button onClick={() => onDelete(_id)}>🦄</button>
        </div>
    )

}