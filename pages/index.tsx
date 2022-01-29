import type { NextPage } from 'next'
// import { Layout, Modal, message, Col, Card, Row, Typography, Button } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { useState, useLayoutEffect } from 'react';

import HeaderPanel from 'components/HeaderPanel';
import Balance from 'components/Balance';
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons'
import { Container, Grid } from '@mui/material';
import CardItem from 'components/molecules/CardItem';





const Home: NextPage = observer(() => {
  // const { Content, Footer } = Layout;

  return (
    <div >
      <main >
        <HeaderPanel />
        <Container style={{ minHeight: '100vh', marginTop: 100 }}>

        </Container>
      </main>
    </div>
  )
});

export default Home;

