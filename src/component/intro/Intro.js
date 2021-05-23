import React from "react";
import {Container,makeStyles,Grid, Typography,Box,Card,CardContent, LinearProgress} from "@material-ui/core";
import {ReactComponent as Svg} from "./employee.svg";
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';

function LinearProgressWithLabel(props) {
    return (
      <Box display="flex" alignItems="center">
        <Box width="100%" mr={1}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box minWidth={35}>
          <Typography variant="body2" color="textSecondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }


const style = makeStyles((theme)=>({
    root:{
        width:"100%",
        background:'white',
        padding:"5%",
        paddingTop:"7%",
        color:"#333333",
    },
    color:{
        color:'#00ccff'
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
    divider: {
        // Theme Color, or use css color in quote
        background: "whitesmoke",
    },
    progress:{
        padding:'5px'
    }
}))

const Intro = () => {
    const classes = style();

    return(
        <Container maxWidth="xl"  className={classes.root}>
            <Grid container spacing={4} >
                <Grid item sm={12}>
                    <Typography variant="h4" style={{color:'#002C83'}} gutterBottom><u>About</u></Typography>
                </Grid>
                <Grid item sm={10}>
                    <Typography variant="body1" style={{color:"#333333",}} gutterBottom>
                        Hello! everyone out there myself Shreyansh Singh, I am a professional web developer and a learning UI/UX designer. Currently I am freelancing but open to every opprtunitiy for permanent source of employment.
                        Blockchain enthusiast.<br/> New potato in snooker(&#x1f92a;&#x1f92a;), Animal Worshiper, Green Panther.
                    </Typography>
                </Grid>
                <Grid item sm={3}>
                    <Card raised>
                        <CardContent style={{justifyContent:'center'}}>
                            <Svg width={200} height={200}/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={9}>
                    <Typography variant="h5" style={{color:'#002C83'}} gutterBottom>UI/UX Designer & Web Developer.</Typography>
                    <Grid container spacing={3}>
                        <Grid item sm={6}>
                            <Typography variant="body2" gutterBottom>
                                <ChevronRightRoundedIcon style={{verticalAlign:'middle',color:'#00ccff'}}/>
                                <b>Birthdate</b> - 11/01/2001
                            </Typography>
                        </Grid>
                        <Grid item sm={6}>
                            <Typography variant="body2" gutterBottom>
                                <ChevronRightRoundedIcon style={{verticalAlign:'middle',color:'#00ccff'}}/>
                                <b>Age</b> - 21
                            </Typography>
                        </Grid>
                        <Grid item sm={6}>
                            <Typography variant="body2" gutterBottom>
                                <ChevronRightRoundedIcon style={{verticalAlign:'middle',color:'#00ccff'}}/>
                                <b>Phone</b> - 91-63888-37120
                            </Typography>
                        </Grid>
                        <Grid item sm={6}>
                            <Typography variant="body2" gutterBottom>
                                <ChevronRightRoundedIcon style={{verticalAlign:'middle',color:'#00ccff'}}/>
                                <b>Qualification</b> - Bachelor of Technology(persuing)
                            </Typography>
                        </Grid>
                        <Grid item sm={6}>
                            <Typography variant="body2" gutterBottom>
                                <ChevronRightRoundedIcon style={{verticalAlign:'middle',color:'#00ccff'}}/>
                                <b>Email</b> - shreyanshsinghjee@gmail.com
                            </Typography>
                        </Grid>
                        <Grid item sm={6}>
                            <Typography variant="body2" gutterBottom>
                                <ChevronRightRoundedIcon style={{verticalAlign:'middle',color:'#00ccff'}}/>
                                <b>Freelance</b> - Availabel
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={12} style={{background:'#f0f5f5'}}>
                    <Typography variant="h5" style={{color:'#002C83'}} gutterBottom>Skills</Typography>
                    <Grid container spacing={3}>
                        <Grid item sm={6}>
                            <Typography variant="body1" gutterBottom>HTML</Typography>
                            <LinearProgressWithLabel className={classes.progress} classes={{barColorPrimary:classes.color}} value={100}/>
                        </Grid>
                        <Grid item sm={6}>
                            <Typography variant="body1" gutterBottom>CSS</Typography>
                            <LinearProgressWithLabel className={classes.progress} classes={{barColorPrimary:classes.color}} value={75}/>
                        </Grid>
                        <Grid item sm={6}>
                            <Typography variant="body1" gutterBottom>JavaScript</Typography>
                            <LinearProgressWithLabel className={classes.progress} classes={{barColorPrimary:classes.color}} value={70}/>
                        </Grid>
                        <Grid item sm={6}>
                            <Typography variant="body1" gutterBottom>jQuery</Typography>
                            <LinearProgressWithLabel className={classes.progress} classes={{barColorPrimary:classes.color}} value={70}/>
                        </Grid>
                        <Grid item sm={6}>
                            <Typography variant="body1" gutterBottom>ReactJs</Typography>
                            <LinearProgressWithLabel className={classes.progress} classes={{barColorPrimary:classes.color}} value={90}/>
                        </Grid>
                        <Grid item sm={6}>
                            <Typography variant="body1" gutterBottom>Blockchain</Typography>
                            <LinearProgressWithLabel className={classes.progress} classes={{barColorPrimary:classes.color}} value={60}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Intro;