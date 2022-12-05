import { getSession, signIn } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { Skeleton } from 'antd';

const fetcher = async () => {
  const response = await fetch(`http://localhost:4000/dashboard`);
  const data = await response.json();
  return data;
};
const DashboardWSwr = () => {
  const { data, error } = useSWR('dashboard', fetcher);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (!session) {
        signIn();
      } else {
        setLoading(false);
      }
    };
    securePage();
  }, []);

  if (loading) {
    return <Skeleton active />;
  }

  if (error) {
    return 'An error occurred while fetching';
  }
  if (!data) {
    return <Skeleton active />;
  }
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>User Dashboard</h1>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <h3>Posts: {data?.posts}</h3>
        <h3>Likes: {data?.likes}</h3>
        <h3>Followers: {data?.followers}</h3>
        <h3>Following: {data?.following}</h3>
      </div>
    </div>
  );
};

export default DashboardWSwr;
