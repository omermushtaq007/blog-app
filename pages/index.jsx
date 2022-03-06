import Head from 'next/head';
import { useEffect, useState } from 'react';
import TopAlertBar from '../components/TopAlertBar';
import TopBar from '../components/TopBar';

export default function Home({ data }) {
  const [title, setTitle] = useState([]);

  useEffect(() => {
    data.map((item) => {
      setTitle(item.title);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Posting Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopAlertBar title={title} />
      <TopBar />
    </>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://0.0.0.0:3000/api/blogs`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
