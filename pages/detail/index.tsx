import type { NextPage } from 'next'
// import { Layout, Modal, message, Col, Card, Row, Typography, Button } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { useState, useLayoutEffect } from 'react';

import HeaderPanel from 'components/HeaderPanel';
import { Accordion, AccordionDetails, AccordionSummary, Button, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { useStores } from 'stores/mobxStores';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ModalCheckout from 'components/ModalCheckout';


const Detail = observer(() => {
    const { detailStore } = useStores();
    const [isAuthModalVisible, setIsAuthModalVisible] = useState<boolean>(false);

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
                                            <Grid container marginBottom={0} >

                                                <Grid item lg={6} xs={12} >

                                                    <Typography variant="h5" >
                                                        <b>{detailStore.item.title}</b>
                                                    </Typography>
                                                    <Typography variant="body1" >
                                                        {detailStore.item.code}
                                                    </Typography>
                                                    <small>Owned By : <a style={{ color: '#1565c0' }} href='#'>x0123456789</a></small>
                                                    <br />
                                                    <br />
                                                </Grid>

                                                <Grid item lg={6} xs={12} >
                                                    {detailStore.item.myOwn ?
                                                        <>
                                                            <Button onClick={() => setIsAuthModalVisible(true)} sx={{ marginTop: 1, width: 150 }} variant="outlined"><AttachMoneyIcon /> Sell Item</Button>

                                                        </> :
                                                        <>
                                                            <Typography variant="caption" >
                                                                Current Price
                                                            </Typography>
                                                            <Typography variant="h5" >
                                                                <b>{detailStore.item.price}</b>
                                                            </Typography>
                                                            <Button onClick={() => setIsAuthModalVisible(true)} sx={{ marginTop: 1, width: 150 }} variant="contained"><AttachMoneyIcon /> Buy Now</Button>
                                                        </>}
                                                </Grid >
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                    <Accordion defaultExpanded sx={{ marginTop: 3 }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography variant="body1"><b>Description</b></Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography variant="caption" >
                                                ETHEREALS are 12,345 hand drawn, randomly generated, interdimensional ghosts. Their traits are pulled from all reaches of the metaverse and include surprising mashups of cultural references all the way down to super-insider rarities. They are eternal beings that travel through time and space in search of FUN! For more details about the ETHEREALS story visit ethereals.wtf and check out our Discord! Jimmy Danko is the artist behind each of these interdimensional ghosts, and is an active player in the NFT community. He painstakingly draws all the ETHEREALS by hand and then digitizes them. He is the creator behind Mayhem Island Bananas, and is known for his hyper-realistic oil paintings of toys and pop culture icons - his work is featured in private collections all over the world.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion sx={{ marginTop: 3 }}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <Typography variant="body1"><b>Details</b></Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography variant="caption" >
                                                <Typography variant="body1" >
                                                    <TableContainer >
                                                        <Table aria-label="simple table" >
                                                            <TableBody>
                                                                <TableRow
                                                                    key={1}
                                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                                >
                                                                    <TableCell component="th" scope="row">
                                                                        Contract Address
                                                                    </TableCell>
                                                                    <TableCell align="right">x012345689</TableCell>
                                                                </TableRow>
                                                                <TableRow
                                                                    key={2}
                                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                                >
                                                                    <TableCell component="th" scope="row">
                                                                        Token ID
                                                                    </TableCell>
                                                                    <TableCell align="right">3806073745481169</TableCell>
                                                                </TableRow>
                                                                <TableRow
                                                                    key={3}
                                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                                >
                                                                    <TableCell component="th" scope="row">
                                                                        Token Standard
                                                                    </TableCell>
                                                                    <TableCell align="right">ERC-721
                                                                    </TableCell>
                                                                </TableRow>
                                                                <TableRow
                                                                    key={4}
                                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                                >
                                                                    <TableCell component="th" scope="row">
                                                                        Blockchain
                                                                    </TableCell>
                                                                    <TableCell align="right">Ethereum
                                                                    </TableCell>
                                                                </TableRow>
                                                                <TableRow
                                                                    key={5}
                                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                                >
                                                                    <TableCell component="th" scope="row">
                                                                        Metadata
                                                                    </TableCell>
                                                                    <TableCell align="right">Centralized
                                                                    </TableCell>
                                                                </TableRow>
                                                            </TableBody>
                                                        </Table>
                                                    </TableContainer>
                                                </Typography>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </Grid>
                            </Grid>
                            <Accordion defaultExpanded sx={{ marginTop: 3 }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography variant="body1"><b>Activity</b></Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <TableContainer >
                                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Event</TableCell>
                                                    <TableCell align="right">Unit Price</TableCell>
                                                    <TableCell align="right">Quantity</TableCell>
                                                    <TableCell align="right">From</TableCell>
                                                    <TableCell align="right">To</TableCell>
                                                    <TableCell align="right">Date</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow
                                                    key={10}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        Mint
                                                    </TableCell>
                                                    <TableCell align="right">0.1</TableCell>
                                                    <TableCell align="right">1</TableCell>
                                                    <TableCell align="right">12345</TableCell>
                                                    <TableCell align="right">123456</TableCell>
                                                    <TableCell align="right">2 days ago</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </AccordionDetails>
                            </Accordion>
                        </Container>
                        <ModalCheckout data={detailStore.item} open={isAuthModalVisible} setOpen={() => setIsAuthModalVisible(false)} />

                    </>
                }


            </main>
        </div>

    )
});

export default Detail;

