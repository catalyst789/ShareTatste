import { ACTIVE_RECIPE, REMOVE_ACTIVE_RECIPE, DELETE_RECIPE, CREATE_RECIPE, MODIFY_RECIPE } from '../ActionTypes';

export const getActiveRecipe = (id) => {
    return {
        type: ACTIVE_RECIPE,
        payload: id
    }
}
export const removeActiveRecipe = () => {
    return {
        type: REMOVE_ACTIVE_RECIPE
    }
}
export const deleteRecipeAction = (id) => {
    return {
        type : DELETE_RECIPE,
        payload : id
    }
}
export const createRecipeAction = (recipe) => {
    return {
        type : CREATE_RECIPE,
        payload : recipe
    }
}
export const modifyRecipeAction = (recipe) => {
    return {
        type : MODIFY_RECIPE,
        payload : recipe
    }
}