import { Link } from "react-router-dom";

function Products() {
  const PRODUCTS = [
    { id: "P1", product: "product 1"},
    { id: "P2", product: "product 2"},
    { id: "P3", product: "product 3"},
    { id: "P4", product: "product 4"},
  ];

  return (
    <div>
      <h1>product page</h1>
      <ul>
        {PRODUCTS.map((prod) => {
          return <li key={prod.id}><Link to = {`/products/${prod.id}`}>{prod.product}</Link></li>;
        })}
      </ul>
    </div>
  );
}

export default Products;
