import Link from 'next/link';
import React from 'react';

const Product = ({ product }: any) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Link href={`product/${product?.id}`}>
        <h3>
          {product?.title} -- Price:{product?.price}
        </h3>
        <h5>{product?.description}</h5>
        <hr />
      </Link>
    </div>
  );
};

export default Product;
