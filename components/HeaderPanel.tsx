import React, { useEffect } from 'react';

import { Menu, Layout, Dropdown, Button } from 'antd';
import { useRouter } from 'next/router';
import Account from './Account';
import { useMoralis } from 'react-moralis';
import MoralisType from "moralis";

const HeaderPanel = () => {
    const { Header } = Layout;
    const router = useRouter();
    const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
        useMoralis();


    useEffect(() => {
        const connectorId = window.localStorage.getItem("connectorId");
        if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
            enableWeb3({ provider: connectorId as MoralisType.Web3ProviderType });
        // eslint-disable-next-line react-hooks/exhaustive-depsÍ
    }, [isAuthenticated, isWeb3Enabled]);

    return (
        <div>
            <Header style={styles.header}  >
                <Menu
                    theme="light"
                    mode="horizontal"
                    style={{
                        display: "flex",
                        fontSize: "17px",
                        fontWeight: "500",
                        width: "100%",
                        justifyContent: "center",
                    }}
                    defaultSelectedKeys={[router.pathname]}
                >
                    <Menu.Item key="/">
                        <a >Home</a>
                    </Menu.Item>
                    <Menu.Item key="/balance">
                        <a >Balance</a>
                    </Menu.Item>
                    <Menu.Item key="/transfer">
                        <a >Transfer</a>
                    </Menu.Item>
                    <Menu.Item key="/history">
                        <a >History</a>
                    </Menu.Item>
                </Menu>
                <div style={styles.headerRight}>
                    <Account />
                </div>
            </Header>

        </div>
    );
};

export default HeaderPanel;


const styles = {
    content: {
        display: "flex",
        justifyContent: "center",
        fontFamily: "Roboto, sans-serif",
        color: "#041836",
        marginTop: "130px",
        padding: "10px",
    },
    header: {
        zIndex: 1,
        width: "100%",
        background: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "Roboto, sans-serif",
        borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
        padding: "0 10px",
        boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
    },
    headerRight: {
        display: "flex",
        gap: "20px",
        alignItems: "center",
        fontSize: "15px",
        fontWeight: "600",
    },
};