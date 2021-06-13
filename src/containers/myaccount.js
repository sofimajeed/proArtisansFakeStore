import React from "react";
import auth from "./auth";
import { Link } from "react-router-dom";
const Myaccount = (props) => {
  return (
      <div style={{textAlign:"center",padding:"2%"}}>
          <h2>Welcome  <span style={{fontWeight:"lighter",color:"red",textTransform:"capitalize"}}>{localStorage.getItem("name")}</span>! </h2>
          <ul style={{listStyle:"none",display:"flex",gap:"4%",margin:"3% 0%"}}>
              
          <Link to="/products">GetAllProducts</Link>
              {/* <li>AddProduct</li>
              <li>RemoveProduct</li>
              <li>UpdateProduct</li> */}
          </ul>
           
          <button onClick={()=>{
              auth.logout(() => {
                props.history.push("/");
              });  
          }} style={{width:"100px",background:"black",color:"red",padding:"1%",fontWeight:"bolder",cursor:"pointer"}}>Logout</button>
      </div>
  );
};

export default Myaccount;
