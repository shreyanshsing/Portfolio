import {TextField,withStyles} from "@material-ui/core";

const CustomTextField = withStyles((theme)=>({
    root: {
        color:"whitesomke",
        '& label.Mui-focused': {
          color: 'whitesmoke',
        },
        '& .MuiInput-underline:after': {
            color:"whitesmoke",
          borderBottomColor: 'whitesmoke',
        },
        '& .MuiOutlinedInput-root': {
            color:"whitesmoke",
          '& fieldset': {
            color:"whitesmoke",
            borderColor: 'whitesmoke',
          },
          '&:hover fieldset': {
            color:"whitesmoke",
            borderColor: 'whitesmoke',
          },
          '&.Mui-focused fieldset': {
            color:"whitesmoke",
            borderColor: 'whitesmoke',
          },
        },
      },
}))(TextField);

export default CustomTextField;