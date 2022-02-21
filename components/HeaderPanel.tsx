import React, { useEffect } from 'react';

import { useRouter } from 'next/router';
import { useMoralis } from 'react-moralis';
import MoralisType from "moralis";
import { AppBar, Box, Container, Toolbar, Typography, IconButton, Menu, Button, Tooltip, Avatar, MenuItem, List, ListItem, ListItemIcon, Divider, ListItemText, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Account from './Account';

const HeaderPanel = () => {

    const router = useRouter();
    const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
        useMoralis();
    const [drawer, setDrawer] = React.useState<boolean>(false);

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
                            onClick={()=> router.push('/')}
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
                                onClick={() => setDrawer(true)}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            onClick={()=> router.push('/')}
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, fontWeight: 700 }}
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
            <Drawer
                anchor="left"
                open={drawer}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
                onClose={() => setDrawer(false)}
            >

                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={() => setDrawer(false)}
                    onKeyDown={() => setDrawer(false)}
                >
                    <Typography
                        align='center'
                        margin={2}
                        onClick={()=> router.push('/')}
                        variant="h6">
                        more.
                    </Typography>
                    <Divider />
                    <List>
                        <ListItem onClick={() => router.push("/")} button key={"Home"}>
                            <ListItemIcon>
                                <HomeOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Home"} />
                        </ListItem>
                        <ListItem onClick={() => router.push("/explore")} button key={"Explore"}>
                            <ListItemIcon>
                                <ManageSearchOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Explore"} />
                        </ListItem>
                        <ListItem onClick={() => router.push("/mynft")} button key={"MyNft"}>
                            <ListItemIcon>
                                <Inventory2OutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={"MyNft"} />
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem button key={"Profile"}>
                            <ListItemIcon>
                                <PersonOutlineOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Profile"} />
                        </ListItem>
                    </List>
                </Box>
            </Drawer>

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