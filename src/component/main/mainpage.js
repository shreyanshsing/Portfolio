import React from 'react';
import {Container,makeStyles,Grid,Box} from '@material-ui/core';
import LeftSide from "../leftSidebar/LeftSidebar";
import RightSide from "../rightSidebar/RightSidebar";
import Intro from "../intro/Intro";

const style = makeStyles((theme)=>({
    root:{
        width:"100%",
        height:"100%",
        margin:"0%",
        marginRight:"0px",
        padding:"0%"
    }
}))

const Main = () => {

    const classes = style();

    return (
        <Container maxWidth="xl" className={classes.root}>
            <Box display={{ xs: 'none', sm: 'block' }}>
                <Grid container width="xl">
                    <Grid item sm={2}>
                        <LeftSide/>
                    </Grid>
                    <Grid item sm={9}>
                        <Intro/>
                    </Grid>
                    <Grid item sm={1}>
                    <RightSide/>
                    </Grid>
                </Grid>
            </Box>
            <Box display={{ xs: 'block', sm: 'none' }}>
                <Grid container width="xl">
                    <Grid item xs={9}>
                        <Intro/>
                        <LeftSide/>
                    </Grid>
                    <Grid item xs={3}>
                    <RightSide/>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Main;