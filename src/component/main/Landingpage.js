import React from "react";
import {Container,Grid,makeStyles, Typography,Divider, List,ListItemIcon,ListItemText,IconButton,Button,Hidden,Box} from "@material-ui/core";
import "./LandingPage.css";
import { Card1, Card2 } from "./card/Card";
import CustomListItem from "../../reusable/ListItem";
import LocalMallIcon from '@material-ui/icons/LocalMall';
import WebIcon from '@material-ui/icons/Web';
import StorefrontIcon from '@material-ui/icons/Storefront';
import GetAppIcon from '@material-ui/icons/GetApp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import RightSide from "../rightSidebar/RightSidebar";

const style = makeStyles((theme)=>({
    root:{
        paddingTop:"5%",
        padding:"3%",
        color:"#E7E0C3",
        fontFamily: "'Montserrat', sans-serif",
    },
    box:{
        width:'10%',
        position:'fixed',
        right:'0px',
        top:'10%'
    },
    divider:{
        marginLeft:'0%',
        margin:'2%',
        color:'whitesmoke',
        background:'whitesmoke'
    }
}))

const LandingPage = () => {
    const classes = style();
    return(
        <Container maxWidth="xl" className="hero-image">
            <Hidden only={['xs','sm','md']}>
                <Box className={classes.box}>
                    <RightSide/>
                </Box>
            </Hidden>
            <Grid container spacing={4} className={classes.root}>
                <Grid item sm={6}>
                    <Typography variant="h3" gutterBottom>Hi ! I'm Shreyansh Singh , </Typography>
                    <Divider light classes={{light:classes.divider}}/>
                    <Typography variant="h6" gutterBottom>a front-end web developer , working as a freelancer and actively looking for permanent source of employment.</Typography>
                </Grid>
                <Grid item sm={12} style={{textAlign:'center'}}>
                    <Typography variant="h4" gutterBottom>Need a website ?</Typography>
                    <Typography variant="body1" gutterBottom>for</Typography>
                </Grid>
                <Grid item sm={12}>
                    <Grid container spacing={4}>
                        <Grid item sm={1}></Grid>
                        <Grid item sm={5}>
                            <Card1/>
                        </Grid>
                        <Grid item sm={5}>
                            <Card2/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={12}>
                    <Typography variant="h5" gutterBottom>
                        See my work
                    </Typography>
                    <List>
                        <CustomListItem divider button>
                            <ListItemIcon>
                                <LocalMallIcon style={{fill:'whitesmoke'}}/>
                            </ListItemIcon>
                            <ListItemText>
                                Commerce App
                            </ListItemText>
                        </CustomListItem>
                        <CustomListItem divider button>
                            <ListItemIcon>
                                <WebIcon style={{fill:'whitesmoke'}}/>
                            </ListItemIcon>
                            <ListItemText>
                                Blogging Site
                            </ListItemText>
                        </CustomListItem>
                        <CustomListItem divider button>
                            <ListItemIcon>
                                <StorefrontIcon style={{fill:'whitesmoke'}}/>
                            </ListItemIcon>
                            <ListItemText>
                                Blockchain Dapp
                            </ListItemText>
                        </CustomListItem>
                    </List>
                </Grid>
                <Grid item sm={12} style={{textAlign:'center'}}>
                    <Divider light classes={{light:classes.divider}}/>
                    <Typography variant="h4" gutterBottom>Considering for hiring!</Typography>
                    <Typography variant="body1" style={{padding:'1rem'}} gutterBottom>well here is my resume</Typography>
                    <a href="/" download="Resume-shreyansh-singh.pdf">
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<GetAppIcon/>}
                        >
                            Download
                        </Button>
                    </a>
                    <Typography variant="body1" style={{padding:'1rem'}} gutterBottom>
                        Other Profile's
                    </Typography>
                    <a href="https://www.linkedin.com/in/shreyansh-singh-549a601a5" rel="noreferrer" target="_blank">
                        <IconButton>
                            <LinkedInIcon style={{fill:'#0e76a8'}} fontSize="large"/>
                        </IconButton>
                    </a>
                    <a href="https://github.com/shreyanshsing" rel="noreferrer" target="_blank">
                        <IconButton>
                            <GitHubIcon style={{fill:'white'}} fontSize="large"/>
                        </IconButton>
                    </a>
                    <Divider light classes={{light:classes.divider}}/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default LandingPage;
