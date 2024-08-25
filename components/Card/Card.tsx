import React from 'react';
import "./Card.css"

interface Product {
  idNo: number;
  title: string;
  price: number;
  image: string;
}


const Card = ({idNo, title,price, image  }:Product) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-price">${price.toFixed(2)}</p>
        
      </div>
    </div>
  );
};

export default Card;
