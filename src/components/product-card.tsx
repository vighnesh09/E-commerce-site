import { FaPlus } from "react-icons/fa";

type productsProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: () => void;
};

const server = "hghghgh";

const ProductCard = ({
  productId,
  photo,
  name,
  price,
  stock,
  handler,
}: productsProps) => {
  return (
    <div className="product-card">
      <img src={photo} alt={name} height={200} />   
      <p>{name}</p>
      <span>₹{price}</span>

      <div>
        <button onClick={() => handler()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
