import type { NextPage } from 'next'
// import { Layout, Modal, message, Col, Card, Row, Typography, Button } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { useState, useLayoutEffect } from 'react';

import HeaderPanel from 'components/HeaderPanel';
import { Button, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Paper, Typography } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useStores } from 'stores/mobxStores';

const Detail = observer(() => {
    const { detailStore } = useStores();

    return (
        <div >
            <main >
                <HeaderPanel />
                {detailStore.item &&
                    <>
                        <Container style={{ minHeight: '100vh', marginTop: 100 }}>
                            <Grid container marginBottom={0} >
                                <Grid item lg={6} xs={12} >
                                    <CardMedia sx={{ maxWidth: 500 }}
                                        component="img"
                                        image={detailStore.item.imgUrl}
                                        alt="green iguana" />
                                </Grid>
                                <Grid item lg={6} xs={12} sx={{ paddingTop: 2 }}>
                                    <Card >
                                        <CardContent>
                                            <Typography variant="h5" >
                                                <b>{detailStore.item.title}</b>
                                            </Typography>
                                            <Typography variant="body1" >
                                                {detailStore.item.code}
                                            </Typography>
                                            <br />
                                            <Typography variant="caption" >
                                                ETHEREALS are 12,345 hand drawn, randomly generated, interdimensional ghosts. Their traits are pulled from all reaches of the metaverse and include surprising mashups of cultural references all the way down to super-insider rarities. They are eternal beings that travel through time and space in search of FUN! For more details about the ETHEREALS story visit ethereals.wtf and check out our Discord! Jimmy Danko is the artist behind each of these interdimensional ghosts, and is an active player in the NFT community. He painstakingly draws all the ETHEREALS by hand and then digitizes them. He is the creator behind Mayhem Island Bananas, and is known for his hyper-realistic oil paintings of toys and pop culture icons - his work is featured in private collections all over the world.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    <Card sx={{ marginTop: 3 }}>
                                        <CardContent>
                                            <Typography variant="caption" >
                                                Current Price
                                            </Typography>
                                            <Typography variant="h5" >
                                                <b>{detailStore.item.price}</b>
                                            </Typography>
                                            <Button sx={{ marginTop: 2, width: 150 }} variant="contained"><AttachMoneyIcon /> Buy Now</Button>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Container>
                    </>
                }
            </main>
        </div>

    )
});

export default Detail;

