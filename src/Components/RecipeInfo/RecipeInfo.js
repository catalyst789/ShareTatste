import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, CardMedia } from '@material-ui/core';
import RecipeDetail from './RecipeDetail/RecipeDetail'; 
import AddRecipe from '../AddRecipe/AddRecipe';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


import { getActiveRecipe, removeActiveRecipe} from '../../Store/Actions';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: "100%",
    minHeight: '500px',
    marginTop: "2rem",
  },
  cover: {
      width: "50%",
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: "50%"
  },
}));

function RecipeInfo(props) {
  const classes = useStyles();

  const [state, setstate] = useState({
    dish : '',
    imageURL : ''
  });

  useEffect(() => {
    if(props.activeRecipe === null){
      props.getActiveRecipe(props.match.params.id)
    } else {
      setstate({...props.activeRecipe})
    }
    return () => {
      if(props.activeRecipe) {
        props.removeActiveRecipe()
      }
    }
  }, [props])

  return (
      <Paper elevation={3} className={classes.root}>

      <CardMedia
            className={classes.cover}
            src="its need some time as well"
            image= {state.imageURL}
            title= {state.dish}
       />
       <div className={classes.details}>
          {/* { props.location.pathname === '/recipeinfo/edit' ? <AddRecipe /> :<RecipeDetail recipeDets = {ActiveRecipe[0]} /> } */}

          <Switch>
            <Route exact path={`${props.match.url}/`} component={RecipeDetail} />
            <Route path={`${props.match.url}/edit`} component={AddRecipe}/>
            <Redirect from= {props.match.url} to={`${props.match.url}/`} />
          </Switch>
          
       </div>

      </Paper>
  );
}

const mapStateToProps = state => {
  return {
    activeRecipe : state.RecipeReducer.activeRecipe
  };
}
const mapDispatchToProps = ({
  getActiveRecipe,
  removeActiveRecipe
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipeInfo);
