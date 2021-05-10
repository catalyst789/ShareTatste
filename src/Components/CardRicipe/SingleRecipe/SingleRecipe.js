import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography, Button } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import More from '@material-ui/icons/More';
import red from '@material-ui/core/colors';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: theme.spacing(3),
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
      backgroundColor: 'red'
  },
  button: {
    marginLeft: "auto"
  },
}));

function SingleRecipe(props) {
  const classes = useStyles();  
  let { chef, dish, date, imageURL, desc, id } = props.recipe;
  let i = chef.indexOf(' ');

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
        <Avatar className={classes.avatar} aria-label="recipe">
            {chef[0]}{chef[i+1]}
        </Avatar>
        }
        action={
        <IconButton aria-label="settings">
            <MoreVertIcon />
        </IconButton>
        }
        title={dish}
        subheader={date}
      />
      <CardMedia
        className={classes.media}
        image={imageURL}
        title={dish}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {desc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button
          className={classes.button}
          color="secondary"
          startIcon={<More />}
          onClick={ () => props.history.push(`/recipeinfo/${id}`)}
        >Recipe Detail</Button>
      </CardActions>
    </Card>
  );
}

export default withRouter(SingleRecipe);
