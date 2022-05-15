import type { NextPage } from 'next'
// import { Layout, Modal, message, Col, Card, Row, Typography, Button } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { useState, useLayoutEffect } from 'react';
import { useRouter } from 'next/router';

import HeaderPanel from 'components/HeaderPanel';
import Balance from 'components/Balance';
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons'
import { Button, Container, Divider, Grid, IconButton, Typography } from '@mui/material';
import CardItem from 'components/molecules/CardItem';
import ExploreIcon from '@mui/icons-material/Explore';


const data = [
  {
    title: "Chanky",
    code: "#001",
    price: 0.01,
    imgUrl: "https://lh3.googleusercontent.com/MeLXJuI7bYJfGxdxExonDk4yto5_BTM9rKJQtfTvj_jfHFZnPccfT206MlyHLpIElxFHjHHHSKj4DBJtENhJVgExSs6yyEgOjmRUvA=w316"
  },
  {
    title: "Pop Art",
    code: "#002",
    price: 0.07,
    imgUrl: "https://lh3.googleusercontent.com/73SbGmk3Zuk4c4JB72ZOBY_VsTDFdCz1mI7nq39rRP4LTxwB3vvxxmVZz47HG1sSANaLSfDNlWxO_razRwWPo3odwiN8Uy5f72llHg=w316"
  },
  {
    title: "Desperate",
    code: "#003",
    price: 1,
    imgUrl: "https://lh3.googleusercontent.com/ssSECF9Q4IUc4FckgsiG4sceLnWV_52B_uEKdGsslKOjxiYj10dOGzNB4XBD_MV4P85bQZWK8Ax3OXLOcwY-l5XXPUekjPEiflg3eA=w316"
  },
  {
    title: "Egg",
    code: "#004",
    price: 2,
    imgUrl: "https://lh3.googleusercontent.com/kt3Fr6J2xAqH0nMxyMv112SrRUJOkbPAASe79PsgBoU-qojPoabZtXsqzkvsHFMo_OrIDQjCKs6LBkgDIZdwhFIs638iOPPS5OAl=w600"
  },
]


const Home: NextPage = observer(() => {
  const router = useRouter();


  return (
    <div >
      <main >
        <HeaderPanel />
        <Container style={{ minHeight: '100vh', marginTop: 100 }}>
          <Grid container marginTop={2} marginBottom={0} >
            <Grid item lg={12} xs={12} textAlign="center" >
              <Typography variant="h3"><b>Discover, collect, and sell <br />extraordinary  NFTs</b></Typography>
              <Typography variant="h6">More is the world's first and largest NFT marketplace</Typography>
              <Button sx={{ marginTop: 3 }} variant='contained' size='large' onClick={() => router.push("/explore")}>
                <ExploreIcon /> Explore
              </Button>
            </Grid>
          </Grid>
          <Divider sx={{ marginTop: 2 }} />
          <Grid container spacing={2} marginTop={2}>
            <Grid textAlign={"center"} item lg={12} xs={12}>
              <Typography variant="h3"><b>Top Items</b></Typography>
            </Grid>
          </Grid>
          <Grid marginTop={2} container spacing={2}>
            {data.map(({ title, code, price, imgUrl }, key) => (
              <Grid key={key} item md={3} lg={3} xs={6}>
                <CardItem title={title} price={price + " ETH"} code={code} imgUrl={imgUrl} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </div>
  )
});

export default Home;

