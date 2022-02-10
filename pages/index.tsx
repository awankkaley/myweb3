import type { NextPage } from 'next'
// import { Layout, Modal, message, Col, Card, Row, Typography, Button } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { useState, useLayoutEffect } from 'react';
import { useRouter } from 'next/router';

import HeaderPanel from 'components/HeaderPanel';
import Balance from 'components/Balance';
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons'
import { Button, Container, Grid, IconButton, Typography } from '@mui/material';
import CardItem from 'components/molecules/CardItem';
import ExploreIcon from '@mui/icons-material/Explore';




const Home: NextPage = observer(() => {
  const router = useRouter();


  return (
    <div >
      <main >
        <HeaderPanel />
        <Container style={{ minHeight: '100vh', marginTop: 100 }}>
          <Grid container marginTop={20} marginBottom={0} >
            <Grid item lg={12} xs={12} textAlign="center" >
              <Typography variant="h3"><b>Discover, collect, and sell <br />extraordinary  NFTs</b></Typography>
              <Typography variant="h6">OpenSea is the world's first and largest NFT marketplace</Typography>
              <Button sx={{ marginTop: 3 }} variant='contained' size='large' onClick={() => router.push("/explore")}>
                <ExploreIcon /> Explore
              </Button>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  )
});

export default Home;

