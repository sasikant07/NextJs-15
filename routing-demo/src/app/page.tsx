import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>Welcome home!</h1>
      <Link href="/blog">Blog</Link>
      <br />
      <Link href="/products">Products</Link>
      <br/>
      <Link href="/articles/breaking-news-123?lang=en">Read in English</Link>
      <br/>
      <Link href="/articles/breaking-news-123?lang=fr">Read in French</Link>
    </>
  );
};

export default Home;
