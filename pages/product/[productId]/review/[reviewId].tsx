import { useRouter } from 'next/router';
import React from 'react';

const ReviewDetails = () => {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <div>
      <h1>
        Review {reviewId} for product {productId}
      </h1>
    </div>
  );
};

export default ReviewDetails;
