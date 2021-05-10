import { ACTIVE_RECIPE, 
        DELETE_RECIPE, 
        REMOVE_ACTIVE_RECIPE, 
        CREATE_RECIPE, 
        MODIFY_RECIPE } from "../ActionTypes";

const initialState = {
    recipes  : [
        {id : 'lkjl8978', date : 'Sunday 12 July 2021 5:15AM' , dish : 'Butter Paneer Masala', chef : 'Andre Osuul', ingredients : ["Paneer", "Milk", "Spices", "Vegetables", "Curd", "Oil"], imageURL : 'https://www.cubesnjuliennes.com/wp-content/uploads/2019/11/Paneer-Butter-Masala-Recipe-1-500x500.jpg', desc : 'This dish is made by famous Crickter Andre osuul who is best known for his famous dishes and his blaster Cricket'},
        {id : 'kjhuk54684',date : 'Friday 09 May 2021 02:39PM' , dish : 'Veg Biriyani', chef : 'Jalaj Kumar Gaur', ingredients : ["Rice", "Dry Fruits", "Spices", "Mix Vegs", "clove", "Red pepper"], imageURL : 'https://static.toiimg.com/thumb/53098310.cms?imgsize=579584&width=800&height=800' , desc : 'Take a Pan mix all the ingredients and make powder in the mixer and pour some oil in pan and put them grabbie in it and after 5 minutes put night water rice in it'}
      ],
      activeRecipe : null
};

const RecipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIVE_RECIPE:
            return {
                ...state,
                activeRecipe : state.recipes.find(r => r.id === action.payload)
            };
        case REMOVE_ACTIVE_RECIPE:
            return {
                ...state,
                activeRecipe : null
            };
        case DELETE_RECIPE:
            const RRD = [...state.recipes];
            const FRD = RRD.filter(r => r.id !== action.payload);
            return {
                ...state,
                recipes : FRD
            }
        case CREATE_RECIPE:
            const CRD = [...state.recipes];
            CRD.push(action.payload)
            return {
                ...state,
                recipes : CRD
            }
        case MODIFY_RECIPE:
        const MRD = [...state.recipes];
        const MRIndex = MRD.findIndex(r => r.id === action.payload.id);
        MRD[MRIndex] = action.payload;
        return {
            ...state,
            recipes : MRD
        } 
        default:
           return state;
    }
}

export default RecipeReducer;