import {withStyles,ListItem} from "@material-ui/core";

const CustomListItem = withStyles((theme)=>({
    root:{
        width:'fit-content',
        background:'#333333',
        paddingRight:'5%',
        borderRadius:'10px 10px 50px 10px',
        margin:'1%',
        boxShadow:'2px 2px 3px black'
    },
    divider:{
        color:'whitesmoke'
    }
}))(ListItem);

export default CustomListItem;