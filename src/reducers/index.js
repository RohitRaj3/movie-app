export default function movies (state= [], actions){
    if(action.type === 'ADD_MOVIES'){
        return actions.movies;
    }
    return state;
}