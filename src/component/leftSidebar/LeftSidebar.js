import React,{useState,useEffect} from "react";
import {Container,List,ListItem,Typography,makeStyles,ListItemIcon,ListItemText,Avatar,IconButton} from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import Img from "./profile.png";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import InsertDriveFileRoundedIcon from '@material-ui/icons/InsertDriveFileRounded';
import WorkRoundedIcon from '@material-ui/icons/WorkRounded';
import DnsRoundedIcon from '@material-ui/icons/DnsRounded';
import MailRoundedIcon from '@material-ui/icons/MailRounded';
import CustomListItem from "../../reusable/ListItem";
import CopyrightRoundedIcon from '@material-ui/icons/CopyrightRounded';

const style = makeStyles((theme)=>({
    root:{
        borderRight:"1.5px solid lightgrey",
        background:"rgba(255,255,255,0.1)",
        marginTop:"0%",
        padding:"2%",
        '[(max-width:600px)]':{
            marginTop:"0%"
        }
    },
    head:{
        flexGrow:1,
        paddingTop:'2%',
        justifyContent:'center',
        alignItems:'center',
        color:'#333333',
    },
    large:{
        width:theme.spacing(13),
        height:theme.spacing(13),
        border:'5px solid lightgrey'
    }
}))

const LeftSideBar = () =>{

    const classes = style();
    const [selected, setSelected] = useState("/");

    useEffect(() => {
        const url = window.location.hash;
        console.log(url)
        if (url === "#home") {
          setSelected("home");
        }
        if (url === "#about") {
          setSelected("about");
        }
        if (url === "#services") {
          setSelected("services");
        }
        if (url === "#resume") {
          setSelected("resume");
        }
        if (url === "#work") {
          setSelected("work");
        }
        if (url === "#contact") {
          setSelected("contact");
        }
      }, [selected]);

    const handleLinkedIn = () => {
        window.location.assign("https://www.linkedin.com/in/shreyansh-singh-549a601a5/");
    }

    return(
        <Container maxWidth="xl" className={classes.root}>
            <List>
                <ListItem className={classes.head}>
                    <Avatar src={Img} alt="Profile" className={classes.large}/><br/>
                </ListItem>
                <ListItem style={{color:'#333333',justifyContent:'center'}}>
                    <Typography variant="h5" component="h5" gutterBottom>Shreyansh Singh</Typography>
                </ListItem>
                <ListItem style={{justifyContent:'center'}}>
                    <IconButton onClick={handleLinkedIn}>
                        <LinkedInIcon style={{color:"#0066cc"}}/>
                    </IconButton>
                    <IconButton>
                        <TwitterIcon style={{color:"#00ffff"}}/>
                    </IconButton>
                    <IconButton>
                        <FacebookIcon style={{color:"#4267B2"}}/>
                    </IconButton>
                    <IconButton>
                        <InstagramIcon style={{color:"#8a3ab9"}}/>
                    </IconButton>
                    <IconButton>
                        <GitHubIcon style={{color:"black"}}/>
                    </IconButton>
                </ListItem>
                <CustomListItem button component="a" href="#home" selected={selected === "home" ? true : false} onClick={()=>setSelected("home")}>
                    <ListItemIcon>
                        <HomeRoundedIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Home"/>
                </CustomListItem>
                <CustomListItem button component="a" href="#about" selected={selected === "about" ? true : false} onClick={()=>setSelected("about")}>
                    <ListItemIcon>
                        <PersonRoundedIcon/>
                    </ListItemIcon>
                    <ListItemText primary="About"/>
                </CustomListItem>
                <CustomListItem button component="a" href="#resume" selected={selected === "resume" ? true : false} onClick={()=>setSelected("resume")}>
                    <ListItemIcon>
                        <InsertDriveFileRoundedIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Resume"/>
                </CustomListItem>
                <CustomListItem button component="a" href="#work" selected={selected === "work" ? true : false} onClick={()=>setSelected("work")}>
                    <ListItemIcon>
                        <WorkRoundedIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Work"/>
                </CustomListItem>
                <CustomListItem button component="a" href="#services" selected={selected === "services" ? true : false} onClick={()=>setSelected("services")}>
                    <ListItemIcon>
                        <DnsRoundedIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Services"/>
                </CustomListItem>
                <CustomListItem component="a" href="#contact" selected={selected === "contact" ? true : false} button onClick={()=>setSelected("contact")}>
                    <ListItemIcon>
                        <MailRoundedIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Contact"/>
                </CustomListItem>
                <ListItem style={{marginTop:'30%',justifyContent:'center'}}>
                    <CopyrightRoundedIcon/>
                    <Typography variant="body2" gutterBottom>
                        All copyrights are resevered.  
                    </Typography>
                </ListItem>
                <ListItem style={{justifyContent:'center'}}>
                    <Typography variant="caption" gutterBottom>
                        Designed by Shreyansh Singh
                    </Typography>
                </ListItem>
            </List>
        </Container>
    )
}

export default LeftSideBar;