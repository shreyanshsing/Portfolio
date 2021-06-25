import React from "react";
import {Container,Grid,makeStyles, Typography} from "@material-ui/core";
import {Card2} from "../main/card/Card";
import Img from "../resume/Main.png";

const style = makeStyles((theme)=>({
    root:{
        position:'relative',
        backgroundImage:`url(${Img})`,
        backgroundPostition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        minWidth:'100vw',
        minHeight:'100vh',
        paddingTop:"10%",
        paddingLeft:"10%",
        marginBottom:'0.5rem',
        color:'whitesmoke',
        fontFamily: "'Montserrat', sans-serif",
        transition:'0.5s'
    },
}))


const Services = () => {
    const classes = style();

    return(
        <Container maxWidth="xl" className={classes.root}>
            <Grid container spacing={4}>
                <Grid item sm={12}>
                    <Typography variant="h4" gutterBottom><u>Services</u></Typography>
                </Grid>
                <Grid item sm={10}>
                    <Typography variant="body1" gutterBottom>
                        Posters, business card, visiting card, flyers, presentation, Video introduction, social media posts anything that you need in design, I can give life to it.
                    </Typography>
                </Grid>
                <Grid item sm={12}style={{textAlign:'center'}}>
                    <Typography variant="h4" gutterBottom>Hurry Up! schedule a meeting and get it done ASAP.</Typography>
                </Grid>
                <Grid item sm={3}>
                </Grid>
                <Grid item sm={6}>
                    <Card2/>
                </Grid>
                <Grid item sm={3}>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Services;
