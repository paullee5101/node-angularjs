import * as ActionType from './ActionTypes'

export function getHeroBannerList(payload) {
    return {
        type: ActionType.FETCH_HERO_BANNERS,
        payload
    }
} 

export function getProductBannerList(payload) {
	return {
		type: ActionType.GET_PRODUCT_BANNER_LIST,
		payload
	}
}