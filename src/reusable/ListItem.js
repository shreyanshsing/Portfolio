import {withStyles,ListItem} from "@material-ui/core";

const CustomListItem = withStyles((theme)=>({
    root:{
        width:'inherit',
        paddingRight:'5%',
        margin:'2%',
        boxShadow:'4px 4px 5px lightgrey',
        borderRadius:'10px',
        '& .MuiListItemText-primary':{
            fontWeight:"300",
            fontSize:'18px',
            color:'#333333',
        },
        '&$selected':{
            color:"#002C83",
            backgroundColor:"#DEE0E2",
        }
    },
    selected:{
        color:"#002C83",
        '& .MuiListItemText-primary':{
            fontWeight:"bold",
            color:"#002C83",
        },
        '& .MuiListItemIcon-root':{
            color:"#002C83",
            fontSize:100
        },
    }
}))(ListItem);

export default CustomListItem;