import React from "react";
import {Grid,makeStyles, Typography,Box,Button,Avatar,Hidden} from "@material-ui/core";
import Mob from './data/Mobile.png';
import Img from './data/hugo-208.png';
import profile from "./data/profile.jpg";

const style = makeStyles((theme)=>({
    root:{
        position:'relative',
        backgroundImage:`linear-gradient(to right,rgba(0,0,0,1),rgba(0,0,0,1))`,
        backgroundPostition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        minWidth:'100vw',
        minHeight:'100vh',
        paddingTop:"5%",
        paddingLeft:"5%",
        marginBottom:'0.5rem',
        color:'whitesmoke',
        fontFamily: "'Montserrat', sans-serif",
        transition:'0.5s',
        [theme.breakpoints.down('md')]:{
            backgroundImage:`url(${Mob})`,
            paddingTop:"15%",
            paddingLeft:"5%",
        }
    },
    divider:{
        marginLeft:'0%',
        margin:'2%',
        color:'whitesmoke',
        background:'whitesmoke'
    },
    content:{
        paddingLeft:'10%',
        paddingTop:'1%'
    },
    img:{
        display:'flex',
        position:'relative',
        backgroundImage:`url(${Img})`,
        backgroundPostition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        textAlign:'center',
        alignItems:'center'   
    },
    profile:{
        width:theme.spacing(20),
        height:theme.spacing(20),
        [theme.breakpoints.down('md')]:{
            width:theme.spacing(15),
            height:theme.spacing(15),
        }
    },
    btn:{
        margin:'2rem',
        padding:'2rem',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around'
    }
}))

const LandingPage = () => {
    const classes = style();
    const [string,setString] = React.useState('');
    const [count,setCount] = React.useState(0);

    React.useEffect(()=>{
        window.setTimeout(()=>{
            const data = ['designer','developer','freelancer'];
            setString(data[count]);
            setCount(count === data.length-1 ? 0 : count+1);
        },'1500');
    },[string,count])

    return(
        <Grid container spacing={4} className={classes.root}>
            <Grid item xs={12} sm={6}>
                <Avatar src={profile} alt="Profile" className={classes.profile}/>
                <Typography variant="h3" gutterBottom><small>Hi ! I'm</small><br/> <b><u>Shreyansh Singh</u></b> , </Typography>
                <Typography variant="h6" className={classes.content} gutterBottom>( a web <u style={{color:'cyan'}}>{string}</u>. )</Typography>
                <Box className={classes.btn}>
                    <Button variant="contained" type="button" color="primary">Book Free Demo</Button>
                </Box>

            </Grid>
            <Hidden only={['xs','sm','md']}>
                <Grid item sm={5} className={classes.img}>
                    <Typography variant="h4" gutterBottom>
                        <b>Full complete websites, Cards, Posters, Resume, Certificate Design, Social Media posts or videos, flyer or kind of infographic design.</b>
                        <br/>
                        <small>I can make for you.</small>
                    </Typography>
                </Grid>
            </Hidden>
            <Grid item sm={1}></Grid>
        </Grid>
    )
}

export default LandingPage;
