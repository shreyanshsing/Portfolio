import React from "react";
import {Grid,makeStyles, Typography} from "@material-ui/core";
import {Card1, Card2, ClientCard} from "../main/card/Card";
import {Carousel} from "react-bootstrap";
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
const style = makeStyles((theme)=>({
    root:{
        width:"100%",
        background:'white',
        padding:"5%",
        paddingTop:"7%",
        color:"#333333",
    },
}))

const data = [
    {
        id:'1',
        link:'',
        name:"Sumeet Vyas",
        desc:'timely deliverd product.',
        rating:4
    },
    {
        id:'2',
        link:'',
        name:"Sumeet Vyas",
        desc:'timely deliverd product.',
        rating:3
    },
    {
        id:'1',
        link:'',
        name:"Sumeet Vyas",
        desc:'timely deliverd product.',
        rating:5
    }
]

const Services = () => {
    const classes = style();

    return(
        <Grid container spacing={4} className={classes.root}>
            <Grid item sm={12}>
                <Typography variant="h4" style={{color:'#002C83'}} gutterBottom><u>Services</u></Typography>
            </Grid>
            <Grid item sm={12}>
                <Typography variant="body1" gutterBottom>It brings immense joy when your clients gets satisfied by your work.
                    <br/> Here are some of my happy(&#128512;&#128512;) clients.
                </Typography>
            </Grid>
            <Grid item sm={12}>
                <Carousel nextIcon ={<SkipNextIcon fontSize="large" style={{color:'black'}}/>} prevIcon={<SkipPreviousIcon fontSize="large" style={{color:'black'}}/>} >
                    {
                        data.map(item=>
                        <Carousel.Item style={{marginLeft:'10%',paddingTop:'5%',paddingBottom:'5%',paddingLeft:'25%'}}>
                            <ClientCard data={item}/>
                        </Carousel.Item>)
                    }
                </Carousel>
            </Grid>
            <Grid item sm={12}style={{textAlign:'center'}}>
                <Typography variant="h5" style={{color:'#002C83'}} gutterBottom>Need a website?<br/><small>for</small></Typography>
            </Grid>
            <Grid item sm={6}>
                <Card1/>
            </Grid>
            <Grid item sm={6}>
                <Card2/>
            </Grid>
        </Grid>
    )
}

export default Services;
