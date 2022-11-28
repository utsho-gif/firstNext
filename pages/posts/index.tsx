import Link from 'next/link';
import React from 'react';

const PostList = ({ posts }: any) => {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>All Posts</h2>
      {posts.map((post: any) => {
        return (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
            key={post?.id}
          >
            <Link href={`posts/${post?.id}`} passHref>
              <p>
                {post?.id} {post?.title}
              </p>
              <hr />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return {
    props: {
      posts: data,
    },
  };
}
