import { notFound } from "next/navigation";
// import { redirect } from "next/navigation";

// function getRandomInit(count: number) {
//   return Math.floor(Math.random() * count);
// }

const ProductReview = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  // const random = getRandomInit(2);
  // if (random === 1) {
  //   throw new Error("Error loading review");
  // }
  const { productId, reviewId } = await params;

  if (parseInt(reviewId) > 1000) {
    notFound();
    // redirect("/products");
  }

  return (
    <h1>
      Review {reviewId} for product {productId}
    </h1>
  );
};

export default ProductReview;
