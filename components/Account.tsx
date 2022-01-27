import React, { useState, useLayoutEffect } from 'react';
import { Modal, Layout, Dropdown, Button } from 'antd';
import { useRouter } from 'next/router';
import Text from "antd/lib/typography/Text";
import { useMoralis } from 'react-moralis';
import { connectors } from 'components/config';
import MoralisType from "moralis";

const Account = () => {
    const { Header } = Layout;
    const router = useRouter();
    const { authenticate, isAuthenticated, account, chainId, logout } = useMoralis();
    const [isAuthModalVisible, setIsAuthModalVisible] = useState<boolean>();
    return (
        <div>
            {!isAuthenticated ?
                <>
                    <Button style={{ margin: 20 }} onClick={() => setIsAuthModalVisible(true)} type="primary" htmlType="submit" >
                        Connect Wallet
                    </Button>
                </> :
                <>
                    <Button style={{ margin: 20 }} onClick={async () => {
                        await logout();
                        window.localStorage.removeItem("connectorId");
                    }} type="primary" htmlType="submit" >
                        Disconeect
                    </Button>
                </>
            }

            <Modal
                visible={isAuthModalVisible}
                footer={null}
                onCancel={() => setIsAuthModalVisible(false)}
                bodyStyle={{
                    padding: "15px",
                    fontSize: "17px",
                    fontWeight: "500",
                }}
                style={{ fontSize: "16px", fontWeight: "500" }}
                width="340px"
            >
                <div style={{ padding: "10px", display: "flex", justifyContent: "center", fontWeight: "700", fontSize: "20px" }}>
                    Connect Wallet
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                    {connectors.map(({ title, icon, connectorId }, key) => (
                        <div
                            style={styles.connector}
                            key={key}
                            onClick={async () => {
                                try {
                                    await authenticate({ provider: connectorId as MoralisType.Web3ProviderType });
                                    window.localStorage.setItem("connectorId", connectorId);
                                    setIsAuthModalVisible(false);
                                } catch (e) {
                                    console.error(e);
                                }
                            }}
                        >
                            <img src={icon} alt={title} style={styles.icon} />
                            <Text style={{ fontSize: "14px" }}>{title}</Text>
                        </div>
                    ))}
                </div>
            </Modal>
        </div>
    );
};

export default Account;

const styles = {
    account: {
        height: "42px",
        padding: "0 15px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "fit-content",
        borderRadius: "12px",
        backgroundColor: "rgb(244, 244, 244)",
        cursor: "pointer",
    },
    text: {
        color: "#21BF96",
    },
    connector: {
        alignItems: "center",
        display: "flex",
        flexDirection: 'column' as 'column',
        height: "auto",
        justifyContent: "center",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "20px 5px",
        cursor: "pointer",
    },
    icon: {
        alignSelf: "center",
        fill: "rgb(40, 13, 95)",
        flexShrink: "0",
        marginBottom: "8px",
        height: "30px",
    },
};


