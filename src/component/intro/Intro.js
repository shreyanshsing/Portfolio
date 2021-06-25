import React from "react";
import {Container,makeStyles,Grid, Typography,Box,Card,CardContent, LinearProgress,Divider} from "@material-ui/core";
import {ReactComponent as Svg} from "./employee.svg";
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';
import Img from "./Main.png";

function LinearProgressWithLabel(props) {
    return (
      <Box display="flex" alignItems="center">
        <Box width="100%" mr={1}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box minWidth={35}>
          <Typography variant="body2" >{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }


const style = makeStyles((theme)=>({
    root:{
        width:"100%",
        height:'100%',
        backgroundImage:`url(${Img})`,
        backgroundPostition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        padding:"5%",
        color:'white',
        marginBottom:'0.5rem'
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
    divider: {
        // Theme Color, or use css color in quote
        background: "whitesmoke",
        padding:'2px'
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
                <Grid item xs={12} sm={4}>
                    <Typography variant="h4" gutterBottom>
                        <b> Meet Shreyansh</b>
                    </Typography>
                    <Divider light classes={{light:classes.divider}}/>
                </Grid>
                <Grid item sm={8}></Grid>
                <Grid item sm={1}></Grid>
                <Grid item xs={12} sm={8}>
                    <Typography variant="body1" gutterBottom>
                        Professional and eager to share his expertise, Shreyansh is a Software Engineer graduate with a wide range of software development skills under his belt.
                    </Typography>
                </Grid>
                <Grid item sm={3}></Grid>
                <Grid item xs={12} sm={2}>
                    <Typography variant="h4" gutterBottom>About</Typography>
                    <Divider light classes={{light:classes.divider}}/>
                </Grid>
                <Grid item sm={10}></Grid>
                <Grid item sm={1}></Grid>
                <Grid item xs={12} sm={8}>
                    <Typography variant="body1" gutterBottom>
                        I am a professional web developer and a learning UI/UX designer. Currently I am freelancing but open to every opprtunitiy for permanent source of employment.
                        Blockchain enthusiast.<br/> New potato in snooker(&#x1f92a;&#x1f92a;), Animal Worshiper, Green Panther.
                    </Typography>
                </Grid>
                <Grid item sm={3}></Grid>
                <Grid item xs={12} sm={3}>
                    <Card raised>
                        <CardContent style={{justifyContent:'center'}}>
                            <Svg width={200} height={200}/>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <Typography variant="h5" gutterBottom>UI/UX Designer & Web Developer.</Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body2" gutterBottom>
                                <ChevronRightRoundedIcon style={{verticalAlign:'middle',color:'#00ccff'}}/>
                                <b>Birthdate</b> - 11/01/2001
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body2" gutterBottom>
                                <ChevronRightRoundedIcon style={{verticalAlign:'middle',color:'#00ccff'}}/>
                                <b>Age</b> - 21
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body2" gutterBottom>
                                <ChevronRightRoundedIcon style={{verticalAlign:'middle',color:'#00ccff'}}/>
                                <b>Phone</b> - 91-63888-37120
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body2" gutterBottom>
                                <ChevronRightRoundedIcon style={{verticalAlign:'middle',color:'#00ccff'}}/>
                                <b>Qualification</b> - Bachelor of Technology(persuing)
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body2" gutterBottom>
                                <ChevronRightRoundedIcon style={{verticalAlign:'middle',color:'#00ccff'}}/>
                                <b>Email</b> - shreyanshsinghjee@gmail.com
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body2" gutterBottom>
                                <ChevronRightRoundedIcon style={{verticalAlign:'middle',color:'#00ccff'}}/>
                                <b>Freelance</b> - Availabel
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} style={{background:'rgba(255,255,255,0.1)'}}>
                    <Typography variant="h5" gutterBottom>Skills</Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body1" gutterBottom>HTML</Typography>
                            <LinearProgressWithLabel className={classes.progress} classes={{barColorPrimary:classes.color}} value={100}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body1" gutterBottom>CSS</Typography>
                            <LinearProgressWithLabel className={classes.progress} classes={{barColorPrimary:classes.color}} value={75}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body1" gutterBottom>JavaScript</Typography>
                            <LinearProgressWithLabel className={classes.progress} classes={{barColorPrimary:classes.color}} value={70}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body1" gutterBottom>jQuery</Typography>
                            <LinearProgressWithLabel className={classes.progress} classes={{barColorPrimary:classes.color}} value={70}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="body1" gutterBottom>ReactJs</Typography>
                            <LinearProgressWithLabel className={classes.progress} classes={{barColorPrimary:classes.color}} value={90}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
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