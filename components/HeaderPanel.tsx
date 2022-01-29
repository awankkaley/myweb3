import React, { useEffect } from 'react';

import { useRouter } from 'next/router';
import { useMoralis } from 'react-moralis';
import MoralisType from "moralis";
import { AppBar, Box, Container, Toolbar, Typography, IconButton, Menu, Button, Tooltip, Avatar, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Account from './Account';

const HeaderPanel = () => {
    const router = useRouter();
    const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
        useMoralis();
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    useEffect(() => {
        const connectorId = window.localStorage.getItem("connectorId");
        if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
            enableWeb3({ provider: connectorId as MoralisType.Web3ProviderType });
        // eslint-disable-next-line react-hooks/exhaustive-depsÍ
    }, [isAuthenticated, isWeb3Enabled]);

    return (
        <div>
            <AppBar style={styles.header} elevation={0} position='fixed'>
                <Container maxWidth='xl'>
                    <Toolbar disableGutters>
                        <Typography
                            variant="h4"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontWeight: 700 }}>
                            more.
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <MenuItem key={1} onClick={() => router.push("/")}
                                >
                                    <Typography textAlign="center">Home</Typography>
                                </MenuItem>
                                <MenuItem key={2} onClick={() => router.push("/explore")}>
                                    <Typography textAlign="center">Explore</Typography>
                                </MenuItem>
                                <MenuItem key={3} onClick={() => router.push("/mynft")}>
                                    <Typography textAlign="center">My NFT</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            more.
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "center" }}>
                            <Button
                                key={1}
                                onClick={() => router.push("/")}
                                sx={{ my: 2, color: 'black', display: 'block', fontSize: 18 }}>
                                Home
                            </Button>
                            <Button
                                key={2}
                                onClick={() => router.push("/explore")}
                                sx={{ my: 2, color: 'black', display: 'block', fontSize: 18 }}>
                                Explore
                            </Button>
                            <Button
                                key={3}
                                onClick={() => router.push("/mynft")}
                                sx={{ my: 2, color: 'black', display: 'block', fontSize: 18 }}>
                                My NFT
                            </Button>
                        </Box>

                        <Box >
                            <Account />
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            {/* <Header style={styles.header}  >
                <div style={{ margin: "20px", }}>
                    <Typography.Title level={3}>NFTku.</Typography.Title>
                </div>
                <Menu
                    theme="light"
                    mode="horizontal"
                    style={styles.menu}
                    defaultSelectedKeys={[router.pathname]}
                >
                    <Menu.Item key="/">
                        <a >Home</a>
                    </Menu.Item>
                    <Menu.Item key="/explore">
                        <a >Explore</a>
                    </Menu.Item>
                    <Menu.Item key="/assets">
                        <a >My NFT's</a>
                    </Menu.Item>
                </Menu>
                <div style={styles.headerRight}>
                </div>
            </Header> */}

        </div>
    );
};

export default HeaderPanel;


const styles = {
    header: {
        color: "rgba(0, 0, 0, 0.87)",
        background: "#fff",
        fontFamily: "Space Grotesk",
        borderBottom: "2px solid rgba(0, 0, 0, 0.06)"

    }
};