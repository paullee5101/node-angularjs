import fetch from 'isomorphic-fetch'
import { getHeroBannerList, getProductBannerList } from '../actions/PortalContentsActions'
import config from './config'


export function fetchHeroBannerRequest() {
    let api = 'contents/hero-banner';
    
    return (dispatch) => {
        return fetch(config.url + api, {
                method: 'GET'
            })
            .then(response => response.json()) 
            .then(json => {
                dispatch(getHeroBannerList(json))
            })
    }
}

export function fetchProductBannerRequest() {
    let api = "contents/product-banner";

    return (dispatch) => {
        return fetch(config.url + api, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            dispatch(getProductBannerList(json))
        })
    }
}