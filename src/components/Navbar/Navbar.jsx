import React from 'react';
import { AppBar, Toolbar, IconButton, Badge,  Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import logo from './../../assets/reiley_logo.png';
import useStyles from './styles';
const Navbar = () => {
    const classes = useStyles();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="reiley.js" height="25px" className={classes.image}/>
                        reiley.js
                    </Typography>
                    <div className = {classes.grow}/>
                    <div className = {classes.button}>
                        <IconButton aria-label="show cart items" color= "inherit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
