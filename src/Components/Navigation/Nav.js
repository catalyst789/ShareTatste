import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import { GridOn, GridOff } from '@material-ui/icons';
import { Link, withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  Link: {
    textDecoration: 'none',
    color: 'inherit'
  }
}));

function Nav(props) {
  const classes = useStyles();
  // console.log(props);

  const GridSwicthHandler = () => {
    if(props.location.pathname === '/cardrecipe'){
      props.history.push('/listrecipe')
    } else if(props.location.pathname === '/listrecipe'){
      props.history.push('/cardrecipe')
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary" >
        <Toolbar>
          <Typography className={classes.title} color="inherit" aria-label="menu">
            <Link to="/cardrecipe" className={classes.Link}>
              <span>🥄</span>
                फियुकFood
              <span>🍴</span>
            </Link>
       
          </Typography>
          <IconButton 
            edge= "start" 
            color="inherit"
            onClick={GridSwicthHandler} 
            className={classes.menuButton}>
          {props.location.pathname === '/cardrecipe' ? <GridOff />: ''}
          {props.location.pathname === '/listrecipe' ? <GridOn /> : ''}
          </IconButton>
          <Button 
            color="inherit"
            onClick={ () => props.history.push('/addrecipe')}
            >ADD RECIPE</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default withRouter(Nav);