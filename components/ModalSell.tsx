import React, { useState, useEffect } from 'react';
import { useMoralis, useERC20Balances, useChain } from "react-moralis";
import { getEllipsisTxt } from 'helper/formatters';
import { Avatar, Button, Grid, List, ListItem, ListItemAvatar, ListItemText, TextField, Typography } from '@mui/material';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import { styled, Box } from '@mui/system';
import { useStores } from 'stores/mobxStores';

const ModalSell = (props) => {
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
                    Sell Item
                </div>
                <Grid container>
                    <Grid textAlign={"center"} item lg={6} xs={6}>
                        <List sx={{ bgcolor: 'background.paper' }}>
                            <ListItem alignItems="center">
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
                </Grid>
                <Grid container spacing={2}>
                    <Grid textAlign={"center"} item lg={12} xs={12}>
                        <TextField size='small' label="Sell Price" variant="outlined" />
                    </Grid>
                </Grid>
                <div style={{ marginTop: 5, padding: "10px", textAlign: "center" }}>
                    <Button sx={{ marginBottom: 2 }} variant='outlined' >
                        Sell Now
                    </Button>
                </div>
            </Box>
        </StyledModal>
    );
};

export default ModalSell;



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
