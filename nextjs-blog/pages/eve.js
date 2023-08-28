'use client';

import React, { useState, useEffect } from 'react';

async function getData() {
  const res = await fetch('https://myapp-shtaldaidq-uc.a.run.app');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default function DataPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getData();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <main>
      <h1>Data from API</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </main>
  );
}
