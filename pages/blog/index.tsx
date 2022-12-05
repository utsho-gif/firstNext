import { getSession } from 'next-auth/react';
import React from 'react';

const Blog = ({ data }: any) => {
  return (
    <div>
      <h1>Blog Page - {data}</h1>
    </div>
  );
};

export default Blog;

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: `api/auth/signin?callbackUrl=http://localhost:3000/blog`,
        permanent: false,
      },
    };
  }
  return {
    props: {
      data: session ? 'Lists of personalize blog' : 'List of free blog',
      title: 'Blog',
    },
  };
}
