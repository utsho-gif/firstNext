import { NOTFOUND } from 'dns';
import React from 'react';

const Post = ({ post }: any) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>{post?.id}</h1>
      <h4>{post?.title}</h4>
      <h4>{post?.body}</h4>
    </div>
  );
};

export default Post;

export async function getStaticPaths() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  const paths = data.map((post: any) => {
    return {
      params: {
        postId: `${post?.id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.postId}`
  );
  const data = await response.json();
  if (!data?.id) {
    return {
      NOTFOUND: true,
    };
  }
  return {
    props: {
      post: data,
    },
  };
}
