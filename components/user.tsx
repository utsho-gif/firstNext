import React from 'react';

const User = ({ user }: any) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <p>{user?.name}</p>
      <p>{user?.email}</p>
    </div>
  );
};

export default User;
