import React,{useState} from "react";
import {Container,Grid,makeStyles, TextField, Typography,Button,List,ListItem,ListItemIcon,ListItemText,IconButton} from "@material-ui/core";
import Firebase from "firebase";
import Toast from "../../reusable/toast";
import MailIcon from '@material-ui/icons/Mail';
import CallIcon from '@material-ui/icons/Call';
import HomeIcon from '@material-ui/icons/Home';
import Img from "./Main.png";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';

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
        marginBottom:'0.5rem',
        color:'whitesmoke',
        fontFamily: "'Montserrat', sans-serif",
        transition:'0.5s'
    },
    form:{
        background:'rgba(255,255,255,0.2)',
        padding:'5%',
        borderRadius:'10px',
    }
}))

const Contact = () => {
    const classes = style();

    const [name,setName] = useState("");
    const [subject,setSubject] = useState("");
    const [email,setEmail] = useState("");
    const [phoneNumber,setPhoneNumber] = useState("");
    const [purpose,setPurpose] = useState("");
    const [toastView,setToastView] = useState(false);
    const [severity,setSeverity] = useState("");
    const [message,setMessage] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        const data = {
            name:name,
            email:email,
            phoneNumber:phoneNumber,
            purpose:purpose,
            subject:subject
        }
        console.log(data)
        const db = Firebase.firestore();
        await db.collection('visitors').doc(name).set(data)
            .then(res=>{
                setMessage("Thanks for consideration , I have recived your notification , will get back in touch.")
                setSeverity("success");
                setToastView(true);
            })
            .catch(err=>{
                setMessage(err.message)
                setSeverity("error");
                setToastView(true);
            })
    }

    return(
        <Container maxWidth="xl" className={classes.root}>
            <Grid container spacing={4}>
                <Grid item sm={4}></Grid>
                <Grid item sm={8}>
                    <Typography variant="h4" gutterBottom><u>Contact</u></Typography>
                </Grid>
                <Grid item sm={4}></Grid>
                <Grid item sm={8}>
                    <List>
                        <ListItem divider>
                            <ListItemIcon><MailIcon fontSize="large" color="secondary"/></ListItemIcon>
                            <ListItemText>shreyanshsinghjee@gmail.com</ListItemText>
                        </ListItem>
                        <ListItem divider>
                            <ListItemIcon><CallIcon fontSize="large" color="secondary"/></ListItemIcon>
                            <ListItemText>+91(IN)-63-888-37120</ListItemText>
                        </ListItem>
                        <ListItem divider>
                            <ListItemIcon><HomeIcon fontSize="large" color="secondary"/></ListItemIcon>
                            <ListItemText>29 P Block Yahsoda Nagar Kanpur , Uttar Pradesh , India (ZIP : 208011).</ListItemText>
                        </ListItem>
                        </List>
                </Grid>
                <Grid item sm={4}></Grid>
                <Grid item xs={12} sm={8}>
                    <form onSubmit={handleSubmit} className={classes.form}>
                        <Grid container spacing={3}>
                            <Grid item sm={6}>
                                <TextField type="text" value={name} onChange={(e)=>setName(e.target.value)} variant="outlined" margin="dense" label="Name" fullWidth required/>
                            </Grid>
                            <Grid item sm={6}>
                                <TextField type="text" value={subject} onChange={(e)=>setSubject(e.target.value)} variant="outlined" margin="dense" label="Subject" fullWidth required/>
                            </Grid>
                            <Grid item sm={6}>
                                <TextField type="number" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} pattern="^[6789]\d{9}$" variant="outlined" margin="dense" label="Phone Number" fullWidth required/>
                            </Grid>
                            <Grid item sm={6}>
                                <TextField type="email" value={email} onChange={(e)=>setEmail(e.target.value)} variant="outlined" margin="dense" label="Email" fullWidth required/>
                            </Grid>
                            <Grid item sm={12}>
                                <TextField type="text" multiline rows={5} value={purpose} onChange={(e)=>setPurpose(e.target.value)} variant="outlined" margin="dense" label="Message" fullWidth/>
                            </Grid>
                            <Grid item sm={12} style={{textAlign:'center'}}>
                                <Button type="reset" variant="contained">Reset</Button>&nbsp; / &nbsp;
                                <Button type="submit" variant="contained" color="primary">Submit</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
                {
                    toastView ? <Toast toastView={toastView} setToastView={setToastView} message={message} severity={severity}/> : null
                }
                <Grid item sm={4}></Grid>
                <Grid item sm={8}>
                    <Typography variant="h4" gutterBottom>
                        Social Media Handles - 
                        <List>
                            <ListItem style={{justifyContent:'center'}}>
                                <IconButton href="https://www.linkedin.com/in/shreyansh-singh-549a601a5/" target="_blank" rel="nonrefrerrer">
                                    <LinkedInIcon fontSize="large" style={{color:"#0066cc"}}/>
                                </IconButton>
                                <IconButton>
                                    <InstagramIcon fontSize="large" style={{color:"#8a3ab9"}}/>
                                </IconButton>
                                <IconButton href="https://github.com/shreyanshsing/" target="_blank" rel="nonrefrerrer">
                                    <GitHubIcon fontSize="large" style={{color:"white"}}/>
                                </IconButton>
                            </ListItem>
                        </List>
                    </Typography>
                    <Typography variant="h6" style={{color:"cyan"}} component="a" href="https://www.fiverr.com/shreyanshsin615" target="_blank" rel="nonrefrerrer" gutterBottom>
                        Connect on Fiverr
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Contact;
