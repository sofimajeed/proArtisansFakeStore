

import React,{useState} from "react";
import auth from "./auth";

const Homepage = props => {
  const [name, setname] = useState("")
  return (
    <div style={{textAlign:"center"}}>
      <h1 style={{margin:"4% 0%"}}><span style={{fontWeight:"bolder",color:"red"}}>Pro Artisans</span> Fake Store</h1>
      <form onSubmit={(e)=>{
          e.preventDefault(); 
          auth.login(() => {
                props.history.push("/myaccount");
              });         
          localStorage.setItem("name", `${e.target.name.value}`);
          let Name = localStorage.getItem("name");
          console.log(Name)

      }}>
          <input type="text" required name="name" />

      <button type="submit" style={{cursor:"pointer",width:"100px",background:"black",color:"red",fontWeight:"bolder"}}
        >
        Login
      </button>
        </form>
    </div>
  );
};

export default Homepage;
