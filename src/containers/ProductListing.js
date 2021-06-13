import React, { useEffect, useCallback,useState, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";

const ProductPage = () => {
  const [sort, setsort] = useState('');
  const [category, setcategory] = useState('')
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${category}?sort=${sort}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, [sort,category]);

  // console.log("Products :", products);    
  return (
    <div>
      <form  style={{margin:"1%"}} onSubmit={(e)=>{
        e.preventDefault();
        setsort(`${e.target.sort.value}`)
        console.log(sort)
      }}>

       <select name="sort" id="sort">
  <option value="asc">Ascending</option>
  <option value="desc">Descending</option>
</select>
  <button type="submit" style={{cursor:"pointer",width:"80px",background:"black",fontWeight:"bolder",color:"red"}}>Sort</button>
      </form>


      <form  style={{margin:"1%"}} onSubmit={(e)=>{
        e.preventDefault();
        setcategory(`category/${e.target.category.value}`)
        console.log(category)
      }}>

       <select name="category" id="category">
         <option value="">All</option>
  <option value="jewelery">Jewelery</option>
  <option value="electronics">Electronics</option>
</select>
  <button type="submit" style={{cursor:"pointer",width:"80px",background:"black",fontWeight:"bolder",color:"red"}}>Category</button>
      </form>
    <div className="ui grid container">
      <ProductComponent  />
    </div>
    </div>
  );
};

export default ProductPage;
