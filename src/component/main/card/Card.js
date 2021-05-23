import {useState} from "react";
import {Card,CardHeader,CardContent,CardActions,makeStyles, Button, Typography} from "@material-ui/core";
import Rating from '@material-ui/lab/Rating';
import DetailDialog from "../../Dialog/DetailDialog";
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

const style = makeStyles((theme)=>({
    card:{
        padding:'2%',
        borderRadius:'10px',
        maxHeight:'300px',
        minHeight:'230px'
    },
    cardContent:{
        textAlign:'justify'
    },
    cardActions:{
        alignItems:'center',
        justifyContent:'flex-start',
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
                    color:'primary',
                    component:'h4'
                }}
            />
            <CardContent className={classes.cardContent}>
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
                    color:'primary',
                    component:'h4'
                }}
            />
            <CardContent className={classes.cardContent}>
                <Typography variant="body1" gutterBottom>Boot your game with user friendly, fast and amazing websites. </Typography>
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

export const ProjectCard = (props) => {
    const classes = style();

    const handleVisit = (link) => {
        window.location.href = link;
    }
    return(
        <Card raised className={classes.card}>
            <CardHeader
                title={props.data.name}
                titleTypographyProps={{
                    color:'primary',
                    component:'h4'
                }}
            />
            <CardContent className={classes.cardContent}>
                <Typography variant="body1" gutterBottom>{props.data.desc}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button color="primary" variant="text" onClick={()=>handleVisit(props.data.link)}>Visit</Button> 
            </CardActions>
        </Card>
    )
}

export const ClientCard = (props) => {
    const classes = style();
      
      const customIcons = {
        1: {
          icon: <SentimentVeryDissatisfiedIcon />,
          label: 'Very Dissatisfied',
        },
        2: {
          icon: <SentimentDissatisfiedIcon />,
          label: 'Dissatisfied',
        },
        3: {
          icon: <SentimentSatisfiedIcon />,
          label: 'Neutral',
        },
        4: {
          icon: <SentimentSatisfiedAltIcon />,
          label: 'Satisfied',
        },
        5: {
          icon: <SentimentVerySatisfiedIcon />,
          label: 'Very Satisfied',
        },
      };
      
      function IconContainer(props) {
        const { value, ...other } = props;
        return <span {...other}>{customIcons[value].icon}</span>;
      }

    return(
        <Card raised style={{width:'fit-content'}}>
            <CardHeader
                title={props.data.name}
                titleTypographyProps={{
                    color:'primary',
                    component:'h4'
                }}
                subheader={
                    <Rating
                        name="customized-icons"
                        defaultValue={props.data.rating}
                        getLabelText={(value) => customIcons[value].label}
                        IconContainerComponent={IconContainer}
                    />
                }
            />
            <CardContent className={classes.cardContent}>
                <Typography variant="body1" gutterBottom>{props.data.desc}</Typography>
            </CardContent>
        </Card>
    )
}
