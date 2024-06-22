import { Link } from "react-router-dom";
import productCard from "../components/product-card";
import ProductCard from "../components/product-card";

const Home = () => {
  const addToCardHendler = () => {};
  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Peoducts
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>
      <main>
        <ProductCard
          productId="hghghgh"
          name="macbook"
          price={12121}
          stock={3242}
          handler={addToCardHendler}
          photo="https://i.gadgets360cdn.com/products/large/macbook-air-m1-2020-db-800x600-1607604365.png"
        />
      </main>
    </div>
  );
};
export default Home;
