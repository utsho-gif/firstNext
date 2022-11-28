import React, { useEffect, useState } from 'react';
import User from '../components/user';

const Users = ({ users }: any) => {
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);
  return (
    <>
      <h1
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        List of all user
      </h1>
      {users && users.map((user: any) => <User key={user.id} user={user} />)}
    </>
  );
};

export default Users;

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return {
    props: {
      users: data,
    },
  };
}
