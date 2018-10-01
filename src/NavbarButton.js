import React from 'react';
import {MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#EDE7F6',
    },
  },
});

function NavbarButton(props) {
  return (
      <MuiThemeProvider theme={theme}>
        <Button className="navbar-btn" variant="outlined" color="primary">
          {props.children}
        </Button>
      </MuiThemeProvider>
  );
}


export default (NavbarButton);
