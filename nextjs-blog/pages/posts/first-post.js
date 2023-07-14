import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function firstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>第一个post</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>First Post</h1>
        <h2>
          <Link href="/">
            <a className="gohome">GO Home</a>
          </Link>
        </h2>
      </Layout>
    </>
  );
}
