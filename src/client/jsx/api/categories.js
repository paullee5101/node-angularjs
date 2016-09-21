import fetch from 'isomorphic-fetch'
import { addCategory, getCategoriesList, getCategoryInfo, updateCategory} from '../actions/CategoriesActions'
import config from './config'


export function fetchCategoriesRequest(taxonomy=null) {
    let api = 'categories/list';
    if(taxonomy != null){
        api += '?taxonomy=' + taxonomy;
    }
    
    return (dispatch) => {
        return fetch(config.url + api, {
                method: 'GET'
            })
            .then(response => response.json()) 
            .then(json => {
                dispatch(getCategoriesList(json))
            })
    }
}

export function fetchCategoryInfoRequest(category_id){
    return (dispatch) => {
        return fetch(config.url + 'categories/info/' + category_id, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            dispatch(getCategoryInfo(json))
        })
    }
}

export function createCategoryRequest(body) {
    return (dispatch) => {
        fetch(config.url + 'categories/create', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(body)
        })
        .then(response => response.json())
        .then(json => {
            dispatch(addCategory(json))
        })
    }
}

export function updateCategoryRequest(body, category_id){
    return (dispatch) => {
        fetch(config.url + 'categories/update/' + category_id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(body)
        })
        .then(response => response.json())
        .then(json => {
            dispatch(updateCategory(json))
        })
    }
}


