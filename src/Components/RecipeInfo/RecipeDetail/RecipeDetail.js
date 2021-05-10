import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Paper, CardContent, Typography, Button } from '@material-ui/core';
import { connect } from 'react-redux';

import { deleteRecipeAction } from '../../../Store/Actions';

const useStyles = makeStyles((theme) => ({
    content: {
      flex: '1 0 auto',
    },
    buttons: {
      marginTop: "2rem",
      textAlign: "right",
      '& > *': {
          margin: theme.spacing(1),
        },
    },
    ingredients: {
      marginTop: "1rem",
      padding: "1rem",
      backgroundColor: "rgba(245, 0, 87, .05)"
  
    },
    ingButtons: {
        marginTop: "1rem",
      '& > *': {
          margin: theme.spacing(1),
        },
    },
    addrecipe: {
        padding: "1rem",
        height: "100%",
        display: "flex",
        flexDirection: 'column',
        alignItems: "center"
    }
  }));


function RecipeDetail(props) {
  
  
  const [state, setstate] = useState({
    id : '',
    dish : '',
    imageURL : '',
    chef: '',
    date : '',
    desc : '',
    ingredients : []
  });
  const { date, chef, ingredients, dish, desc, id } = state;

  useEffect(() => {
    if(props.activeRecipe){
      setstate({...props.activeRecipe})
    }
  }, [props])

  // console.log(ingredients);
  const random = () => Math.floor(Math.random()*3);
  const varientsArr = [ 'contained', 'outlined', 'text',];
  const colorsArr = [ 'primary', 'secondary','default'];

  const button = ingredients.map( (ingred) => (
    <Button
      key = {ingred}
      variant = {varientsArr[random()]}
      color = {colorsArr[random()]}
    >{ingred}</Button>
  ))

  const onDeleteRecipeHandler = async () => {
    await props.deleteRecipeAction(id);
    props.history.push('/');
  }

    const classes = useStyles();
    return (
        <CardContent>
            <Typography component="h3" variant="h3">{dish}</Typography>
      <Typography variant="subtitle1" color="textSecondary">{chef}</Typography>
      <Typography variant="subtitle2" color="textSecondary">{date}</Typography>
      <br />
      <Typography variant="body1" color="textSecondary">{desc}</Typography>
      <Paper elevation={3} className={classes.ingredients}>
      <Typography component="h4" variant="h4"> 
        <span role="img" aria-label="ingredient" aria-labelledby="jsx-a11y/accessible-emoji">🍝</span>
        Ingredients
        <div className={classes.ingButtons}>{button}</div>        
      </Typography>
      </Paper>
        <div className={classes.buttons}>
        <Button 
          variant="contained" 
          color="primary"
          onClick={ () => props.history.push(`${props.match.url}/edit`)}
          >EDIT</Button>
        <Button onClick={onDeleteRecipeHandler} 
          variant="contained" color="secondary">DELETE</Button>
        <Button 
          variant="contained"
          onClick={ () => props.history.goBack()}
          >BACK</Button>
        </div>
      </CardContent>
    )
}

const mapStateToProps = state => {
  return {
    activeRecipe : state.RecipeReducer.activeRecipe
  };
}
const mapDispatchToProps = ({
  deleteRecipeAction
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetail);
