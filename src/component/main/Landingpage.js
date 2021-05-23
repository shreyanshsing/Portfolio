import React from "react";
import {Grid,makeStyles, Typography,Divider} from "@material-ui/core";

const style = makeStyles((theme)=>({
    root:{
        width:'100%',
        height:'100vh',
        paddingTop:"10%",
        paddingLeft:"10%",
        color:"#333333",
        fontFamily: "'Montserrat', sans-serif",
        alignItem:'center',
        transition:'0.5s'
    },
    divider:{
        marginLeft:'0%',
        margin:'2%',
        color:'whitesmoke',
        background:'whitesmoke'
    },
    content:{
        paddingLeft:'10%',
        paddingTop:'3%'
    }
}))

const LandingPage = () => {
    const classes = style();
    return(
        <Grid container spacing={4} className={classes.root}>
            <Grid item sm={7}>
                <Typography variant="h3" gutterBottom><small>Hi ! I'm</small><br/> <b>Shreyansh Singh</b> , </Typography>
                <Divider light classes={{light:classes.divider}}/>
                <Typography variant="h6" className={classes.content} gutterBottom>a web developer and designer , working as a freelancer.</Typography>
            </Grid>
        </Grid>
    )
}

export default LandingPage;
