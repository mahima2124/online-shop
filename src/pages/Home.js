import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { item } from '../store/productSlice';
import data from '../const/Data';

function Home() {
  const dispatch = useDispatch();

  const handleItem = (element) => {
    dispatch(item(element));
  };

  const products = data.map(
    (element) => (
      <div className="card" key={element.id} role="button" tabIndex={0} onClick={() => handleItem(element)} onKeyDown={() => handleItem(element)}>
        <Link to="/item">
          <img className="productImg" src={element.img} alt="" />
        </Link>
        <Link to="/item">
          <h3 className="watchName">{element.name}</h3>
        </Link>
        <Link to="/item">
          <h5 className="watchOffer">{element.offer}</h5>
        </Link>
      </div>
    ),
  );

  return (
    <div className="homePage">
      <div className="heading">
        <h2>TOP OFFERS ON WATCHES</h2>
        <h5 className="items">8 Items</h5>
      </div>
      <hr />
      <div className="productsWrapper">{products}</div>
    </div>
  );
}

export default Home;
