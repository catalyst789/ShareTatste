import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Navigation/Nav';
import CardRecipe from './Components/CardRicipe/CardRecipe';
import ListRecipe from './Components/ListRecipe/ListRecipe';
import RecipeInfo from './Components/RecipeInfo/RecipeInfo';
import AddRecipe from './Components/AddRecipe/AddRecipe';
import { Grid } from '@material-ui/core';

import { Route, Switch, Redirect, withRouter } from 'react-router-dom';


class App extends Component {
  
  render() {

    let rowaYaCoumn = 'row';
    if (this.props.location.pathname === '/listrecipe') {
      rowaYaCoumn = 'column';
     }
    return (
      <>
      <Nav />
      <Grid container>
        <Grid item sm={1} ></Grid>
         <Grid direction={rowaYaCoumn} container item sm={10} >
            <Switch>
             <Route path= "/addrecipe" component= {AddRecipe} />
             <Route path= "/cardrecipe" component= {CardRecipe} />
             <Route path= "/listrecipe" component= {ListRecipe} />
             <Route path="/recipeinfo/:id" component={RecipeInfo} />
             <Redirect to= "/cardrecipe" from= "/" />
            </Switch>
         </Grid>
      </Grid>
      
      </>
    );
  }
}

export default withRouter(App);