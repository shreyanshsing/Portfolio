import React , {useState} from "react";
import {Container,List,ListItem,Typography,makeStyles,ListItemText} from "@material-ui/core";
import HireDialog from "../Dialog/HireDialog";
import ContactDialog from "../Dialog/ContactDialog";
const style = makeStyles((theme)=>({
    root:{
        width:'100%',
        padding:'0px'
    },
    list:{
        width:'100%',
        paddingRight:'0px'
    },
    listItem:{
        background:'#333333',
        color:'whitesmoke',
        width:'100%',
        margin:'10%',
        padding:'10px'
    }
}))

const RightSide = () =>{

    const classes = style();
    const [openContact,setOpenContact] = useState(false);
    const [openHire,setOpenHire] = useState(false);

    const handleHireDialog = () => {
        setOpenHire(true);
    }
    const handleContactDialog = () => {
        setOpenContact(true);
    }

    return(
        <Container maxWidth="xl" className={classes.root}>
            <List className={classes.list}>
                <ListItem divider button className={classes.listItem} onClick={handleHireDialog}>
                    <ListItemText>
                        Hire me !
                    </ListItemText>
                </ListItem>
                <ListItem divider button className={classes.listItem} onClick={handleContactDialog}>
                    <ListItemText>
                        Contact Me
                    </ListItemText>
                </ListItem>
            </List>

            {
                openContact ? <ContactDialog open={openContact} setOpen={setOpenContact}/> : null
            }

            {
                openHire ? <HireDialog open={openHire} setOpen={setOpenHire}/> : null
            }

        </Container>
    )
}

export default RightSide;