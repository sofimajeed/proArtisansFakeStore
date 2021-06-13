import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setCarts } from "../redux/actions/productsActions";
import CartsComponent from "./CartsComponent";

const CartsPage = () => {
  const products = useSelector((state) => state.allCarts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/carts")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setCarts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);
  return (
    <div className="ui grid container">
      <CartsComponent />
    </div>
  );
};

export default CartsPage;
