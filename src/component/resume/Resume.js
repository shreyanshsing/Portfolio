import React from "react";
import {Grid,makeStyles, Typography, Button, IconButton} from "@material-ui/core";
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';
import LinkRoundedIcon from '@material-ui/icons/LinkRounded';

const style = makeStyles((theme)=>({
    root:{
        width:"100%",
        background:'white',
        padding:"5%",
        paddingTop:"7%",
        color:"#333333",
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
        <Grid container spacing={4} className={classes.root}>
            <Grid item sm={12}>
                <Typography variant="h4" style={{color:'#002C83'}} gutterBottom><u>Resume</u></Typography>
            </Grid>
            <Grid item sm={12}>
                <Typography variant="body1" gutterBottom>Well if you are considering for hiring here is my resume. I am pretty sure you will be calling me after seeing my resume.</Typography>
            </Grid>
            <Grid item sm={12} style={{textAlign:'center'}}>
                <Button type="link" variant="contained" color="primary" href={process.env.PUBLIC_URL+"/SHREYANSH_SINGH_resume.pdf"} download><GetAppRoundedIcon/>Download</Button> 
            </Grid>
            <Grid item sm={12}>
                <Typography variant="h5" style={{color:'#002C83'}} gutterBottom>Work Experience</Typography>
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
    )
}

export default Resume;
