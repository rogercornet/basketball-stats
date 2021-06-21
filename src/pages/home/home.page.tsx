import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import axios from 'axios'
import './home.scss'

export default function HomePage() {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const url = `https://msstats.optimalwayconsulting.com/v1/fcbq/team-stats/team/42114/season/2020`
      const result = await axios(url)

      setData(result.data)
    }
    fetchData();
  }, [])

  console.log(data)

  return (
    <Container maxWidth="lg">

    </Container>
  );
}