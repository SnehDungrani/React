import { useParams, Link } from "react-router-dom";

export default function ProductDetailPage() {
  const params = useParams();
  return (
    <>
      <h1>Product Details</h1>
      <h2>{params.productId}</h2>
      <Link to=".." relative="path">
        Back
      </Link>
    </>
  );
}
