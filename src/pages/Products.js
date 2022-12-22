import React from "react";
import { Link } from "react-router-dom";

function Products(props) {
  return (
    <section>
      <h1>Products</h1>
      <ul>
        <li>
          <Link to="/products/car">car</Link>
        </li>
        <li>
          <Link to="/products/egg">egg</Link>
        </li>
        <li>
          <Link to="/products/strawberry">strawberry</Link>
        </li>
      </ul>
    </section>
  );
}

export default Products;
