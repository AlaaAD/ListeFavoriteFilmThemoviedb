const initState = { favoritesFilm : [] }
function toggleFavorite(state = initState,action){
    let nextState
    switch (action.type) {
        case 'TOGGLE_FAVORITE':
         const favoriteFilmIndex = state.favoritesFilm.findIndex(item => item.id === action.value.id)
         if (favoriteFilmIndex !== -1){
             // donc le film existe déja dans les favoris , on le supprime de la liste 
             nextState = {
                 ...state,
                 favoritesFilm : state.favoritesFilm.filter((item,index)=> index !== favoriteFilmIndex)
             }

         }
         else {
             // le film n'existe pas dans la liste on doit l'ajouter
            nextState = {
                ...state,
                favoritesFilm : [...state.favoritesFilm,action.value]
            }
         }
         return nextState || state   
        
    
        default:
           return state;
    }
}
export default toggleFavorite