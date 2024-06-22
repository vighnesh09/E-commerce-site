import { useState } from "react";
import ProductCard from "../components/product-card";

const Search = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState(100000);
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  const isPrevPage = true;
  const isNextPage = true;

  const addToCardHendler = () => {};

  return (
    <div className="product-search-page">
      <aside>
        <h2>Filters</h2>

        <div>
          <h4>Sort</h4>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="">None</option>
            <option value="asc">Price( Low to High )</option>
            <option value="dsc">Price( High to Low )</option>
          </select>
        </div>

        <div>
          <h4>Max Price:{maxPrice || ""}</h4>
          <input
            value={maxPrice}
            type="range"
            min={100}
            max={100000}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>

        <div>
          <h4>Category</h4>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="">Camera</option>
            <option value="">Game</option>
            <option value="">Laptop</option>
          </select>
        </div>
      </aside>
      <main>
        <h1>Products</h1>
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="search-product-list">
          <ProductCard
            productId="hghghgh"
            name="macbook"
            price={12121}
            stock={3242}
            handler={addToCardHendler}
            photo="https://i.gadgets360cdn.com/products/large/macbook-air-m1-2020-db-800x600-1607604365.png"
          />
        </div>

        <article>
          <button onClick={() => setPage((prev) => prev - 1)}>Prev</button>
          <span>
            {page} of {4}
          </span>
          <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
        </article>
      </main>
    </div>
  );
};

export default Search;
