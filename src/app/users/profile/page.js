'use client';
import { useEffect, useState } from 'react';
import ProfileNav from '@/app/components/common/ProfileNav/ProfileNav';

// we are going to be fetching data from our API and displaying it on
// the page

export default function Home() {
  // state is what the data is representing in realtime
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [age, setAge] = useState(null);
  const [name, setName] = useState('Dylan');

  /* useEffect(() => {
    // hitting an api and setting our component with some data
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/`)
      .then((res) => res.json())
      .then((data) => {
        // data is an object
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No data shown...</p>; */

  return (
    <main>
      <ProfileNav />
    </main>
  );
}
