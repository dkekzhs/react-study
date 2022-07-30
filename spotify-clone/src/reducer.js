export const initialState = {
    user : null,
    playlists : [],
    playing : false,
    item : null,
    token : null,

}

export const reducer =(state , action) =>{
    console.log(action.item);
    switch(action.type){
        case "SET_PLAYING":
            return {
              ...state,
              playing: action.playing,
            };
      
          case "SET_ITEM":
            return {
              ...state,
              item: action.item,
            };
        case 'SET_USER':
            return {
                ...state,
                user : action.user
            };
        case 'SET_TOKEN':
            return{
            ...state,
            token : action.token
            };
        case "SET_PLAYLISTS":
            return{
                ...state,
                playlists : action.playlists
            }      
        case "SET_MUSIC":
            return{
                ...state,
                music : action.music
            }      
     
        default:
            return state;    
    }

    

}

export default reducer;