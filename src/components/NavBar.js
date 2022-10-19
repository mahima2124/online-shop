import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cartItem);
  const location = useLocation();
  // let emptyData;

  // useEffect(() => {
    
  //   console.log(emptyData,"==========>>emptyData")
  // },[])

  const handleLogout = () =>{
    localStorage.setItem("user_login", JSON.stringify({}));
    
    //  let page = location.pathname ==='/home';
    //  page = location.reload(true)
    
    // return emptyData;
    // const data = localStorage.removeItem("user_login");
    // console.log(data,"=======>>>>>data")

    // console.log("=========>>>>hi")
    // let items =JSON.parse(localStorage.getItem("user_login"));
    // console.log(items,"========>>>items")
    // items = items.filter((item) => item.id !== id);
    // const dataSet = localStorage.setItem("user_login");
    // localStorage.removeItem("user_login");

  }

  return (
    <div className="navbar">
      <div className="navbar-heading">
        {location.pathname === "/" || location.pathname === "/login" ? (
          <i className="fa fa-shopping-bag"></i>
        ) : (
          <Link to="/home"> <i className="fa fa-shopping-bag"></i></Link>
        )} ONLINE SHOPPING
      </div>

      {location.pathname === "/" || location.pathname === "/login" ? (
        <div className="cart-icon" style={{ display: "none" }}>
          <i className="fa fa-shopping-cart fa-2x " aria-hidden="true"></i>
          <span className="bag-quantity">{cartTotalQuantity}</span>
        </div>
      ) : (
        <div className="cart-icon">
          <Link to="/cart">
            <i className="fa fa-shopping-cart fa-2x " aria-hidden="true"></i>
          </Link>
          <span className="bag-quantity">{cartTotalQuantity}</span>
        </div>
      )}

      {location.pathname === "/" || location.pathname === "/login" ? (
        <div className="logout-icon" style={{ display: "none" }}>
          <i className="fa fa-sign-out" aria-hidden="true" ></i>
        </div>
      ) : (
        <div className="logout-icon">
          <Link to="/login">
            <i className="fa fa-sign-out" aria-hidden="true" onClick={() => handleLogout()}></i>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
