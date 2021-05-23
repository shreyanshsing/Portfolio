import React,{useState} from "react";
import {Grid,makeStyles, TextField, Typography,Button,List,ListItem,ListItemIcon,ListItemText} from "@material-ui/core";
import Firebase from "firebase";
import Toast from "../../reusable/toast";
import MailIcon from '@material-ui/icons/Mail';
import CallIcon from '@material-ui/icons/Call';
import HomeIcon from '@material-ui/icons/Home';

const style = makeStyles((theme)=>({
    root:{
        width:"100%",
        background:'white',
        padding:"5%",
        paddingTop:"7%",
        color:"#333333",
    },
    form:{
        background:'#d1e0e0',
        padding:'5%',
        borderRadius:'10px',
        boxShadow:'3px 3px 6px #f0f5f5'
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
        <Grid container spacing={4} className={classes.root}>
            <Grid item sm={12}>
                <Typography variant="h4" style={{color:'#002C83'}} gutterBottom><u>Contact</u></Typography>
            </Grid>
            <Grid item sm={12}>
                <Typography variant="body1" gutterBottom>
                    Ok! so now let's connect, enter your details here and I will reach out to you.
                </Typography>
            </Grid>
            <Grid item sm={6}>
                <Typography variant="body1" gutterBottom>Here are mine contact details-</Typography>
                <List>
                    <ListItem divider>
                        <ListItemIcon><MailIcon fontSize="large"/></ListItemIcon>
                        <ListItemText>shreyanshsinghjee@gmail.com</ListItemText>
                    </ListItem>
                    <ListItem divider>
                        <ListItemIcon><CallIcon fontSize="large"/></ListItemIcon>
                        <ListItemText>+91(IN)-63-888-37120</ListItemText>
                    </ListItem>
                    <ListItem divider>
                        <ListItemIcon><HomeIcon fontSize="large"/></ListItemIcon>
                        <ListItemText>29 P Block Yahsoda Nagar Kanpur , Uttar Pradesh , India (ZIP : 208011).</ListItemText>
                    </ListItem>
                    </List>
            </Grid>
            <Grid item sm={6}>
                <form onSubmit={handleSubmit} className={classes.form}>
                    <Grid container spacing={3}>
                        <Grid item sm={6}>
                            <TextField autoFocus type="text" value={name} onChange={(e)=>setName(e.target.value)} variant="outlined" margin="dense" label="Name" fullWidth required/>
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
        </Grid>
    )
}

export default Contact;
