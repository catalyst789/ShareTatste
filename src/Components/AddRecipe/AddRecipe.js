import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Grid, Typography } from '@material-ui/core';
import { v4 } from 'uuid';
import moment from 'moment';
import { connect } from 'react-redux';

import { createRecipeAction, modifyRecipeAction } from '../../Store/Actions/';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginBottom: "2rem",
},
  textfields: {
    width: "100%",
    marginBottom: "1rem"
},
  buttonSpace: {
    marginLeft: "1rem"
},
  typographyStyle: {
    fontSize: "35px",
    marginTop: "35px"
  },
  form : {
    marginTop: "40px"
  }
}));

function AddRecipe(props) {
  const classes = useStyles();

  const [state, setstate] = useState({
    dish: '',
    chef: '',
    ingredientsString: '',
    imageURL: '',
    desc: ''
  });

  useEffect(() => {
    if(props.activeRecipe){
      let recipedata = {...props.activeRecipe}
      let ingredientsString = recipedata.ingredients.join();
      delete recipedata.ingredients;
      setstate({...recipedata, ingredientsString })
    }
    return () => {
      if(props.match.url === '/addrecipe'){
        setstate({ dish: '', chef: '', ingredientsString: '', imageURL: '', desc: '' });
      }
    }
  }, [props])


  const onChangeHandler = (event) => {
    event.persist();
    setstate(prevState => ({...prevState, [event.target.name] : event.target.value}));
  }

  const onSubmitHandler =(event) => {
    event.preventDefault();

    if(
      state.chef.trim() === '' ||
      state.dish.trim() === '' ||
      state.ingredientsString.trim() === '' ||
      state.desc.trim() === '' ||
      state.imageURL.trim() === ''){
        return alert('No Input Field must be empty...!');
    }

    const{ id, date, dish, chef, ingredientsString, imageURL, desc } =state;

    if(props.match.url === '/addrecipe'){
    const Recipe = { dish, chef, imageURL, desc };
    Recipe.id = v4();
    Recipe.date = moment().format('llll');
    Recipe.ingredients = ingredientsString.split(',');
    props.createRecipeAction(Recipe);
    props.history.push('/');
  } else {
    const Recipe = { id, date, dish, chef, imageURL, desc };
    Recipe.ingredients = ingredientsString.split(',');
    props.modifyRecipeAction(Recipe);
    props.history.goBack();
  }
}
  

  return (
    <Grid container className={classes.root}>
        <Grid item sm={2}></Grid>
        <Grid item sm={8}>
        {props.location.pathname === '/addrecipe' ? <Typography className={classes.typographyStyle}>👋 Share your taste with the 🌏world!</Typography> : <Typography className={classes.typographyStyle}>Update your Recipe Details</Typography> }
        
        
        <form className={classes.form} onSubmit={onSubmitHandler}>
      <TextField
        name="dish"
        value={state.dish}
        onChange={onChangeHandler}
        className={classes.textfields}
        id="outlined-basic" 
        label="Recipe Name" 
        variant="outlined"
         />
         <TextField
        name="chef"
        value={state.chef}
        onChange={onChangeHandler}
        className={classes.textfields} 
        id="outlined-basic" 
        label="Chef Name" 
        variant="outlined"
         />
         <TextField
        name="ingredientsString"
        value={state.ingredientsString}
        onChange={onChangeHandler}
        className={classes.textfields} 
        id="outlined-basic" 
        label="Recipe Ingredients" 
        variant="outlined"
         />
         <TextField
        name="imageURL"
        value={state.imageURL}
        onChange={onChangeHandler}
        className={classes.textfields} 
        id="outlined-basic" 
        label="Recipe Image URL" 
        variant="outlined"
         />
         <TextField
        name="desc"
        value={state.desc}
        onChange={onChangeHandler}
        className={classes.textfields} 
        id="outlined-basic" 
        label="Recipe Description" 
        variant="outlined"
         />
         <div className={classes.button}>
         <Button
          type="Submit"
          variant="contained" 
          color="secondary"
          >SAVE RECIPE</Button>
          <Button
          variant="contained" 
          color="primary"
          className={classes.buttonSpace}
          onClick={ () => props.history.goBack()}
          >BACK</Button>
         </div>
    </form>
    </Grid>
        <Grid item sm={2}></Grid>
        </Grid>
  );
}

const mapStateToProps = state => {
  return {
    activeRecipe : state.RecipeReducer.activeRecipe
  };
}
const mapDispatchToProps = ({
  createRecipeAction,
  modifyRecipeAction
})

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipe);
