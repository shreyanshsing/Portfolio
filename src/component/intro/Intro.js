import React from "react";
import {Container,makeStyles,Avatar,Grid, Typography,List,ListItem,IconButton,Box} from "@material-ui/core";
import CustomChip from "../../reusable/chip";
import AttachmentIcon from '@material-ui/icons/Attachment';

const style = makeStyles((theme)=>({
    root:{
        color:"whitesmoke",
        width:"100%",
        height:"100vh",
        padding:"2%",
        paddingLeft:"5%",
        paddingBottom:"5%",
        marginTop:"5%",
        overflowWrap:"break-word",
        overflowY:"scroll",
    },
    color:{
        color:"#0099ff",
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
    divider: {
        // Theme Color, or use css color in quote
        background: "whitesmoke",
    },
}))

const Intro = () => {
    const classes = style();

    const handlePdf1 = () => {
        window.location.assign("https://internshala.com/student/certificate/52938672/9E1965B4-AF3C-F5B3-476C-144458A24183");
    }

    const handlePdf2 = () => {
        window.location.assign("https://internshala.com/student/certificate/54058547/1BC2600B-43A2-2367-4D67-796BEFEEB8EB");
    }

    return(
        <Container maxWidth="xl"  className={classes.root}>
            <Grid container spacing={2} >
                <Grid item sm={12}>
                    <Avatar className={classes.large} alt="profile" src="profile .jpg"/>
                    <Typography variant="h6" gutterBottom><i>Shreyansh Singh</i></Typography>
                </Grid>
                <Grid item sm={12} style={{textAlign:"center"}}>
                    <blockquote style={{color:"#0099ff"}}>
                    <i>"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live."
                    </i></blockquote>
                    <br/>
                    <Typography variant="caption" gutterBottom>Martin Golding</Typography>
                </Grid>
                <Grid item sm={12}>
                    <Typography variant="h5" gutterBottom>
                        <i>Skills</i> : 
                        <CustomChip
                        label="C/C++"
                        />
                        <CustomChip
                        label="Core Java"
                        />
                        <CustomChip
                        label="ReactJS"
                        />
                        <CustomChip
                        label="Javascript"
                        />
                        <CustomChip
                        label="Blockchain"
                        />
                    </Typography>
                </Grid>
                <Grid item sm={12}>
                    <Typography variant="h5" gutterBottom><i>Work Experince : </i></Typography>
                    <List>
                        <ListItem>
                            <Typography variant="body1" gutterBottom >1 . Blazsoft (front-end intern)
                            <IconButton onClick={handlePdf1}>
                                <AttachmentIcon fontSize="large" className={classes.color}/>
                            </IconButton>
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography variant="body1" gutterBottom >2 . Prixled (front-end intern)</Typography>
                            <IconButton onClick={handlePdf2}>
                                <AttachmentIcon fontSize="large" className={classes.color}/>
                            </IconButton>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item sm={12}>
                    <Typography variant="h5" gutterBottom><i>Recent Projects : </i></Typography>
                    <List>
                        <ListItem button className={classes.color}>
                            Commerce App
                        </ListItem>
                        <ListItem button className={classes.color}>
                            Blockchain Token App
                        </ListItem>
                    </List>
                </Grid>
                <Grid item sm={12}>
                    <Typography variant="h5" gutterBottom>Paper's / Articles / Blogs</Typography>
                    <List>
                        <ListItem button>
                            Blog 1
                        </ListItem>
                        <ListItem button>
                            Blog 2
                        </ListItem>
                        <ListItem button>
                            Blog 3
                        </ListItem>
                        <ListItem button>
                            Blog 4
                        </ListItem>
                    </List>
                </Grid>
                <Box display={{xs:'none'}}>
                <Grid item sm={12} style={{textAlign:"center"}}>
                    <Typography variant="subtitle1" gutterBottom>"Thanks for showing interset hope you will like it ."</Typography>
                    <Typography variant="subtitle2" gutterBottom>Made with efforts and love by Shreyansh Singh</Typography>
                </Grid>
                </Box>
            </Grid>
        </Container>
    )
}

export default Intro;