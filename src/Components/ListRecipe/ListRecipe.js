import React, { useEffect, useState } from 'react';
import SingleRecipe from './SingleRecipe/SingleRecipe';
import { connect } from 'react-redux';

function ListRecipe(props) {

  const [state, setstate] = useState(null);

  useEffect(() => {
    if(props.recipes){
      setstate([...props.recipes]);
    }
  }, [props.recipes]);
  let recipelist = ''
  if(state){
    recipelist = state.map( r => <SingleRecipe key= {r.date} recipe= {r} />)
}

return recipelist;
}

const mapStateToProps = (state) => {
  return {
    recipes : state.RecipeReducer.recipes
  };
}

export default connect(mapStateToProps)(ListRecipe);
