import {createMuiTheme} from "@material-ui/core";

let theme = createMuiTheme();


theme.typography.h5 = {
  color:'#333333',
    fontSize: '1.2rem',
    '@media (max-width:600px)': {
      fontSize: '1rem',
    }
}

theme.typography.body1 = {
  color:'#333333',
    fontSize: '1.2rem',
    '@media (max-width:600px)': {
      fontSize: '1rem',
    }
}

export default theme;