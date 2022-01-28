import React, { useState, useLayoutEffect } from 'react';
// import { Modal, Layout, Dropdown, Button } from 'antd';
import { useRouter } from 'next/router';
// import Text from "antd/lib/typography/Text";
import { useMoralis } from 'react-moralis';
import { connectors } from 'components/config';
import MoralisType from "moralis";
import { Button, Dialog, Tooltip, Typography } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Modal from '@mui/material/Modal';

const Account = () => {
    // const { Header } = Layout;
    const router = useRouter();
    const { authenticate, isAuthenticated, account, chainId, logout } = useMoralis();
    const [isAuthModalVisible, setIsAuthModalVisible] = useState<boolean>();
    return (
        <div>
            {!isAuthenticated ?
                <>
                    <Tooltip title="Open settings">
                        <div onClick={() => setIsAuthModalVisible(true)}>
                            <AccountBalanceWalletIcon fontSize='large' />
                        </div>
                    </Tooltip>
                    <Dialog
                        open={isAuthModalVisible}
                        title='Connect Wallet'
                        onClose={() => setIsAuthModalVisible(false)}
                        sx={{ fontSize: "16px", fontWeight: "500" }}
                    >
                        <div style={{ paddingTop: "10px", display: "flex", justifyContent: "center", fontWeight: "700", fontSize: "20px" }}>
                            Connect Wallet
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", margin: 20 }}>
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
                                    <Typography style={{ fontSize: "14px" }}>{title}</Typography>
                                </div>
                            ))}
                        </div>
                    </Dialog>
                </> :
                <>
                    <Tooltip title="Open settings">
                        <div onClick={() => setIsAuthModalVisible(true)}>
                            <AccountBalanceWalletIcon fontSize='large' />
                        </div>
                    </Tooltip>
                    <Dialog
                        open={isAuthModalVisible}
                        title='Connect Wallet'
                        onClose={() => setIsAuthModalVisible(false)}
                        sx={{ fontSize: "16px", fontWeight: "500" }}
                    >
                        <div style={{ paddingTop: "10px", display: "flex", justifyContent: "center", fontWeight: "700", fontSize: "20px" }}>
                            Connect Wallet
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", margin: 20 }}>
                            <Typography style={{ fontSize: "14px" }}>{account}</Typography>
                            <Button  onClick={async () => {
                                await logout();
                                window.localStorage.removeItem("connectorId");
                            }}  >
                                Disconeect
                            </Button>
                        </div>
                    </Dialog>

                </>
            }


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


