import type { NextPage } from 'next'
// import { Layout, Modal, message, Col, Card, Row, Typography, Button } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { useState, useLayoutEffect } from 'react';

import HeaderPanel from 'components/HeaderPanel';
import Balance from 'components/Balance';
import { SettingOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons'





const Home: NextPage = observer(() => {
  // const { Content, Footer } = Layout;

  return (
    <div >
      <main >
        <HeaderPanel />
        {/* <Layout style={{ minHeight: '100vh' }}>
          <HeaderPanel />
          <Layout className="site-layout">
            <Content style={{ margin: '0 16px' }}>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 1000 }}>
                <Row style={{marginTop:70}} gutter={16}>
                  <Col span={8}>
                      <Typography.Title type='secondary' level={3}>Welcome to NFTku,</Typography.Title>
                      <Typography.Title  level={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography.Title>
                  </Col>
                  <Col span={16}>
                  </Col>
                </Row>
              </div>

            </Content>
            <Footer style={{ textAlign: 'center' }}>©2022 NFTku. All rights reserved.</Footer>
          </Layout>

        </Layout> */}
      </main>
    </div>
  )
});

export default Home;

