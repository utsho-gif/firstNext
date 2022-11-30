import React from 'react';
import { comments } from '../../data/comments';

const Comment = ({ comment }: any) => {
  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>
        {comment?.id}--{comment?.text}
      </h3>
    </div>
  );
};

export default Comment;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { commentId: '1' } },
      { params: { commentId: '2' } },
      { params: { commentId: '3' } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const { commentId } = params;
  const comment = comments.find(
    (comment: any) => comment?.id === parseInt(commentId)
  );

  return {
    props: {
      comment,
    },
  };
}
