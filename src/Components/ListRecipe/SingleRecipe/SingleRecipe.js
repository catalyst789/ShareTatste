import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(3),
        padding: "10px 1.5rem"
    },
    imageSpacing: {
        marginRight: '1rem',
    },
}));

function SingleRecipe(props) {
  const classes = useStyles();
  let { dish, imageURL, id } = props.recipe;

  return (
    <div>
      <Button
        color="secondary" 
        className={classes.button}
        variant="contained"
        onClick={ () => props.history.push(`/recipeinfo/${id}`)}
        >
          <img className={classes.imageSpacing} height={50} src={imageURL} alt=""/>
          {dish}
      </Button>
    </div>
  );
}

export default withRouter(SingleRecipe);
