export const initialState = {
    user : null,
    playlists : [],
    playing : false,
    item : null,
    token : "BQDNPL3iXejbmhv8YQVL7wbMYTaL2tNLVEk6rFPGHYI4matFRf…deM8_Zic8D-nebKCApnoxSz8Kg1NWubHAAtDZkeZGaT13ZEvx",

}

export const reducer =(state , action) =>{
    console.log(action);
    switch(action.type){
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
     
        default:
            return state;    
    }

    

}

export default reducer;