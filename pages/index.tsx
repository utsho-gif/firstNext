import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Home = () => {
  const route = useRouter();
  const handleClick = () => {
    route.push('/product');
  };
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <h1 className="text-danger">Home Page</h1>
      <Link href="/blog">
        <h4>Blog</h4>
      </Link>
      <Link href="/product">
        <h4>Product</h4>
      </Link>
      <Link href="/posts">
        <h4>Posts</h4>
      </Link>
      <Link href="/about">
        <h4>About</h4>
      </Link>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
};

export default Home;
