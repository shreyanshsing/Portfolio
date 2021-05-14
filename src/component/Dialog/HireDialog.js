import React , {useState} from "react";
import {makeStyles,Typography,Dialog,DialogTitle,DialogContent,Button,Grid} from "@material-ui/core";
import CustomTextField from "../../reusable/textField";
import Firebase from "firebase";
import Toast from "../../reusable/toast";

const style = makeStyles((theme)=>({
    container:{
        opacity:0.9,
        background:'black'
    },
    paper:{
        color:'whitesomke',
        background:'#333333',
        borderRadius:'10px'
    }
}))

const HireDialog = ({open,setOpen}) => {
    const classes = style();
    const [name,setName] = useState("");
    const [company,setCompany] = useState("");
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
            company:company
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
        <>
        <Dialog
            open={open}
            onClose={()=>setOpen(false)}
            classes={{container:classes.root,paper:classes.paper}}>
            <DialogTitle disableTypography={true}>
                <Typography variant="h5" style={{color:'whitesmoke'}} gutterBottom>Enter your contact Details</Typography>
            </DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item sm={6}>
                            <CustomTextField autoFocus type="text" value={name} onChange={(e)=>setName(e.target.value)} variant="outlined" margin="dense" label="Name" fullWidth required/>
                        </Grid>
                        <Grid item sm={6}>
                            <CustomTextField type="text" value={company} onChange={(e)=>setCompany(e.target.value)} variant="outlined" margin="dense" label="Company name" fullWidth required/>
                        </Grid>
                        <Grid item sm={6}>
                            <CustomTextField type="number" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} pattern="^[6789]\d{9}$" variant="outlined" margin="dense" label="Phone Number" fullWidth required/>
                        </Grid>
                        <Grid item sm={6}>
                            <CustomTextField type="email" value={email} onChange={(e)=>setEmail(e.target.value)} variant="outlined" margin="dense" label="Email" fullWidth required/>
                        </Grid>
                        <Grid item sm={12}>
                            <CustomTextField type="text" value={purpose} onChange={(e)=>setPurpose(e.target.value)} variant="outlined" margin="dense" label="Purpose/Post for consideration" fullWidth/>
                        </Grid>
                        <Grid item sm={12} style={{textAlign:'center'}}>
                            <Button type="reset" variant="contained">Reset</Button>&nbsp; / &nbsp;
                            <Button type="submit" variant="contained" color="primary">Submit</Button>
                        </Grid>
                    </Grid>
                </form>
            </DialogContent>
            {
                toastView ? <Toast toastView={toastView} setToastView={setToastView} message={message} severity={severity}/> : null
            }
        </Dialog>
        </>
    )
}
export default HireDialog;