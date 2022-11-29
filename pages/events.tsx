import { useRouter } from 'next/router';
import React, { useState } from 'react';

const Events = ({ events }: any) => {
  const router = useRouter();
  const [onlySpo, setOnlySpo] = useState(events);
  const fetchSportsList = async () => {
    const response = await fetch(
      `http://localhost:4000/events?category=sports`
    );
    const data = await response.json();
    setOnlySpo(data);
    router.push('/events?category=sports', undefined, { shallow: true });
  };
  return (
    <div>
      <button
        style={{ width: '100%', marginTop: '30px' }}
        onClick={fetchSportsList}
      >
        Sports List
      </button>
      <h1 style={{ textAlign: 'center' }}>List of events</h1>
      {onlySpo.map((event: any) => {
        return (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
            key={event?.id}
          >
            <h3>
              {event?.title} || {event?.category}
            </h3>
            <h3>{event?.date}</h3>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Events;

export async function getServerSideProps(context: any) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? 'category=sports' : '';
  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await response.json();

  return {
    props: {
      events: data,
    },
  };
}
