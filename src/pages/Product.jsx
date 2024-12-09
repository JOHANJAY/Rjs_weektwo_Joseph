import { useParams } from "react-router-dom";

const Product = () => {
  const  book  = useParams();
  console.log(book);
  

  return (
    <div>
      <h1>Product: Book</h1>
    </div>
  );
};
export default Product;
