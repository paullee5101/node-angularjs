const initialState = {
    heroBannerList:{
        code: null,
        payload: []
    },
    productBannerList: {
        code: null,
        payload: []
    }
}


function portalContents (state = initialState, action) {
    switch(action.type) {
        case 'FETCH_HERO_BANNERS':
            return Object.assign({}, state, { heroBannerList:{ code:action.payload.code, payload:action.payload.banner_list } })
        case 'GET_PRODUCT_BANNER_LIST':
            return Object.assign({}, state, { productBannerList:{ code:action.payload.code, payload:action.payload.banner_list } })
        default:
            return state;
    }
    
}

export default portalContents;