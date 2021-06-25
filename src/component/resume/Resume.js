import React from "react";
import {Container,Grid,makeStyles, Typography, Button, IconButton} from "@material-ui/core";
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';
import LinkRoundedIcon from '@material-ui/icons/LinkRounded';
import Img from "./Main.png";

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

const Resume = () => {
    const classes = style();

    const handlePdf1 = () => {
        window.location.assign("https://internshala.com/student/certificate/52938672/9E1965B4-AF3C-F5B3-476C-144458A24183");
    }

    const handlePdf2 = () => {
        window.location.assign("https://internshala.com/student/certificate/54058547/1BC2600B-43A2-2367-4D67-796BEFEEB8EB");
    }

    return(
        <Container maxWidth="xl" className={classes.root}>
            <Grid container spacing={4}>
                <Grid item sm={12}>
                    <Typography variant="h4" gutterBottom><u>Resume</u></Typography>
                </Grid>
                <Grid item sm={12}>
                    <Typography variant="body1" gutterBottom>Well if you are considering for hiring here is my resume. I am pretty sure you will be calling me after seeing my resume.</Typography>
                </Grid>
                <Grid item sm={12}>
                    <Button type="link" variant="contained" color="primary" href={process.env.PUBLIC_URL+"/SHREYANSH SINGH.pdf"} download><GetAppRoundedIcon/>Download</Button> 
                </Grid>
                <Grid item sm={12}>
                    <Typography variant="h5" gutterBottom>Work Experience</Typography>
                    <Grid container spacing={3}>
                        <Grid item sm={6}>
                            <Typography variant="body1" gutterBottom>
                                <ChevronRightRoundedIcon style={{verticalAlign:'middle',color:'#00ccff'}}/>
                                <b>Internship</b> - Blazsoft
                                <IconButton onClick={handlePdf1}>
                                    <LinkRoundedIcon style={{verticalAlign:'middle',color:'#00ccff'}}/>
                                </IconButton>
                            </Typography>
                        </Grid>
                        <Grid item sm={6}>
                            <Typography variant="body1" gutterBottom>
                                <ChevronRightRoundedIcon style={{verticalAlign:'middle',color:'#00ccff'}}/>
                                <b>Internship</b> - Prixled
                                <IconButton onClick={handlePdf2}>
                                    <LinkRoundedIcon style={{verticalAlign:'middle',color:'#00ccff'}}/>
                                </IconButton>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Resume;
