import {makeStyles,Typography,Dialog,DialogTitle,DialogContent,List,ListItem,ListItemIcon,ListItemText} from "@material-ui/core";
import MailIcon from '@material-ui/icons/Mail';
import CallIcon from '@material-ui/icons/Call';
import HomeIcon from '@material-ui/icons/Home';

const style = makeStyles((theme)=>({
    container:{
        opacity:0.9,
        background:'black'
    },
    paper:{
        color:'whitesomke',
        background:'#333333',
        borderRadius:'10px'
    },
    listItem:{
        background:'#333333',
        color:'whitesmoke',
        width:'100%',
        margin:'1%',
        padding:'10px'
    }
}))

const ContactDialog = ({open,setOpen}) => {
    const classes = style();

    return(
        <>
        <Dialog
            open={open}
            onClose={()=>setOpen(false)}
            classes={{container:classes.root,paper:classes.paper}}>
            <DialogTitle disableTypography={true}>
                <Typography variant="h5" style={{color:'whitesmoke'}} gutterBottom>These are my contacts</Typography>
            </DialogTitle>
            <DialogContent>
                <List>
                    <ListItem divider className={classes.listItem}>
                        <ListItemIcon><MailIcon style={{fill:'whitesmoke'}} fontSize="large"/></ListItemIcon>
                        <ListItemText>shreyanshsinghjee@gmail.com</ListItemText>
                    </ListItem>
                    <ListItem divider className={classes.listItem}>
                        <ListItemIcon><CallIcon style={{fill:'whitesmoke'}} fontSize="large"/></ListItemIcon>
                        <ListItemText>+91(IN)-63-888-37120</ListItemText>
                    </ListItem>
                    <ListItem divider className={classes.listItem}>
                        <ListItemIcon><HomeIcon style={{fill:'whitesmoke'}} fontSize="large"/></ListItemIcon>
                        <ListItemText>29 P Block Yahsoda Nagar Kanpur , Uttar Pradesh , India (ZIP : 208011).</ListItemText>
                    </ListItem>
                </List>
            </DialogContent>
        </Dialog>
        </>
    )
}
export default ContactDialog;