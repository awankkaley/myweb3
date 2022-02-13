import React, { useState, useLayoutEffect } from 'react';
// import { Modal, Layout, Dropdown, Button } from 'antd';
import { useRouter } from 'next/router';
// import Text from "antd/lib/typography/Text";
import { useMoralis } from 'react-moralis';
import { connectors } from 'components/config';
import MoralisType from "moralis";
import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Dialog, Grid, Hidden, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { useStores } from 'stores/mobxStores';
import ModalCheckout from 'components/ModalCheckout';
import ModalSell from 'components/ModalSell';


const MyNftItem = (props) => {
    const router = useRouter();
    const { detailStore, modalStore } = useStores();
    const [isAuthModalVisible, setIsAuthModalVisible] = useState<boolean>(false);


    const handleToDetail = () => {
        detailStore.setItem({
            title: props.title,
            code: props.code,
            price: props.price,
            imgUrl: props.imgUrl,
            myOwn : true
        });
        router.push("/detail")

    }


    return (
        <div>
            <Card sx={{ maxWidth: 340 }}>
                <CardActionArea onClick={handleToDetail}>
                    <CardMedia
                        component="img"
                        image={props.imgUrl}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Grid container marginBottom={0}>
                            <Grid item xs={6} sx={{ textAlign: 'left' }}>
                                <Typography variant="body2" >
                                    {props.title}
                                </Typography>
                            </Grid>
                            <Grid item xs={6} sx={{ textAlign: 'right' }}>
                                <Typography variant="body2">
                                    {props.code}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Grid container>
                        <Grid item xs={12} sx={{ textAlign: 'center' }}>
                            <Hidden only={'xs'}>
                                <Button size="medium" onClick={() => setIsAuthModalVisible(true)} color="primary">
                                    Sell Item
                                </Button>
                            </Hidden>
                        </Grid>
                    </Grid>
                </CardActions>
            </Card>
            <ModalSell data={props} open={isAuthModalVisible} setOpen={() => setIsAuthModalVisible(false)} />
        </div>
    );
};

export default MyNftItem;

