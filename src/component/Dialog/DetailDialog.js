import React , {useState} from "react";
import {makeStyles,Typography,Dialog,DialogContent,Button,Grid} from "@material-ui/core";
import CustomTextField from "../../reusable/textField";
import Firebase from "firebase";
import Toast from "../../reusable/toast";
import Img from "./Card-Img.png";
const style = makeStyles((theme)=>({
    container:{
        opacity:0.9,
        background:'black'
    },
    paper:{
        color:'whitesomke',
        backgroundImage:`linear-gradient(rgba(0, 0, 0,0.2), rgba(0, 0, 0, 0.4)),url(${Img})`,
        position:'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        overflow: 'scroll',
        borderRadius:'10px'
    }
}))

const DetailDialog = ({open,setOpen}) => {
    const classes = style();
    const [name,setName] = useState("");
    const [phoneNumber,setPhoneNumber] = useState("");
    const [time,setTime] = useState("");
    const [toastView,setToastView] = useState(false);
    const [severity,setSeverity] = useState("");
    const [message,setMessage] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        const data = {
            name:name,
            phoneNumber:phoneNumber,
            time:time
        }
        const db = Firebase.firestore();
        await db.collection('clients').doc(name).set(data)
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
            <DialogContent>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item sm={6} xs={4}></Grid>
                        <Grid item sm={6} xs={8}>
                            <Typography variant="h5" style={{color:'whitesmoke'}} gutterBottom>Great let's begin</Typography>
                        </Grid>
                        <Grid item sm={6} xs={4}></Grid>
                        <Grid item sm={6} xs={8}>
                            <CustomTextField autoFocus type="text" value={name} onChange={(e)=>setName(e.target.value)} variant="outlined" margin="dense" label="Name" fullWidth required/>
                        </Grid>
                        <Grid item sm={6} xs={4}></Grid>
                        <Grid item sm={6} xs={8}>
                            <CustomTextField type="number" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} pattern="^[6789]\d{9}$" variant="outlined" margin="dense" label="Phone Number" fullWidth required/>
                        </Grid>
                        <Grid item sm={6} xs={4}></Grid>
                        <Grid item sm={6} xs={8}>
                            <CustomTextField type="text" value={time} onChange={(e)=>setTime(e.target.value)} variant="outlined" margin="dense" label="What time should I call" fullWidth/>
                        </Grid>
                        <Grid item sm={6} xs={2}></Grid>
                        <Grid item sm={6} xs={10} style={{textAlign:'center'}}>
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
export default DetailDialog;