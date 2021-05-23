import React from "react";
import {Grid,makeStyles, Typography} from "@material-ui/core";
import {ProjectCard} from "../main/card/Card";

const style = makeStyles((theme)=>({
    root:{
        width:"100%",
        background:'white',
        padding:"5%",
        paddingTop:"7%",
        color:"#333333",
    },
}))

const list = [
    {
        id:'1',
        link:'',
        name:"Desginer's Stop",
        desc:'Based on blockchain smart contracts, a live auction system.'
    },
    {
        id:'2',
        link:'',
        name:"Food Mart",
        desc:'Online food shopping mart.'
    },
    {
        id:'1',
        link:'',
        name:"Reader's Korner",
        desc:'A simple and user-friendly blogging website.'
    }
]

const Work = () => {
    const classes = style();

    return(
        <Grid container spacing={4} className={classes.root}>
            <Grid item sm={12}>
                <Typography variant="h4" style={{color:'#002C83'}} gutterBottom><u>Work</u></Typography>
            </Grid>
            <Grid item sm={12}>
                <Typography variant="body1" gutterBottom>What is the point of having skills if one cannot showcase.
                    <br/> Here are some of my projects.
                </Typography>
            </Grid>
            <Grid item sm={12}>
                <Grid container spacing={3}>
                    {
                        list.map(item => <Grid item sm={3} key={item.id}><ProjectCard data={item}/></Grid>)
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Work;
