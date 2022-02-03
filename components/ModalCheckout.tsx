import React, { useState, useEffect } from 'react';
import { useMoralis, useERC20Balances, useChain } from "react-moralis";
import { getEllipsisTxt } from 'helper/formatters';
import { Avatar, Button, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import { styled, Box } from '@mui/system';
import { useStores } from 'stores/mobxStores';

const ModalCheckout = (props) => {
    const { Moralis } = useMoralis();

    return (
        <StyledModal
            aria-labelledby="unstyled-modal-title"
            aria-describedby="unstyled-modal-description"
            open={props.open}
            onClose={props.setOpen}
            BackdropComponent={Backdrop}
        >
            <Box sx={style}>
                <div style={{ padding: "10px", textAlign: "center", fontWeight: "700", fontSize: "20px" }}>
                    Complete Checkout
                </div>
                <Grid container spacing={2}>
                    <Grid paddingLeft={4} textAlign={"left"} item lg={6} xs={6}>
                        <Typography variant="subtitle1"><b>Item</b></Typography>
                    </Grid>
                    <Grid textAlign={"right"} item lg={6} xs={6}>
                        <Typography variant="subtitle1"><b>Subtotal</b></Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid textAlign={"left"} item lg={6} xs={6}>
                        <List sx={{ bgcolor: 'background.paper' }}>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar variant='square' alt="Remy Sharp" src={props.data.imgUrl} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={props.data.title}
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                {props.data.code}
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid textAlign={"right"} item lg={6} xs={6}>
                        <List sx={{ textAlign: 'right', bgcolor: 'background.paper' }}>
                            <ListItem sx={{ textAlign: "right" }} >
                                <ListItemText
                                    primary={props.data.price}
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="caption"
                                                color="text.primary"
                                            >
                                                {/* (120 USD) */}
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>

                        </List>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid textAlign={"left"} item lg={6} xs={6}>
                        <Typography variant="subtitle1"><b>Total</b></Typography>
                    </Grid>
                    <Grid textAlign={"right"} item lg={6} xs={6}>
                        <Typography variant="subtitle1"><b>{props.data.price}</b></Typography>
                        <Typography variant="caption"><b></b></Typography>
                    </Grid>
                </Grid>
                <div style={{ padding: "10px", textAlign: "center" }}>
                    <Button sx={{ marginBottom: 3 }} variant='contained' >
                        Checkout
                    </Button>
                </div>
            </Box>
        </StyledModal>
    );
};

export default ModalCheckout;



const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    p: 2,
    px: 4,
    pb: 3,
};
