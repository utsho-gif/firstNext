import { useState } from 'react';

const CommentsList = () => {
  const [comments, setComments] = useState([] as any);
  const [comment, setComment] = useState('');
  const fetchComment = async () => {
    const response = await fetch(`api/comments`);
    const data = await response.json();
    setComments(data);
  };
  const handleSubmit = async () => {
    const response = await fetch(`api/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ comment }),
    });
    const data = await response.json();
    comments.push(data);
    setComment('');
  };

  const handleDelete = async (commentId: any) => {
    const response = await fetch(`api/comments/${commentId}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    console.log(data);
    fetchComment();
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
      <div style={{ marginTop: '10px' }}>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit comment</button>
      </div>
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
              <h3>
                {comment?.text}{' '}
                <button onClick={() => handleDelete(comment?.id)}>
                  Delete
                </button>
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommentsList;
