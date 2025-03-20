import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContect';  // Corrected import
import { useParams } from 'react-router-dom';
import BreadCrums from '../Conponents/BreadCrums/BreadCrums';

const Product = () => {
  const { all_products } = useContext(ShopContext);  // Correct context usage
  const { id } = useParams();
  const product = all_products.find((e) => e.id === Number(id)); // Ensure type match

  return (
    <div>
      <BreadCrums product={product} />
    </div>
  );
};

export default Product;
