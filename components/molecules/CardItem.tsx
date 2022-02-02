import React, { useState, useLayoutEffect } from 'react';
// import { Modal, Layout, Dropdown, Button } from 'antd';
import { useRouter } from 'next/router';
// import Text from "antd/lib/typography/Text";
import { useMoralis } from 'react-moralis';
import { connectors } from 'components/config';
import MoralisType from "moralis";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { useStores } from 'stores/mobxStores';




const CardItem = (props) => {
    const router = useRouter();
    const { detailStore } = useStores();


    const handleToDetail = () => {
        detailStore.setItem({
            title: props.title,
            code: props.code,
            price: props.price,
            imgUrl: props.imgUrl
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

