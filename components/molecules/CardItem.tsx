import React, { useState, useLayoutEffect } from 'react';
// import { Modal, Layout, Dropdown, Button } from 'antd';
import { useRouter } from 'next/router';
// import Text from "antd/lib/typography/Text";
import { useMoralis } from 'react-moralis';
import { connectors } from 'components/config';
import MoralisType from "moralis";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Dialog, Grid, Tooltip, Typography } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Modal from '@mui/material/Modal';

const CardItem = (props) => {
    return (
        <div>
            <Card sx={{ maxWidth: 340 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={props.imgUrl}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Grid container marginBottom={0}>
                            <Grid item xs={6} sx={{ textAlign: 'left' }}>
                                <Typography gutterBottom variant="body2" >
                                    {props.title}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    {props.code}
                                </Typography>
                            </Grid>
                            <Grid item xs={6} sx={{ textAlign: 'right' }} >
                                <Typography gutterBottom variant="caption" color="text.secondary">
                                    Price
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {props.price}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Grid container>
                        <Grid item xs={6} sx={{ textAlign: 'left' }}>
                            <Button size="small" color="primary">
                                Buy Now
                            </Button>
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'right' }}>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
        </div>
    );
};

export default CardItem;

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


