import React from "react";
import {Grid,makeStyles, Typography,Container} from "@material-ui/core";
import {ProjectCard} from "../main/card/Card";
import Img from "../resume/Main.png"
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
        paddingLeft:"10%",
        marginBottom:'0.5rem',
        color:'whitesmoke',
        fontFamily: "'Montserrat', sans-serif",
        transition:'0.5s'
    },
}))

const list = [
    {
        id:'1',
        link:'https://designers-stop.netlify.app/',
        name:"Desginer's Stop",
        desc:'Based on blockchain smart contracts, a live auction system.'
    },
    {
        id:'2',
        link:'https://dream-company.netlify.app/',
        name:"Dream Company",
        desc:'A portal for people to find their ideal jobs and candidates .'
    },
    {
        id:'3',
        link:'https://readerskorner.netlify.app/#/',
        name:"Reader's Korner",
        desc:'A simple and user-friendly blogging website.'
    },
    {
        id:'4',
        link : 'https://shreyanshsing.github.io/commerce-app/',
        name : "Shopper's Stop",
        desc : "A online shopping mart for furniture's."
    }
]

const Work = () => {
    const classes = style();

    return(
        <Container maxWidth="xl" className={classes.root}>
            <Grid container spacing={4}>
                <Grid item sm={12}>
                    <Typography variant="h4" gutterBottom><u>Projects & Work</u></Typography>
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
        </Container>
    )
}

export default Work;
