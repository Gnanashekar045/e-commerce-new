import React, { useContext } from "react";
import '../Pages/ShopCategory.css'
import { ShopContext } from "../Context/ShopContect"; // Correct file name
import Item from "../Conponents/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext); // Use the correct context

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="Category Banner" />
      
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort"> {/* Use className */}
          Sort by <img src="dropdown_icon_url" alt="Sort Dropdown" />
        </div>
      </div>

      <div className="shopcategory-products">
        {all_product &&
          all_product.map((item, i) => {
            if (props.category === item.category) {
              return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            } else {
              return null;
            }
          })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
