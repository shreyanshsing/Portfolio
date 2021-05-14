import {useState} from "react";
import {Card,CardHeader,CardContent,CardActions,makeStyles, Box, Button, Typography} from "@material-ui/core";
import DetailDialog from "../../Dialog/DetailDialog";

const style = makeStyles((theme)=>({
    card:{
        padding:'2%',
        background:'#333333',
    },
    cardContent:{
        textAlign:'center'
    },
    cardActions:{
        alignItems:'center',
        justifyContent:'center',
    }
}))
export const Card1 = () => {
    const classes = style();
    const [open,setOpen] = useState(false);
    return(
        <>
        <Card raised className={classes.card}>
            <CardHeader
                title="Your self"
                subheader="like visiting site , portfolio"
                titleTypographyProps={{
                    color:'secondary',
                    component:'h1'
                }}
                subheaderTypographyProps={{
                    color:'secondary',
                }}
            />
            <CardContent className={classes.cardContent} style={{color:'whitesmoke'}}>
                <Box>
                    <img src="https://img.icons8.com/color/50/000000/user-female-circle--v2.png" alt="img"/>
                </Box>
                <Typography variant="body1" gutterBottom>get your self a quality website at very reasonable prices.</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button color="primary" variant="contained" onClick={()=>setOpen(true)}>Get it done</Button> 
            </CardActions>
        </Card>
        {
            open ? <DetailDialog open={open} setOpen={setOpen}/> : null
        }
        </>
    )
}

export const Card2 = () => {
    const classes = style();
    const [open,setOpen] = useState(false);
    return(
        <>
        <Card raised className={classes.card}>
            <CardHeader
                title="Your Bussiness"
                subheader="like for your beauty product , art or anything"
                titleTypographyProps={{
                    color:'secondary',
                    component:'h1'
                }}
                subheaderTypographyProps={{
                    color:'secondary',
                }}
            />
            <CardContent className={classes.cardContent} style={{color:'whitesmoke'}}>
                <Box>
                    <img src="https://img.icons8.com/color/50/000000/working-with-a-laptop.png" alt="img"/>
                </Box>
                <Typography variant="body1" gutterBottom>boost your game with attractive and user friendly website.</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button color="primary" variant="contained" onClick={()=>setOpen(true)}>Get it done</Button> 
            </CardActions>
        </Card>
        {
            open ? <DetailDialog open={open} setOpen={setOpen}/> : null
        }
        </>
    )
}
