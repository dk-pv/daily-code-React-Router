import React from "react";
import { Link } from "react-router-dom";

const HomePage3 = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link to='/items/1'>ITEMS 1</Link>
        </li>
        <li>
          <Link to='/items/2'>ITEMS 2</Link>
        </li>
        <li>
          <Link to='/items/3'>ITEMS 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage3;
