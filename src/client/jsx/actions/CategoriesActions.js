import * as ActionType from './ActionTypes'

export function getCategoriesList(payload) {
    return {
        type: ActionType.FETCH_CATEGORIES,
        payload
    }
}

export function getCategoryInfo(payload) {
    return {
        type: ActionType.FETCH_CATEGORIES_INFO,
        payload
    }
}

export function addCategory(payload) {
    return {
        type: ActionType.CREATE_CATEGORIES,
        payload
    }
}

export function updateCategory(payload) {
    return {
        type: ActionType.UPDATE_CATEGORIES,
        payload
    }
}

export function resetCategoryForm() {
    return {
        type: ActionType.RESET_CATEGORIES_FORM
    }
}

export function categoryFormSubmitSuccess(){
    return {
        type: ActionType.CATEGORY_FORM_SUBMIT_SUCCESS
    }
}