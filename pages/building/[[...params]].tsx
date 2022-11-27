import { useRouter } from 'next/router';
import React from 'react';

const Building = () => {
  const route = useRouter();
  const { params = [] } = route.query;
  console.log(params);

  if (params?.length === 2) {
    if (parseInt(params[0]) === 10000 && parseInt(params[1]) === 100000) {
      return (
        <div>
          <h1>
            Showing Range of {params[0]} to {params[1]}
          </h1>
        </div>
      );
    }
  } else if (params?.length === 1) {
    if (parseInt(params[0]) === 10000) {
      return (
        <div>
          <h1>Showing only range {params[0]}</h1>
        </div>
      );
    }
  }
  return (
    <div>
      <h1>Sorry your budget did not match</h1>
    </div>
  );
};

export default Building;
