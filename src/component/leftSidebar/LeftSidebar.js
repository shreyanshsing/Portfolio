import React from "react";
import {Container,List,ListItem,Typography,makeStyles,ListItemIcon,ListItemText,Divider} from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const style = makeStyles((theme)=>({
    root:{
        borderRight:"1.5px solid whitesmoke",
        background:"rgba(0,0,0)",
        color:"whitesmoke",
        marginTop:"30%",
        paddingLeft:"5%",
        paddingRight:"5%",
        padding:"10%",
        '[(max-width:600px)]':{
            marginTop:"0%"
        }
    },
    heading:{
        color:"#0099ff",
    }
}))

const LeftSide = () =>{

    const classes = style();

    const handleLinkedIn = () => {
        window.location.assign("https://www.linkedin.com/in/shreyansh-singh-549a601a5/");
    }

    return(
        <Container maxWidth="xl" className={classes.root}>
            <Typography variant="h5" gutterBottom className={classes.heading}>
                Educational Details
            </Typography>
            <List>
                <ListItem>
                    <Typography variant="body1" gutterBottom>1.  B.tech from KIET GROUP OF INSTITUTIONS with aggregate of 70%.</Typography> 
                </ListItem>
                <ListItem>
                    <Typography variant="body1" gutterBottom>2.  10+2 From SKD ACADEMY with 10CGPA and 82% respectively.</Typography> 
                </ListItem>
            </List>
            <Typography variant="h5" gutterBottom className={classes.heading}>
                Address 
            </Typography>
            <List>
                <ListItem>
                    <Typography variant="body1" gutterBottom>
                        29  P BLOCK YASHODA NAGAR , KANPUR , UTTAR PRADESH (208011).
                    </Typography>
                </ListItem>
                <Divider/>
                <ListItem button onClick={handleLinkedIn}>
                    <ListItemText primary="LinkedIn"/>
                    <ListItemIcon>
                        <LinkedInIcon fontSize="large" style={{color:"#0066cc"}}/>
                    </ListItemIcon>
                </ListItem>
                <Divider/>
                <ListItem button>
                    <ListItemText primary="Twitter"/>
                    <ListItemIcon>
                        <TwitterIcon fontSize="large" style={{color:"#00ffff"}}/>
                    </ListItemIcon>
                </ListItem>
            </List>
        </Container>
    )
}

export default LeftSide;