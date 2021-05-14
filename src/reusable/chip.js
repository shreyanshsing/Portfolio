import {Chip,withStyles} from "@material-ui/core";

const CustomChip = withStyles((theme)=>({
    root:{
        background:"#0099ff",
        color:"whitesmoke"
    }
}))(Chip)

export default CustomChip;