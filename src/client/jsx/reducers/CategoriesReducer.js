const initialState = {
    categoriesList:{
        code: null,
        payload: [],
        isLoading: false,
        isAction: false
    },
    categoryInfo:{
        code: null,
        payload: [],
        isLoading: false,
        isAction: false
    }
}


function categories (state = initialState, action) {
    switch(action.type) {
        case 'FETCH_CATEGORIES':
            return Object.assign({}, state, { categoriesList:{ code:action.payload.code, payload:action.payload.categories, isLoading:true, isAction:false } })
        case 'FETCH_CATEGORIES_INFO':
            console.log(state)
            return Object.assign({}, state, { categoryInfo:{ code:action.payload.code, payload:action.payload.category[0], isLoading:true, isAction:false } })
        case 'CREATE_CATEGORIES':
            console.log("Created state" + state);
            return Object.assign({}, state, { categoryInfo:{ code:action.payload.code, payload:null, isLoading:true, isAction:true } })
        case 'UPDATE_CATEGORIES':
            console.log("Upadated state" + state);
            return Object.assign({}, state, { categoryInfo:{ code:action.payload.code, payload:null, isLoading:true, isAction:true } })
        case 'RESET_CATEGORIES_FORM':
            console.log(state)
            return Object.assign({}, state, { categoryInfo:{ code:null, payload:[], isLoading:true, isAction:false } })
        case 'CATEGORY_FORM_SUBMIT_SUCCESS':
            console.log(state);
            return Object.assign({}, state, { categoryInfo:{ code:null, payload:state.categoryInfo.payload, isLoading:false, isAction:false } }) 
        default:
            return state;
    }
    
}

export default categories;