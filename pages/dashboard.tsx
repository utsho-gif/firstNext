import React, { useEffect, useState } from 'react';
interface IDash {
  posts: string;
  likes: string;
  followers: string;
  following: string;
}
const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState<IDash>({
    posts: '',
    likes: '',
    followers: '',
    following: '',
  });

  useEffect(() => {
    fetch(`http://localhost:4000/dashboard`)
      .then((res) => res.json())
      .then((data) => setDashboardData(data));
  }, []);
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
        <h3>Posts: {dashboardData?.posts}</h3>
        <h3>Likes: {dashboardData?.likes}</h3>
        <h3>Followers: {dashboardData?.followers}</h3>
        <h3>Following: {dashboardData?.following}</h3>
      </div>
    </div>
  );
};

export default Dashboard;
