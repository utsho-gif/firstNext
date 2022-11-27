import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/blog">
        <h4>Blog</h4>
      </Link>
      <Link href="/product">
        <h4>Product</h4>
      </Link>
    </div>
  );
};

export default Home;
