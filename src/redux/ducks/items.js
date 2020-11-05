import { MELI_ENDPOINT } from '../../constants/constants'
import axios from 'axios';
import queryString from 'query-string';

const initialState = {
    results: [],
    categories: [],
    author : {},
    detail: {}
}

// Tipo de acción
export const types = {
    FETCH_ITEMS_SUCCESS: 'FETCH_ITEMS_SUCCESS',
    FETCH_ITEM_DETAIL_SUCCESS: 'FETCH_ITEM_DETAIL_SUCCESS'
};

// Reducer
const reducer = (state = initialState, action)  => {
  switch (action.type) {
    case types.FETCH_ITEMS_SUCCESS:
        return { ...state , ...action.payload  }
    case types.FETCH_ITEM_DETAIL_SUCCESS:
        return { ...state , ...action.payload  }
    default:
        return state;
  }
};
export default reducer;

//creador de acciones
export const getItems = (searchText) => {
    return async (dispatch) => {
        try {

            const { data } = await axios.get(`${MELI_ENDPOINT}?q=${searchText}`)
            dispatch({
                type : types.FETCH_ITEMS_SUCCESS,
                payload: {
                    results: data.items,
                    categories: data.categories,
                    author: data.author
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
};

export const getItemById = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${MELI_ENDPOINT}/${id}`)
            dispatch({
                type : types.FETCH_ITEM_DETAIL_SUCCESS,
                payload: {
                    detail: data.item,
                    categories: data.categories,
                    author: data.author
                 } 
            })
        } catch (error) {
            console.log(error);
        }
    }
};


