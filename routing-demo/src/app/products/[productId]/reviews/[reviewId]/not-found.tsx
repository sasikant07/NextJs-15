"use client"

import { usePathname } from "next/navigation";

const NotFound = () => {
  const pathname = usePathname();

  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];

  return (
    <>
      <h2>Review {reviewId} not found for product {productId}</h2>
    </>
  );
};

export default NotFound;
