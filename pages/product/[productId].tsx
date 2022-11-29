import { useRouter } from 'next/router';
import React from 'react';

const Product = ({ product }: any) => {
  const router = useRouter();

  if (router?.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>Name: {product?.title}</h1>
      <h1>Price: {product?.price}</h1>
      <h1>Description: {product?.description}</h1>
    </div>
  );
};

export default Product;

export async function getStaticPaths() {
  //   const response = await fetch(`http://localhost:4000/products`);
  //   const data = await response.json();
  //   const paths = data.map((p: any) => {
  //     return {
  //       params: {
  //         productId: `${p?.id}`,
  //       },
  //     };
  //   });

  return {
    paths: [
      {
        params: {
          productId: '1',
        },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const response = await fetch(
    `http://localhost:4000/products/${params?.productId}`
  );
  const data = await response.json();

  return {
    props: {
      product: data,
    },
  };
}
