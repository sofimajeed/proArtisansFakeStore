import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CartsComponent = () => {
  const products = useSelector((state) => state.allCarts.products);
  const renderList = products.map((product) => {
    const { id, date,prod} = product;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/cart/${id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="content">
                <div className="header">{date}</div>
                <div className="meta price">$ {prod}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default CartsComponent;
