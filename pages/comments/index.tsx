import React, { useEffect, useState } from 'react';
import useSWR from 'swr';

const CommentsList = () => {
  const [comments, setComments] = useState([]);

  const fetchComment = async () => {
    const response = await fetch(`api/comments`);
    const data = await response.json();
    setComments(data);
  };
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: '20px',
      }}
    >
      <button onClick={fetchComment}>Load Button</button>
      <button
        style={{
          marginTop: '5px',
        }}
        onClick={() => setComments([])}
      >
        Reset
      </button>
      <div>
        {comments.map((comment: any) => {
          return (
            <div
              key={comment?.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <h3>{comment?.text}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommentsList;
