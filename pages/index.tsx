import type { NextPage } from 'next'
import { Layout, Modal, message, Col, Card, Statistic, PageHeader, Button } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { useState, useLayoutEffect } from 'react';

import HeaderPanel from 'components/HeaderPanel';
import Balance from 'components/Balance';




const Home: NextPage = observer(() => {
  const { Content, Footer } = Layout;

  return (
    <div >
      <main >
        <Layout style={{ minHeight: '100vh' }}>
          <HeaderPanel/>
          {/* <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}> */}
          <Layout className="site-layout">
            <Content style={{ margin: '0 16px' }}>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <Balance/>
              </div>
            
            </Content>
            <Footer style={{ textAlign: 'center' }}>©2022 Viaje Indonesia. All rights reserved.</Footer>
          </Layout>

        </Layout>
      </main>
    </div>
  )
});

export default Home;
