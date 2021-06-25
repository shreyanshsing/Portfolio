import {createMuiTheme} from "@material-ui/core";

let theme = createMuiTheme();

theme.palette.primary.main = "#ff6600";
theme.palette.secondary.main = "#ffff00";

theme.typography.h5 = {
    fontSize: '1.2rem',
    '@media (max-width:600px)': {
      fontSize: '1rem',
    }
}

theme.typography.body1 = {
    fontSize: '1.2rem',
    '@media (max-width:600px)': {
      fontSize: '1rem',
    }
}

export default theme;