import { useRouter } from 'next/router';
import React from 'react';

const ProductDetails = () => {
  const route = useRouter();
  console.log({ route });
  const productId = route.query.productId;
  return (
    <div>
      <h1>Details about product {productId}</h1>
    </div>
  );
};

export default ProductDetails;
